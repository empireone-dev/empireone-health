import { NextResponse } from "next/server";
import knowledgeBase from "@/app/_lib/ava-knowledge-base";
import { captureAvaLead } from "@/app/_lib/pipedrive-server";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 2000;
const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "can",
  "you",
  "your",
  "are",
  "what",
  "how",
  "does",
  "this",
  "that",
  "from",
  "have",
  "about",
]);

export async function POST(request) {
  try {
    const payload = await request.json();
    const message = String(payload?.message || "").trim();
    const history = Array.isArray(payload?.history) ? payload.history.slice(-8) : [];
    const page = String(payload?.page || "").slice(0, 200);
    const action = String(payload?.action || "").trim();

    if (action === "lead") {
      try {
        const pipedrive = await captureAvaLead({ lead: payload?.lead, page });
        if (!pipedrive.configured) {
          console.warn("[Ava] Pipedrive is not configured; lead was not sent.");
        }
        return NextResponse.json({ status: "success", pipedrive });
      } catch (error) {
        console.error("[Ava] Pipedrive lead capture failed:", error);
        return NextResponse.json(
          { status: "error", error: "Lead capture failed" },
          { status: 502 },
        );
      }
    }

    if (action === "feedback") {
      console.info("[Ava] feedback", {
        rating: payload?.rating === "down" ? "down" : "up",
        responseId: String(payload?.responseId || "").slice(0, 80),
        page,
      });
      return NextResponse.json({ status: "success" });
    }

    if (!message || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Please send a message between 1 and ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 },
      );
    }

    if (isGreeting(message)) {
      return NextResponse.json({
        responseId: createResponseId(),
        answer:
          "Hi! I’m Ava, the EmpireOne Health assistant. I can help with provider services, payer services, healthcare operations, revenue cycle support, or booking a call. What would you like to know?",
        handoff: false,
        leadCapture: false,
        sources: [],
        usedAi: false,
      });
    }

    const matches = findKnowledgeMatches(message, knowledgeBase, 5);
    const handoff = hasHandoffIntent(message);
    const leadIntent = hasLeadIntent(message);
    const lowConfidence = !matches.length || matches[0].score < 2;
    const sources = matches.map(({ entry }) => ({ title: entry.title, url: entry.url }));
    const fallback = buildFallbackAnswer(message, matches, handoff || leadIntent || lowConfidence);
    let answer = fallback;
    let usedAi = false;

    const provider = process.env.OPENROUTER_API_KEY
      ? "openrouter"
      : process.env.GROQ_API_KEY
        ? "groq"
        : null;

    if (provider && !(handoff && lowConfidence)) {
      const aiAnswer = await askAi({ message, history, matches, page, provider });
      if (aiAnswer) {
        answer = aiAnswer;
        usedAi = true;
      }
    }

    return NextResponse.json({
      responseId: createResponseId(),
      answer,
      handoff: handoff || leadIntent || lowConfidence,
      leadCapture: handoff || leadIntent,
      sources,
      usedAi,
    });
  } catch (error) {
    console.error("Ava request failed:", error);
    return NextResponse.json({ error: "Ava could not process that request." }, { status: 500 });
  }
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));
}

function findKnowledgeMatches(query, entries, limit) {
  const tokens = tokenize(query);
  return entries
    .map((entry) => {
      const haystack = `${entry.title} ${entry.keywords.join(" ")} ${entry.content}`.toLowerCase();
      let score = 0;
      for (const token of tokens) score += haystack.split(token).length - 1;
      for (const keyword of entry.keywords) {
        if (query.toLowerCase().includes(keyword.toLowerCase())) score += 3;
      }
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function buildFallbackAnswer(message, matches, handoff) {
  if (!matches.length) {
    return "I don’t have enough approved EmpireOne Health information to answer that confidently. I can connect you with the team, or you can book a call at /appointment or contact info@empireonehealth.com.";
  }

  let answer = matches[0].entry.content;
  if (matches.length > 1) {
    answer += `\n\nRelated: ${matches
      .slice(1, 3)
      .map(({ entry }) => entry.title)
      .join("; ")}.`;
  }
  if (handoff) {
    answer += "\n\nFor pricing, a custom scope, compliance evidence, or a consultation, I can connect you with the EmpireOne Health team.";
  }
  return answer;
}

async function askAi({ message, history, matches, page, provider }) {
  const context = matches
    .map(({ entry }) => `Title: ${entry.title}\nURL: ${entry.url}\nContent: ${entry.content}`)
    .join("\n\n");
  const historyText = history
    .map((item) => `${item?.role === "user" ? "Visitor" : "Ava"}: ${String(item?.content || "").slice(0, 700)}`)
    .join("\n");

  const isOpenRouter = provider === "openrouter";
  const configuredModel = isOpenRouter
    ? process.env.OPENROUTER_MODEL || "openrouter/free"
    : process.env.AI_CHAT_MODEL || "llama-3.3-70b-versatile";
  const models = isOpenRouter
    ? [...new Set([configuredModel, "openrouter/free"])]
    : [configuredModel];
  let response = null;

  for (const model of models) {
    response = await fetch(
      isOpenRouter
        ? "https://openrouter.ai/api/v1/chat/completions"
        : "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${isOpenRouter ? process.env.OPENROUTER_API_KEY : process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
          ...(isOpenRouter
            ? {
                "HTTP-Referer": process.env.OPENROUTER_SITE_URL || "http://127.0.0.1:3000",
                "X-Title": "EmpireOne Health Ava",
              }
            : {}),
        },
        body: JSON.stringify({
          model,
          temperature: 0.35,
          max_tokens: 450,
          messages: [
            {
              role: "system",
              content:
                "You are Ava, the EmpireOne Health website assistant. Use only the provided EmpireOne Health knowledge. Be concise, warm, and helpful. If the question is not about EmpireOne Health or healthcare BPO/operations, say that you can only help with those topics. Never invent pricing, guarantees, certifications, locations, timelines, or patient-specific medical advice. For pricing, custom scopes, legal or compliance evidence, or a request for a person, offer to connect the visitor with the team. Return only the visitor-facing answer; never return safety labels, moderation analysis, policy text, or internal reasoning. Keep answers under 140 words.",
            },
            {
              role: "user",
              content: `Current page: ${page}\n\nKnowledge:\n${context}\n\nRecent chat:\n${historyText}\n\nVisitor question: ${message}`,
            },
          ],
        }),
        signal: AbortSignal.timeout(20000),
      },
    );

    if (response.ok || response.status !== 429) break;
    console.warn(`Ava ${provider} model ${model} was rate-limited; trying the fallback model.`);
  }

  if (!response || !response.ok) {
    console.error(`Ava ${provider} request failed:`, response.status);
    return null;
  }

  const data = await response.json();
  const answer = String(data?.choices?.[0]?.message?.content || "").trim();
  if (!answer || /^(user safety|assistant safety|safety|moderation)\s*:/i.test(answer)) {
    console.warn("Ava returned a non-user-facing answer; using the approved fallback.");
    return null;
  }
  return answer;
}

function hasHandoffIntent(message) {
  return ["human", "agent", "person", "representative", "sales", "quote", "pricing", "price", "proposal", "call me", "contact me", "talk to", "book"].some((term) => message.toLowerCase().includes(term));
}

function hasLeadIntent(message) {
  return ["need support", "need a team", "outsource", "hire", "build team", "consultation", "bpo support", "rcm support"].some((term) => message.toLowerCase().includes(term));
}

function isGreeting(message) {
  return /^(hi|hello|hey|good morning|good afternoon|good evening)\b/i.test(message.trim());
}

function createResponseId() {
  return `ava_${crypto.randomUUID()}`;
}

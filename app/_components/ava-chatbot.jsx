"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FLOW_OPTIONS = {
  provider: {
    label: "Provider services",
    question: "Which provider workflow would you like to explore?",
    field: "service",
    options: ["Scheduling and referrals", "Eligibility and benefits", "Prior authorization", "Denial management", "Patient collections"],
  },
  payer: {
    label: "Payer services",
    question: "Which payer workflow would you like to explore?",
    field: "service",
    options: ["Member services", "Enrollment support", "Provider data management"],
  },
  contact: {
    label: "Talk to the team",
    question: "I can collect a few details and help the EmpireOne Health team follow up. What is your full name?",
    field: "full_name",
    options: [],
  },
};

const LEAD_STEPS = [
  ["full_name", "What is your full name?"],
  ["company_name", "What is your company name?"],
  ["company_email", "What is your company email address?"],
  ["phone", "What phone number should our team use to reach you?"],
];

function initialMessages() {
  return [
    { role: "bot", text: "Hi! I’m Ava, the EmpireOne Health assistant." },
    { role: "bot", text: "I can help with provider services, payer services, healthcare operations, revenue cycle support, or booking a call." },
  ];
}

export default function AvaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [quickOptions, setQuickOptions] = useState([
    { label: "Provider services", flow: "provider" },
    { label: "Payer services", flow: "payer" },
    { label: "Book a call", flow: "contact" },
    { label: "Compliance and quality", text: "What compliance and quality practices does EmpireOne Health highlight?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [flow, setFlow] = useState(null);
  const [lead, setLead] = useState({});
  const messagesRef = useRef(null);

  useEffect(() => {
    const messagesElement = messagesRef.current;
    if (messagesElement) {
      messagesElement.scrollTo({
        top: messagesElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  function addMessages(nextMessages) {
    setMessages((current) => [...current, ...nextMessages]);
  }

  function startFlow(flowKey) {
    const selected = FLOW_OPTIONS[flowKey];
    if (!selected) return;

    setFlow({ key: flowKey, field: selected.field, stepIndex: flowKey === "contact" ? 0 : -1 });
    setLead((current) => ({ ...current, intent: selected.label }));
    setQuickOptions(selected.options.map((option) => ({ label: option, value: option })));
    addMessages([
      { role: "user", text: selected.label },
      { role: "bot", text: selected.question },
    ]);
  }

  async function submitLeadValue(value) {
    if (!flow || !value.trim()) return;
    const cleanValue = value.trim();
    const nextLead = { ...lead, [flow.field]: cleanValue };
    addMessages([{ role: "user", text: cleanValue }]);

    if (flow.stepIndex === -1) {
      const nextStep = { key: flow.key, field: "lead", stepIndex: 0 };
      setLead(nextLead);
      setFlow(nextStep);
      setQuickOptions([]);
      addMessages([{ role: "bot", text: LEAD_STEPS[0][1] }]);
      return;
    }

    const nextIndex = flow.stepIndex + 1;
    setLead(nextLead);
    if (nextIndex < LEAD_STEPS.length) {
      setFlow({ ...flow, field: LEAD_STEPS[nextIndex][0], stepIndex: nextIndex });
      addMessages([{ role: "bot", text: LEAD_STEPS[nextIndex][1] }]);
      return;
    }

    setFlow(null);
    setQuickOptions([
      { label: "Ask another question", text: "What services do you provide?" },
      { label: "View services", href: "/services" },
    ]);
    addMessages([{ role: "bot", text: "Thank you. The EmpireOne Health team can follow up shortly." }]);

    await fetch("/api/ava", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "lead", lead: nextLead, page: window.location.pathname }),
    }).catch(() => undefined);
  }

  async function askAva(rawText) {
    const text = rawText.trim();
    if (!text || isTyping) return;
    setInput("");

    if (flow) {
      await submitLeadValue(text);
      return;
    }

    addMessages([{ role: "user", text }]);
    setQuickOptions([]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/ava", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          page: window.location.pathname,
          history: messages.slice(-8).map(({ role, text: content }) => ({ role, content })),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Ava request failed");
      addMessages([{ role: "bot", text: data.answer, sources: data.sources }]);
      setQuickOptions(data.leadCapture ? [{ label: "Talk to the team", flow: "contact" }] : [
        { label: "Provider services", flow: "provider" },
        { label: "Payer services", flow: "payer" },
        { label: "Book a call", flow: "contact" },
      ]);
    } catch {
      addMessages([{ role: "bot", text: "I’m having trouble connecting right now. You can contact info@empireonehealth.com or book a call." }]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className={`ava-chat ${isOpen ? "ava-chat--open" : ""}`}>
      {!isOpen && (
        <aside className="ava-chat__welcome" aria-label="Ask Ava welcome message">
          <div className="ava-chat__welcome-head">
            <AvaAvatar />
            <div>
              <strong>Ask Ava</strong>
              <span>EmpireOne Health assistant</span>
            </div>
          </div>
          <p>Questions about provider and payer operations? I can help.</p>
        </aside>
      )}

      <button className="ava-chat__launcher" type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close Ask Ava" : "Open Ask Ava AI chat"}>
        <span className="ava-chat__launcher-avatar"><Image src="/images/ask-ava-avatar-animated.webp" alt="" width={64} height={64} priority /></span>
        <span>Ask Ava</span>
      </button>

      {isOpen && (
        <section className="ava-chat__panel" aria-label="EmpireOne Health AI chat">
          <header className="ava-chat__header">
            <AvaAvatar />
            <div><strong>Ask Ava</strong><span>EmpireOne Health assistant</span></div>
            <button className="ava-chat__close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">×</button>
          </header>

          <div ref={messagesRef} className="ava-chat__messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`ava-chat__row ava-chat__row--${message.role}`} key={`${message.role}-${index}`}>
                {message.role === "bot" && <AvaAvatar mini />}
                <div className={`ava-chat__bubble ava-chat__bubble--${message.role}`}>
                  <span>{message.text}</span>
                  {message.sources?.length > 0 && <div className="ava-chat__sources">{message.sources.slice(0, 3).map((source) => <a href={source.url} key={source.url}>{source.title}</a>)}</div>}
                </div>
              </div>
            ))}
            {isTyping && <div className="ava-chat__typing">Ava is thinking…</div>}
          </div>

          <div className="ava-chat__footer">
            <div className="ava-chat__quick-options">
              {quickOptions.map((option) => (
                option.href ? <a href={option.href} key={option.label}>{option.label}</a> : <button type="button" key={option.label} onClick={() => option.flow ? startFlow(option.flow) : askAva(option.text || option.value || option.label)}>{option.label}</button>
              ))}
            </div>
            <form className="ava-chat__composer" onSubmit={(event) => { event.preventDefault(); askAva(input); }}>
              <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); askAva(input); } }} placeholder={flow ? "Type your answer…" : "Ask Ava a question…"} rows={1} aria-label="Message Ava" />
              <button type="submit" disabled={isTyping || !input.trim()} aria-label="Send message">➤</button>
            </form>
            <small>AI responses use approved EmpireOne Health information. <a href="/privacy-policy">Privacy policy</a></small>
          </div>
        </section>
      )}
    </div>
  );
}

function AvaAvatar({ mini = false }) {
  return <span className={`ava-chat__avatar ${mini ? "ava-chat__avatar--mini" : ""}`}><Image src="/images/ask-ava-static.webp" alt="" width={mini ? 30 : 42} height={mini ? 30 : 42} /></span>;
}

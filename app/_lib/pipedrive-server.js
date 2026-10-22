const PIPEDRIVE_BASE_URL = "https://empireonehealth.pipedrive.com/v1";

function getPipedriveToken() {
  // Prefer the private variable. The public name is supported temporarily so
  // existing local deployments can migrate without breaking their forms.
  return process.env.PIPEDRIVE_API_KEY || process.env.NEXT_PUBLIC_PIPEDRIVE_API_KEY || "";
}

async function pipedrivePost(endpoint, payload) {
  const token = getPipedriveToken();
  if (!token) {
    return { configured: false, data: null };
  }

  const response = await fetch(`${PIPEDRIVE_BASE_URL}${endpoint}?api_token=${encodeURIComponent(token)}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    throw new Error(`Pipedrive ${endpoint} failed: ${result.error || response.statusText}`);
  }

  return { configured: true, data: result.data || null };
}

export async function captureAvaLead({ lead, page }) {
  const cleanLead = sanitizeLead(lead);
  const name = cleanLead.full_name || "Ava Website Lead";
  const email = cleanLead.company_email;
  const phone = cleanLead.phone;

  if (!email) {
    return { configured: Boolean(getPipedriveToken()), captured: false, reason: "email_required" };
  }

  const person = await pipedrivePost("/persons", {
    name,
    email: [{ value: email, primary: true, label: "work" }],
    ...(phone ? { phone: [{ value: phone, primary: true, label: "work" }] } : {}),
  });

  if (!person.configured) {
    return { configured: false, captured: false, reason: "not_configured" };
  }

  const leadRecord = await pipedrivePost("/leads", {
    title: `${name} - Ava Chat Lead`,
    person_id: person.data?.id,
  });

  const noteLines = [
    "Lead captured by Ava chatbot",
    `Page: ${page || "/"}`,
    cleanLead.intent ? `Intent: ${cleanLead.intent}` : null,
    cleanLead.service ? `Service interest: ${cleanLead.service}` : null,
    cleanLead.company_name ? `Company: ${cleanLead.company_name}` : null,
  ].filter(Boolean);

  const note = await pipedrivePost("/notes", {
    person_id: person.data?.id,
    content: noteLines.join("\n"),
  });

  return {
    configured: true,
    captured: true,
    personId: person.data?.id || null,
    leadId: leadRecord.data?.id || null,
    noteId: note.data?.id || null,
  };
}

function sanitizeLead(lead) {
  const allowedFields = ["intent", "service", "full_name", "company_name", "company_email", "phone"];
  return Object.fromEntries(
    allowedFields
      .filter((field) => lead?.[field])
      .map((field) => [field, String(lead[field]).trim().slice(0, 300)]),
  );
}

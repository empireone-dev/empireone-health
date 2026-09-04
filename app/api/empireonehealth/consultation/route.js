import { NextResponse } from "next/server";
import {
  consultationConfirmationEmail,
  consultationNotificationEmail,
} from "@/app/_lib/empireonehealth-email-templates";

const ADMIN_RECIPIENT = "info@empireonehealth.com";

async function sendAppsScriptEmail(webAppUrl, payload) {
  const response = await fetch(webAppUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Apps Script request failed: ${response.status} ${response.statusText}`);
  }
}

export async function POST(request) {
  const webAppUrl = process.env.SEND_EMPIREONEHEALTH_CONSULTATION;
  if (!webAppUrl) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured" },
      { status: 500 },
    );
  }

  const data = await request.json();
  const templateData = {
    name: data.name,
    company_name: data.company_name || "NA",
    email: data.email,
    phone: data.phone,
    notes: data.notes,
    looking_for: data.help_with || "A consultation",
  };
  const consultationId = data.consultation_id || "NA";

  try {
    await Promise.all([
      sendAppsScriptEmail(webAppUrl, {
        recipient: ADMIN_RECIPIENT,
        subject: `Consultation Appointment #${consultationId}`,
        body: consultationNotificationEmail(templateData),
      }),
      sendAppsScriptEmail(webAppUrl, {
        recipient: data.email,
        subject: `Consultation Appointment #${consultationId}`,
        body: consultationConfirmationEmail(templateData),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send consultation email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send consultation email" },
      { status: 502 },
    );
  }
}

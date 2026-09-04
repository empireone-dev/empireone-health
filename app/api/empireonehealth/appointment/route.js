import { NextResponse } from "next/server";
import {
  bookingConfirmationEmail,
  bookingNotificationEmail,
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
  const webAppUrl = process.env.SEND_EMPIREONEHEALTH_APPOINTMENT;
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
    looking_for: data.looking_for || "A callback",
  };
  const appointmentId = data.appointment_id || "NA";

  try {
    await Promise.all([
      sendAppsScriptEmail(webAppUrl, {
        recipient: data.email,
        subject: `Appointment Confirmation #${appointmentId}`,
        body: bookingConfirmationEmail(templateData),
      }),
      sendAppsScriptEmail(webAppUrl, {
        recipient: ADMIN_RECIPIENT,
        subject: `Appointment Notification #${appointmentId}`,
        body: bookingNotificationEmail(templateData),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send appointment email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send appointment email" },
      { status: 502 },
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request) {
  const webAppUrl = process.env.SEND_EMPIREONEHEALTH_SCHEDULE;
  if (!webAppUrl) {
    return NextResponse.json(
      { success: false, message: "Schedule service is not configured" },
      { status: 500 },
    );
  }

  const data = await request.json();

  try {
    const companyName = data.company_name || "EmpireOne Health";
    const source = data.source || "N/A";
    const buildGoal = data.looking_to_build || "N/A";
    const userMessage = data.message || "None provided";
    const contactNumber = data.contact_number || "None";

    const description =
      "Booking EmpireOne Health - 30 Minutes Call\n" +
      "--------------------------------------------------\n" +
      `Full Name: ${data.name}\n` +
      `Company Name: ${companyName}\n` +
      `Email: ${data.email}\n` +
      `Contact Number: ${contactNumber}\n` +
      `Source: ${source}\n` +
      `Looking to build: ${buildGoal}\n` +
      "--------------------------------------------------\n" +
      `Message:\n${userMessage}\n\n` +
      "Please be ready 5 minutes before the start time.";

    const params = new URLSearchParams({
      email: data.email,
      name: data.name,
      start_time: data.start_time,
      end_time: data.end_time,
      description,
      title: `EmpireOne Health 30 Minutes Call - ${data.name}`,
    });

    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`Apps Script request failed: ${response.status} ${response.statusText}`);
    }

    const body = await response.text();
    let result = body;
    try {
      result = JSON.parse(body);
    } catch {
      // Apps Script may return a plain-text/HTML body; keep it as-is.
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Failed to schedule booking:", error);
    return NextResponse.json(
      { success: false, message: "Failed to schedule booking: " + error.message },
      { status: 502 },
    );
  }
}

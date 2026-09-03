const pipeDriveToken = process.env.NEXT_PUBLIC_PIPEDRIVE_API_KEY;
const pipeDriveBaseUrl = `https://empireonehealth.pipedrive.com/v1`;

// Shared helper for all Pipedrive-bound requests
async function pipeDrivePost(endpoint, payload) {
  const response = await fetch(
    `${pipeDriveBaseUrl}${endpoint}?api_token=${pipeDriveToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await response.json();

  if (!response.ok || result.success === false) {
    throw new Error(
      `Pipedrive Error [${endpoint}]: ${result.error || response.statusText}`,
    );
  }

  return result;
}

// Notifies our own Next.js API route, which relays the email through the
// Google Apps Script web app (kept server-side since the script URLs aren't public).
async function sendEmpireOneHealthEmail(endpoint, payload) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      throw new Error(result.message || response.statusText);
    }
  } catch (error) {
    // Email delivery is best-effort; it must not fail the booking flow.
    console.error(`Failed to send email via ${endpoint}:`, error);
  }
}

export async function add_booking_service(data) {
  try {
    // 1. Create Person
    const resPerson = await pipeDrivePost("/persons", {
      name: data.name,
      email: [{ value: data.email, primary: true, label: "work" }],
    });

    // 2. Create Lead with the appointment slot
    const resLead = await pipeDrivePost("/leads", {
      title: `${data.name} - Booking Request`,
      person_id: resPerson?.data?.id,
    });

    // 3. Attach the appointment time as a note on the person
    const resNote = await pipeDrivePost("/notes", {
      person_id: resPerson?.data?.id,
      content: `Start: ${data.start_time}\nEnd: ${data.end_time}`,
    });

    // 4. Send the calendar invite via the Apps Script web app
    await sendEmpireOneHealthEmail("/api/empireonehealth/schedule", data);

    return { person: resPerson.data, lead: resLead.data, note: resNote.data };
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error; // Excellent practice to throw this so your React try/catch handles it
  }
}

export async function add_booking30_min_call_service(data) {
  try {
    // 1. Create Person
    const resPerson = await pipeDrivePost("/persons", data.person);

    // 2. Create Organization Field
    const resOrgField = await pipeDrivePost("/organizationFields", {
      person_id: resPerson?.data?.id,
      ...data.organization,
    });

    console.log('resOrgField?.data?.id', resOrgField?.data?.id)

    // 3. Create Lead
    const resLead = await pipeDrivePost("/leads", {
      title: `${data.name} - Appointment Request`,
      person_id: resPerson?.data?.id,
      //   organization_id: resOrgField?.data?.id,
      ...data.lead,
    });

    console.log("Lead created successfully:", resLead);

    // 4. Send confirmation + admin notification emails via the Apps Script web app
    await sendEmpireOneHealthEmail("/api/empireonehealth/appointment", {
      name: data.person?.name,
      email: data.person?.email?.[0]?.value,
      phone: data.person?.phone?.[0]?.value,
      notes: data.person?.notes,
      company_name: data.organization?.name,
      source: data.lead?.origin_id,
      looking_for: data.organization?.custom_fields?.service,
      appointment_id: resLead?.data?.id,
    });

    return {
      person: resPerson.data,
      organizationField: resOrgField.data,
      lead: resLead.data,
    };
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error;
  }
}

export async function add_appointment_service(data) {
  try {
    // 1. Create Person
    const resPerson = await pipeDrivePost("/persons", {
      name: data.name,
      email: [{ value: data.email, primary: true, label: "work" }],
      phone: data.phone
        ? [{ value: data.phone, primary: true, label: "work" }]
        : undefined,
    });

    // 2. Create Lead
    const resLead = await pipeDrivePost("/leads", {
      title: `${data.name} - Get In Touch`,
      person_id: resPerson?.data?.id,
    });

    // 3. Attach notes, if provided
    const resNote = data.notes
      ? await pipeDrivePost("/notes", {
        person_id: resPerson?.data?.id,
        content: data.notes,
      })
      : null;

    // 4. Send confirmation + admin notification emails via the Apps Script web app
    await sendEmpireOneHealthEmail("/api/empireonehealth/appointment", {
      ...data,
      appointment_id: resLead?.data?.id,
    });

    return {
      person: resPerson.data,
      lead: resLead.data,
      note: resNote?.data ?? null,
    };
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error;
  }
}

export async function add_consultation_service(data) {
  try {
    // 1. Create Person
    const resPerson = await pipeDrivePost("/persons", {
      name: data.name,
      email: [{ value: data.email, primary: true, label: "work" }],
      phone: [{ value: data.phone, primary: true, label: "work" }],
    });

    // 2. Create Organization Field, if a company name was provided
    const resOrgField = data.company_name
      ? await pipeDrivePost("/organizationFields", {
        person_id: resPerson?.data?.id,
        name: data.company_name,
        field_name: data.company_name,
        field_type: "text",
        custom_fields: { help_with: data.help_with },
      })
      : null;

    // 3. Create Lead
    const resLead = await pipeDrivePost("/leads", {
      title: `${data.name} - Consultation Request`,
      person_id: resPerson?.data?.id,
      origin_id: data.source,
    });

    // 4. Attach notes, if provided
    const resNote = data.notes
      ? await pipeDrivePost("/notes", {
        person_id: resPerson?.data?.id,
        content: data.notes,
      })
      : null;

    // 5. Send confirmation + admin notification emails via the Apps Script web app
    await sendEmpireOneHealthEmail("/api/empireonehealth/consultation", {
      ...data,
      consultation_id: resLead?.data?.id,
    });

    return {
      person: resPerson.data,
      organizationField: resOrgField?.data ?? null,
      lead: resLead.data,
      note: resNote?.data ?? null,
    };
  } catch (error) {
    console.error("Failed to create consultation:", error);
    throw error;
  }
}

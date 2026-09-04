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

export async function add_booking_service(data) {
  try {
    // 1. Create Person
    const resPerson = await pipeDrivePost("/persons", {
      name: data.name,
      email: [{ value: data.email, primary: true, label: "work" }],
    });

    // 2. Create Lead with the appointment slot
    const resLead = await pipeDrivePost("/leads", {
      title: `Booking - ${data.name}`,
      person_id: resPerson?.data?.id,
    });

    // 3. Attach the appointment time as a note on the person
    const resNote = await pipeDrivePost("/notes", {
      person_id: resPerson?.data?.id,
      content: `Start: ${data.start_time}\nEnd: ${data.end_time}`,
    });

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

    console.log('resOrgField?.data?.id',resOrgField?.data?.id)

    // 3. Create Lead
    const resLead = await pipeDrivePost("/leads", {
      person_id: resPerson?.data?.id,
    //   organization_id: resOrgField?.data?.id,
      ...data.lead,
    });

    console.log("Lead created successfully:", resLead);

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
      title: `Get In Touch - ${data.name}`,
      person_id: resPerson?.data?.id,
    });

    // 3. Attach notes, if provided
    const resNote = data.notes
      ? await pipeDrivePost("/notes", {
          person_id: resPerson?.data?.id,
          content: data.notes,
        })
      : null;

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
      title: `Consultation Request - ${data.name}`,
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

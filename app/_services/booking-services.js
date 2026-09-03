const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION;
const pipeDriveToken = process.env.NEXT_PUBLIC_PIPEDRIVE_API_KEY;
const pipeDriveBaseUrl = `https://empireonehealth.pipedrive.com/v1`;

export async function add_booking_service(data) {
  try {
    const response = await fetch(`${baseUrl}/api/add_booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data), // <-- Must stringify the object!
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error; // Excellent practice to throw this so your React try/catch handles it
  }
}
export async function add_booking30_min_call_service(data) {
  const apiPost = async (endpoint, payload) => {
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
  };

  try {
    // 1. Create Person
    const resPerson = await apiPost("/persons", data.person);

    // 2. Create Organization Field
    const resOrgField = await apiPost("/organizationFields", {
      person_id: resPerson?.data?.id,
      ...data.organization,
    });

    console.log('resOrgField?.data?.id',resOrgField?.data?.id)

    // 3. Create Lead
    const resLead = await apiPost("/leads", {
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
    const response = await fetch(`${baseUrl}/api/add_appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error;
  }
}

export async function add_consultation_service(data) {
  try {
    const response = await fetch(`${baseUrl}/api/add_consultation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (error) {
    console.error("Failed to create consultation:", error);
    throw error;
  }
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION || "";

/**
 * Builds a valid absolute or relative URL string without duplicate slashes.
 */
function buildUrl(path) {
  if (!baseUrl) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  // Ensure protocol is present if baseUrl is a domain (e.g. "careers.empireonecx.com")
  let domain = baseUrl;
  if (!domain.startsWith("http://") && !domain.startsWith("https://")) {
    domain = `https://${domain}`;
  }

  // Strip trailing slashes from domain and leading slashes from path
  const cleanDomain = domain.replace(/\/+$/, "");
  const cleanPath = path.replace(/^\/+/, "");

  return `${cleanDomain}/${cleanPath}`;
}

/**
 * Generic API client helper for POST requests
 */
async function postRequest(path, data) {
  const url = buildUrl(path);

  const response = await fetch(url, {
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
}

export async function add_booking_service(data) {
  try {
    return await postRequest("/api/add_booking", data);
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error;
  }
}

export async function add_appointment_service(data) {
  try {
    return await postRequest("/api/add_appointment", data);
  } catch (error) {
    console.error("Failed to create appointment:", error);
    throw error;
  }
}

export async function add_consultation_service(data) {
  try {
    return await postRequest("/api/add_consultation", data);
  } catch (error) {
    console.error("Failed to create consultation:", error);
    throw error;
  }
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_LOCAL;
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

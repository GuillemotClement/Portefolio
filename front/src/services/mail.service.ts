interface Payload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (payload: Payload) => {
  try {
    const response = await fetch("http://localhost:8085", {
      method: "POST",
      body: new URLSearchParams(payload),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error("Serveur is down");
    }

    const data = await response.json();

    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

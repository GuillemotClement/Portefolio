import type { APIRoute } from "astro";

interface Payload {
  name: string;
  email: string;
  subject: string;
  content: string;
}

interface MailResponse {
  success: boolean;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload: Payload = await request.json();

    const mailerUrl = (process.env.MAILER_URL || "http://mailer:8085").replace(
      /\/+$/,
      "",
    );

    const response = await fetch(`${mailerUrl}/send-email`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: MailResponse = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          message: data.message || "Erreur lors de l'envoi",
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erreur de connexion au serveur",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

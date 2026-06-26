interface Payload {
  name: string;
  email: string;
  subject: string;
  content: string;
}

export interface MailResponse {
  success: boolean;
  message: string;
}

const mailerURL = import.meta.MAIL_URL || "http://localhost:8085/send-email";

export const sendEmail = async (payload: Payload): Promise<MailResponse> => {
  try {
    const response = await fetch(mailerURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: MailResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Erreur lors de l'envoi",
      };
    }
    return data;
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "Erreur de connexion au serveur",
    };
  }
};

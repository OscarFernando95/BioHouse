import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const datos = await request.formData();
  const nombre = datos.get("nombre")?.toString().trim();
  const correo = datos.get("correo")?.toString().trim();
  const telefono = datos.get("telefono")?.toString().trim();
  const mensaje = datos.get("mensaje")?.toString().trim();

  if (!nombre || !correo || !telefono || !mensaje) {
    return new Response(JSON.stringify({ error: "Faltan campos obligatorios." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const correoDestino = import.meta.env.CONTACTO_EMAIL_DESTINO;

  if (!apiKey || !correoDestino) {
    console.error("Faltan RESEND_API_KEY o CONTACTO_EMAIL_DESTINO en las variables de entorno.");
    return new Response(JSON.stringify({ error: "El servicio de correo no está configurado." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Bio House Constructora <onboarding@resend.dev>",
    to: correoDestino,
    replyTo: correo,
    subject: `Nuevo contacto desde la web: ${nombre}`,
    html: `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Teléfono / WhatsApp:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Error al enviar el correo con Resend:", error);
    return new Response(JSON.stringify({ error: "No se pudo enviar el correo." }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

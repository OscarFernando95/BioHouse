import type { APIRoute } from "astro";

const rutas = [
  "/",
  "/quienes-somos/",
  "/servicios/",
  "/arquitectura/",
  "/ingenieria/",
  "/energia-solar/",
  "/domotica/",
  "/blog/",
  "/blog/el-caos-vivendi/",
  "/contacto/",
  "/politica-de-privacidad/",
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://www.biohouseconstructora.com");
  const urls = rutas.map((ruta) => `  <url><loc>${new URL(ruta, base).toString()}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

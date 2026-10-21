import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const rutas = [
  "/",
  "/quienes-somos/",
  "/servicios/",
  "/arquitectura/",
  "/ingenieria/",
  "/energia-solar/",
  "/domotica/",
  "/blog/",
  "/contacto/",
  "/politica-de-privacidad/",
];

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://www.biohouseconstructora.com");
  const articulos = await getCollection("blog", ({ data }) => data.publicado);
  const rutasBlog = articulos.map((articulo) => `/blog/${articulo.id}/`);
  const urls = [...rutas, ...rutasBlog].map((ruta) => `  <url><loc>${new URL(ruta, base).toString()}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

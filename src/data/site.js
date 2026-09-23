export const sitio = {
  nombre: "Bio House Constructora",
  eslogan: "La forma inteligente de construir",
  descripcion:
    "Viviendas y soluciones constructivas con plástico recuperado que reducen la huella de carbono y generan impacto social.",
  telefono: "+57 314 623 1387",
  whatsapp: "573146231387",
  email: "contacto@biohouseconstructora.com",
  direccion: "Calle 20 A #3-62, Pitalito, Huila, Colombia",
  ciudad: "Pitalito, Huila",
};

export function enlaceWhatsapp(mensaje) {
  const texto = mensaje ?? "Hola Bio House, quiero recibir asesoría sobre mi proyecto.";
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const redesSociales = [
  { nombre: "Facebook", url: "https://web.facebook.com/Bioohouse" },
  { nombre: "Instagram", url: "https://www.instagram.com/biohouse.constructora/" },
  { nombre: "Twitter", url: "https://x.com/BioHouse1" },
  { nombre: "Youtube", url: "https://www.youtube.com/@BioHouseConstructora" },
  { nombre: "Linkedin", url: "https://www.linkedin.com/in/camilo-casaran-34784b33/" },
  { nombre: "Tiktok", url: "https://www.tiktok.com/@biohouse" },
];

export const navegacion = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/quienes-somos", etiqueta: "Quiénes Somos" },
  {
    href: "/servicios",
    etiqueta: "Servicios",
    hijos: [
      { href: "/arquitectura", etiqueta: "Arquitectura" },
      { href: "/ingenieria", etiqueta: "Ingeniería" },
      { href: "/energia-solar", etiqueta: "Energía Solar" },
      { href: "/domotica", etiqueta: "Domótica" },
    ],
  },
  { href: "/blog", etiqueta: "Blog" },
  { href: "/contacto", etiqueta: "Contacto" },
];

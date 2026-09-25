import type { ImageMetadata } from "astro";

const modulos = import.meta.glob<{ default: ImageMetadata }>("/src/assets/images/*", { eager: true });

const imagenes: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modulos).map(([ruta, modulo]) => [ruta.replace("/src/assets/images/", ""), modulo.default])
);

/** Resuelve una ruta tipo "/images/foto.jpg" a su ImageMetadata optimizable por astro:assets. */
export function obtenerImagen(ruta: string): ImageMetadata {
  const archivo = ruta.replace(/^\/images\//, "");
  const imagen = imagenes[archivo];
  if (!imagen) throw new Error(`Imagen no encontrada en src/assets/images: ${archivo}`);
  return imagen;
}

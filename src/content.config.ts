import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      publicado: z.boolean().default(false),
      fecha: z.coerce.date(),
      resumen: z.string(),
      imagen: image(),
      textoAlternativo: z.string(),
      tituloSeo: z.string().optional(),
    }),
});

export const collections = { blog };

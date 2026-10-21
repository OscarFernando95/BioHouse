import { collection, config, fields } from "@keystatic/core";

// En local se editan los archivos directamente; en producción se guarda por Keystatic Cloud.
const almacenamiento = import.meta.env.DEV
  ? ({ kind: "local" } as const)
  : ({ kind: "cloud" } as const);

export default config({
  storage: almacenamiento,
  cloud: { project: "bio-house/biohouse" },

  ui: {
    brand: { name: "Bio House · Blog" },
  },

  collections: {
    blog: collection({
      label: "Artículos del blog",
      slugField: "titulo",
      path: "src/content/blog/*",
      format: { contentField: "contenido" },
      entryLayout: "content",
      schema: {
        titulo: fields.slug({
          name: {
            label: "Título",
            description: "Título que verán los lectores en el blog.",
          },
          slug: {
            label: "Dirección web (URL)",
            description: "Se genera sola a partir del título. No la cambies después de publicar.",
          },
        }),
        publicado: fields.checkbox({
          label: "Publicado",
          description: "Desmárcalo para ocultar el artículo en la web (queda guardado como borrador).",
          defaultValue: false,
        }),
        fecha: fields.date({
          label: "Fecha de publicación",
          validation: { isRequired: true },
        }),
        resumen: fields.text({
          label: "Resumen",
          description: "Texto corto que aparece en la tarjeta del blog y en Google.",
          multiline: true,
          validation: { isRequired: true, length: { min: 50, max: 200 } },
        }),
        imagen: fields.image({
          label: "Imagen de portada",
          directory: "src/assets/blog",
          publicPath: "../../assets/blog/",
          validation: { isRequired: true },
        }),
        textoAlternativo: fields.text({
          label: "Descripción de la imagen",
          description: "Describe brevemente la imagen (accesibilidad y SEO).",
          validation: { isRequired: true },
        }),
        tituloSeo: fields.text({
          label: "Título para Google (opcional)",
          description: "Si lo dejas vacío se usa el título del artículo.",
        }),
        contenido: fields.markdoc({
          label: "Contenido",
          options: {
            image: {
              directory: "src/assets/blog/contenido",
              publicPath: "../../assets/blog/contenido/",
            },
          },
        }),
      },
    }),
  },
});

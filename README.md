# Bio House — Landing Page

Proyecto construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## 🚀 Estructura del proyecto

Dentro del proyecto encontrarás las siguientes carpetas y archivos:

```text
/
├── public/
├── src/
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro busca archivos `.astro` o `.md` dentro de `src/pages/`. Cada página se expone como una ruta según el nombre del archivo.

No hay nada especial en `src/components/`, pero ahí es donde se colocan los componentes de Astro (u otros frameworks, si se llegan a usar).

Los recursos estáticos, como imágenes, se colocan en la carpeta `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                              |
| :------------------------ | :--------------------------------------------------- |
| `npm install`              | Instala las dependencias                             |
| `npm run dev`               | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`             | Genera el sitio de producción en `./dist/`           |
| `npm run preview`           | Previsualiza el build localmente antes de publicar   |
| `npm run astro ...`         | Ejecuta comandos del CLI de Astro, como `astro add` o `astro check` |
| `npm run astro -- --help`   | Muestra la ayuda del CLI de Astro                     |

## 👀 ¿Quieres aprender más?

Consulta la [documentación oficial de Astro](https://docs.astro.build) o únete a su [servidor de Discord](https://astro.build/chat).

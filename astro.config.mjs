// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.biohouseconstructora.com',

  integrations: [react(), markdoc(), keystatic()],

  // El panel de Keystatic vive en /keystatic; /admin es el atajo fácil de recordar.
  redirects: {
    '/admin': '/keystatic',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});

import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config



export default defineConfig({
  redirects: {
    '/': "/coming-soon"
  },

  vite: {
    plugins: [tailwindcss()]
  }
});

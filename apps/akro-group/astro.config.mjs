// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `site` muss mit SITE_URL in src/config.ts übereinstimmen.
// https://astro.build/config
export default defineConfig({
  site: 'https://akro-group.de',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});

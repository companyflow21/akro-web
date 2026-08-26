// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `site` wird für Canonical-Tags und die Sitemap benötigt.
// Die kanonische Domain steht zusätzlich in src/config.ts (SITE_URL);
// beide Werte müssen übereinstimmen.
// [TODO: Entscheidung www gegen non-www — danach beide Stellen anpassen.]
// https://astro.build/config
export default defineConfig({
  site: 'https://www.akro-sicherheit.de',
  vite: {
    plugins: [tailwindcss()],
  },
});

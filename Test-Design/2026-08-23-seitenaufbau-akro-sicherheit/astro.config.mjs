// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Reine Design-Testumgebung. Keine `site`-URL, kein Bezug zum Haupt-Workspace.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});

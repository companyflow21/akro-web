/**
 * Sitemap ohne zusätzliche Abhängigkeit. Leer, solange INDEXIERBAR false ist.
 */
import type { APIRoute } from 'astro';
import { INDEXIERBAR, SITE_URL } from '../config';

const seiten = INDEXIERBAR ? ['/', '/impressum/', '/datenschutz/'] : [];

export const GET: APIRoute = () => {
  const eintraege = seiten
    .map((pfad) => `  <url><loc>${new URL(pfad, SITE_URL).href}</loc></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${eintraege}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};

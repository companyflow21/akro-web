/**
 * Sitemap ohne zusätzliche Abhängigkeit. Enthält nur indexierbare Seiten;
 * /404 fehlt bewusst. Solange INDEXIERBAR false ist, bleibt sie leer.
 */
import type { APIRoute } from 'astro';
import { INDEXIERBAR, SITE_URL } from '../config';

const seiten = INDEXIERBAR ? ['/', '/impressum/', '/datenschutz/'] : [];

export const GET: APIRoute = () => {
  const eintraege = seiten
    .map((pfad) => `  <url><loc>${new URL(pfad, SITE_URL).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${eintraege}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

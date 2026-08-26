/**
 * Sitemap ohne zusätzliche Abhängigkeit.
 *
 * Enthält ausschließlich indexierbare Seiten. Bewusst NICHT enthalten:
 * /404 (noindex) und alle Routen unter /design-preview (Designexperiment).
 */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';
import { leistungen } from '../data/leistungen';

const seiten = [
  '/',
  '/leistungen',
  ...leistungen.map((l) => `/leistungen/${l.slug}`),
  '/unternehmen',
  '/referenzen',
  '/karriere',
  '/kontakt',
  '/anfrage',
  '/impressum',
  '/datenschutz',
];

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

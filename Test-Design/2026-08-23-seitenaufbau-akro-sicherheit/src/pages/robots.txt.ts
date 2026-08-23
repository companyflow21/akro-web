/**
 * robots.txt ohne zusätzliche Abhängigkeit.
 *
 * Das Designexperiment unter /design-preview wird ausgeschlossen — es ist
 * keine Produktionsseite.
 */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';

export const GET: APIRoute = () => {
  const txt = `User-agent: *
Allow: /
Disallow: /design-preview/

Sitemap: ${new URL('/sitemap.xml', SITE_URL).href}
`;

  return new Response(txt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

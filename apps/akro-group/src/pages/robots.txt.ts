/**
 * robots.txt ohne zusätzliche Abhängigkeit. Crawling bleibt erlaubt, damit
 * Suchmaschinen das noindex der Seiten lesen können; ob indexiert wird,
 * steuert allein INDEXIERBAR in config.ts.
 */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';

export const GET: APIRoute = () => {
  const txt = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', SITE_URL).href}
`;

  return new Response(txt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

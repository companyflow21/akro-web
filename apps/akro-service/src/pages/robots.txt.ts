/**
 * robots.txt ohne zusätzliche Abhängigkeit. Ob indexiert wird, steuert
 * allein INDEXIERBAR in config.ts.
 */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', SITE_URL).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

/**
 * Zentrale Konfiguration für akro-sicherheit.de.
 *
 * Alle Stammdaten stehen hier einmal. Sie stammen aus CLAUDE.md §3 und sind
 * bestätigt. Unbestätigte Angaben stehen NICHT hier, sondern werden auf der
 * jeweiligen Seite als [TODO] sichtbar gemacht.
 */

/**
 * Kanonische Domain. Bestimmt Canonical-Tags, Sitemap und robots.txt.
 *
 * [TODO: Entscheidung www gegen non-www. Solange sie offen ist, gilt die
 *  www-Variante, weil der Prototyp des Altbestands sie als Canonical führte.
 *  Die Umstellung ist ein Einzeiler — danach müssen Weiterleitungen und
 *  Search Console angepasst werden.]
 */
export const SITE_URL = 'https://www.akro-sicherheit.de';

export const marke = {
  name: 'AKRO Sicherheit',
  traeger: 'AKRO GmbH',
  geschaeftsfuehrer: 'Wagdee Al Muliki',
  strasse: 'Saarwellinger Straße 25',
  plz: '66740',
  ort: 'Saarlouis',
  land: 'DE',
  niederlassung: 'Bonn',
  telefon: '0228 18456685',
  telefonHref: 'tel:+4922818456685',
  email: 'info@akro-sicherheit.de',
} as const;

/** Hauptnavigation nach docs/SITE-ARCHITECTURE.md §5.
 *  Die Startseite wird über das Logo erreicht und hat bewusst keinen
 *  eigenen Navigationspunkt. */
export const hauptnavigation = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Unternehmen', href: '/unternehmen' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

/** Rechtstexte erscheinen ausschließlich im Footer, auf jeder Seite. */
export const rechtsnavigation = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
] as const;

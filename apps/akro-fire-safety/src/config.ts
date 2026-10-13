/**
 * Zentrale Konfiguration für akro-fire-safety.de.
 *
 * Stammdaten aus CLAUDE.md §3. Leistungstexte aus der
 * Unternehmenspräsentation (praesentation/unternehmenspraesentation.html,
 * Folie 08) — vor Freigabe der Indexierung vom Auftraggeber prüfen lassen.
 */
import zertifikateDaten from '@akro/assets/shared/certifications/zertifikate.json';
import type { SymbolName } from '@akro/design-system/komponenten/Icon.astro';

/** Kanonische Domain. Die Domain ist derzeit nicht registriert (Stand 13.10.2026). */
export const SITE_URL = 'https://akro-fire-safety.de';

/**
 * Indexierung erst nach Prüfung der Texte und Registrierung der Domain
 * freigeben. false setzt noindex auf jeder Seite und leert die Sitemap.
 */
export const INDEXIERBAR = false;

export const firma = {
  name: 'AKRO GmbH',
  marke: 'AKRO Fire & Safety',
  strasse: 'Saarwellinger Straße 25',
  plz: '66740',
  ort: 'Saarlouis',
  land: 'DE',
  niederlassung: 'Bonn',
  telefon: '0228 18456685',
  telefonHref: 'tel:+4922818456685',
  telefonSchema: '+4922818456685',
  /** Bestätigte Adresse; eine eigene Adresse der Marke existiert noch nicht. */
  email: 'info@akro-group.de',
} as const;

export interface Leistungsfeld {
  titel: string;
  untertitel: string;
  icon: SymbolName;
  punkte: string[];
}

export const leistungsfelder: Leistungsfeld[] = [
  {
    titel: 'Sicherungsposten und Brandwachen',
    untertitel: 'Absicherung',
    icon: 'flamme',
    punkte: [
      'Brandsicherheitswache bei Heißarbeiten',
      'Nachkontrolle nach Arbeitsende',
      'Sicherungsposten bei Arbeiten in Behältern und engen Räumen',
      'Brandwache bei Veranstaltungen',
    ],
  },
  {
    titel: 'Gas- und Atmosphärenüberwachung',
    untertitel: 'Messtechnik',
    icon: 'messung',
    punkte: [
      'Freimessung vor Arbeitsbeginn',
      'Kontinuierliche Überwachung während der Arbeiten',
      'Dokumentation der Messwerte',
      'Abbruchkriterien nach Vorgabe des Betreibers',
    ],
  },
  {
    titel: 'Höhensicherung und HSE-Leistungen',
    untertitel: 'Höhe und HSE',
    icon: 'gurt',
    punkte: [
      'Sicherung von Arbeiten in der Höhe, PSAgA',
      'Unterstützung bei HSE- und SGU-Anforderungen',
      'Mitwirkung an Gefährdungsbeurteilungen des Auftraggebers',
    ],
  },
];

export const einsatzumfeld = ['Anlagenbau', 'Instandhaltung', 'Revisionen und Stillstände', 'Veranstaltungen'];

/** Für Fire & Safety relevante Zertifizierungen aus der gemeinsamen Quelle. */
export const zertifikate = (zertifikateDaten as ReadonlyArray<{
  norm: string;
  nummer: string;
  bereich: string;
  text: string;
  symbol: SymbolName;
}>).filter((z) => ['SCC**', '45001', '9001', '14001'].includes(z.nummer));

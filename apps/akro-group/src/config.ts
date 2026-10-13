/**
 * Zentrale Konfiguration für akro-group.de.
 *
 * Stammdaten aus CLAUDE.md §3. Registerangaben, USt-IdNr. und Versicherer
 * stammen aus dem vom Auftraggeber bestätigten Impressum des Platzhalters
 * (platzhalter/LIESMICH.md, Stand 05.09.2026).
 */

import zertifikateDaten from '@akro/assets/shared/certifications/zertifikate.json';
import type { SymbolName } from './components/Icon.astro';

/** Kanonische Domain: ohne www, wie der bisherige Platzhalter. */
export const SITE_URL = 'https://akro-group.de';

/**
 * Schalter für die Suchmaschinen-Indexierung der ganzen Website.
 * false setzt auf jeder Seite noindex, nofollow und leert die Sitemap.
 * Am 13.10.2026 vom Auftraggeber freigegeben.
 */
export const INDEXIERBAR = true;

export const firma = {
  name: 'AKRO GmbH',
  geschaeftsfuehrer: 'Wagdee Al Muliki',
  strasse: 'Saarwellinger Straße 25',
  plz: '66740',
  ort: 'Saarlouis',
  land: 'DE',
  niederlassung: 'Bonn',
  telefon: '0228 18456685',
  telefonHref: 'tel:+4922818456685',
  telefonSchema: '+4922818456685',
  /** Empfang am 13.10.2026 vom Auftraggeber bestätigt */
  email: 'info@akro-group.de',
} as const;

export interface Sparte {
  name: string;
  domain: string;
  text: string;
  icon: 'schild' | 'flamme' | 'paket';
  /** Klasse für die Farbwelt der Kachel */
  welt: 's' | 'f' | 'v';
  /** true, sobald die Website der Sparte online ist — erst dann wird verlinkt */
  online: boolean;
}

export const sparten: Sparte[] = [
  {
    name: 'AKRO Sicherheit',
    domain: 'akro-sicherheit.de',
    text: 'Objekt-, Werk- und Veranstaltungsschutz für Gebäude, Anlagen und Veranstaltungen.',
    icon: 'schild',
    welt: 's',
    online: false,
  },
  {
    name: 'AKRO Fire & Safety',
    domain: 'akro-fire-safety.de',
    text: 'Sicherungsposten, Brandwachen und Gasmessung im industriellen Umfeld.',
    icon: 'flamme',
    welt: 'f',
    online: false,
  },
  {
    name: 'AKRO Service',
    domain: 'akro-service.de',
    text: 'Reinigung, Logistik und Transport für Ihren Betrieb.',
    icon: 'paket',
    welt: 'v',
    online: false,
  },
];

/**
 * Zertifizierungen aus der gemeinsamen Quelle in @akro/assets
 * (docs/DECISIONS.md Punkt 31).
 */
export const zertifikate = zertifikateDaten as ReadonlyArray<{
  norm: string;
  nummer: string;
  bereich: string;
  text: string;
  symbol: SymbolName;
}>;

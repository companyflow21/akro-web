/**
 * Zentrale Konfiguration für akro-group.de.
 *
 * Stammdaten aus CLAUDE.md §3. Registerangaben, USt-IdNr. und Versicherer
 * stammen aus dem vom Auftraggeber bestätigten Impressum des Platzhalters
 * (platzhalter/LIESMICH.md, Stand 05.09.2026).
 */

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
 * Zertifizierungen — am 13.10.2026 vom Auftraggeber als gültig und mit den
 * Originalen abgeglichen bestätigt, Bezeichnung von 45001 am selben Tag
 * auf DIN EN ISO korrigiert.
 */
export const zertifikate = [
  { norm: 'DIN', nummer: '77200-1', bereich: 'Sicherheitsdienstleistungen', text: 'Geprüfte Einsatz- und Objektorganisation.', symbol: 'schildGross' },
  { norm: 'Standard', nummer: 'SCC**', bereich: 'Sicherheit im Industrieeinsatz', text: 'Systematische Sicherheitsprozesse für anspruchsvolle Einsätze.', symbol: 'helm' },
  { norm: 'DIN EN ISO', nummer: '9001', bereich: 'Qualitätsmanagement', text: 'Klare Abläufe und nachvollziehbare Dokumentation.', symbol: 'dokument' },
  { norm: 'DIN EN ISO', nummer: '45001', bereich: 'Arbeitsschutzmanagement', text: 'Arbeitsrisiken systematisch erkennen und reduzieren.', symbol: 'person' },
  { norm: 'DIN EN ISO', nummer: '14001', bereich: 'Umweltmanagement', text: 'Umweltaspekte in der Leistungserbringung berücksichtigen.', symbol: 'blatt' },
] as const;

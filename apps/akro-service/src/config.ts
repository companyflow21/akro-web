/**
 * Zentrale Konfiguration für akro-service.de.
 *
 * Stammdaten aus CLAUDE.md §3. Leistungstexte aus der
 * Unternehmenspräsentation (praesentation/unternehmenspraesentation.html,
 * Folie 09), sprachlich ohne Personalgestellung (CLAUDE.md §13) — vor
 * Freigabe der Indexierung vom Auftraggeber prüfen lassen.
 */
import zertifikateDaten from '@akro/assets/shared/certifications/zertifikate.json';
import type { SymbolName } from '@akro/design-system/komponenten/Icon.astro';

export const SITE_URL = 'https://akro-service.de';

/** Indexierung erst nach Prüfung der Texte freigeben. */
export const INDEXIERBAR = false;

export const firma = {
  name: 'AKRO GmbH',
  marke: 'AKRO Service',
  strasse: 'Saarwellinger Straße 25',
  plz: '66740',
  ort: 'Saarlouis',
  land: 'DE',
  niederlassung: 'Bonn',
  telefon: '0228 18456685',
  telefonHref: 'tel:+4922818456685',
  telefonSchema: '+4922818456685',
  /** Bestätigte Adresse; ob info@akro-service.de existiert, ist offen. */
  email: 'info@akro-group.de',
} as const;

export interface Bereich {
  titel: string;
  kurz: string;
  icon: SymbolName;
  punkte: string[];
}

export const bereiche: Bereich[] = [
  {
    titel: 'Reinigung',
    kurz: 'Unterhalts- und Sonderreinigung',
    icon: 'funkeln',
    punkte: [
      'Laufende Unterhaltsreinigung nach Leistungsverzeichnis',
      'Grund- und Sonderreinigung',
      'Reinigung nach Veranstaltungen und Baumaßnahmen',
    ],
  },
  {
    titel: 'Logistik und Transport',
    kurz: 'Lager, Warenfluss und Fahrten',
    icon: 'lkw',
    punkte: [
      'Innerbetriebliche Logistik',
      'Warenannahme und Verräumung',
      'Transportleistungen nach Vereinbarung',
    ],
  },
  {
    titel: 'Empfang und Veranstaltungsservice',
    kurz: 'Empfang, Garderobe, Akkreditierung',
    icon: 'empfang',
    punkte: [
      'Empfang und Gästebetreuung',
      'Garderobe und Akkreditierung',
      'Service bei Veranstaltungen und Messen',
    ],
  },
];

/** Für Service relevante Zertifizierungen aus der gemeinsamen Quelle. */
export const zertifikate = (zertifikateDaten as ReadonlyArray<{ norm: string; nummer: string; bereich: string }>).filter((z) =>
  ['9001', '14001', '45001'].includes(z.nummer),
);

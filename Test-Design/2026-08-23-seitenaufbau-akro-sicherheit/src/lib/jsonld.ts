/**
 * Strukturierte Daten.
 *
 * Grundsatz aus CLAUDE.md §10: Markup muss zum sichtbaren Seiteninhalt
 * passen. Deshalb hier bewusst schlank — keine Bewertungen, keine
 * Öffnungszeiten, keine Kennzahlen, solange sie nicht belegt und sichtbar
 * sind.
 *
 * Kein JobPosting, solange keine echte Stelle ausgeschrieben ist.
 */
import { SITE_URL, marke } from '../config';

const orgId = `${SITE_URL}/#organisation`;

/**
 * SecurityService ist der passende LocalBusiness-Untertyp für einen
 * Sicherheitsdienst.
 */
export function organisation() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    '@id': orgId,
    name: marke.name,
    legalName: marke.traeger,
    url: SITE_URL,
    telephone: marke.telefon,
    email: marke.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: marke.strasse,
      postalCode: marke.plz,
      addressLocality: marke.ort,
      addressCountry: marke.land,
    },
    areaServed: [marke.ort, marke.niederlassung],
    // [TODO: logo, image, sameAs und geo ergänzen, sobald Assets und
    //  Profile bestätigt sind.]
  };
}

export function dienstleistung(titel: string, beschreibung: string, pfad: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: titel,
    description: beschreibung,
    url: new URL(pfad, SITE_URL).href,
    serviceType: titel,
    provider: { '@id': orgId },
    areaServed: [marke.ort, marke.niederlassung],
  };
}

export function brotkrumen(eintraege: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: eintraege.map((eintrag, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: eintrag.label,
      item: new URL(eintrag.href, SITE_URL).href,
    })),
  };
}

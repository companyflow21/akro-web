// Gemeinsame Inhaltsbasis für BEIDE Design-Vorschauvarianten.
// Damit ist der visuelle Vergleich fair: gleicher Text, gleiche Reihenfolge.
//
// WICHTIG: Prototyptexte. Keine Kundennamen, keine Zertifikate, keine
// Marketingzahlen. Fehlende Belege sind als [Platzhalter] gekennzeichnet.

export const marke = {
  name: 'AKRO Sicherheit',
  traeger: 'AKRO GmbH',
  sitz: 'Saarwellinger Straße 25, 66740 Saarlouis',
  niederlassung: 'Bonn',
  telefon: '0228 18456685',
  telefonHref: 'tel:+4922818456685',
};

export const hero = {
  eyebrow: 'AKRO GmbH · Sicherheitsdienstleistungen',
  titel: 'Sicherheit, die sich planen lässt.',
  text:
    'Wir übernehmen Bewachung und Kontrolle für Industrie, Gewerbe und ' +
    'öffentliche Auftraggeber — mit eigener Einsatzplanung, dokumentierten ' +
    'Abläufen und festen Ansprechpartnern.',
  ctaPrimaer: 'Einsatz anfragen',
  ctaSekundaer: 'Telefonisch besprechen',
};

// Die sieben bestätigten V1-Leistungen (docs/SITE-ARCHITECTURE.md §2).
// Bewusst keine Reihenfolge-Nummerierung: die Leistungen sind keine Sequenz.
export const leistungen = [
  {
    kuerzel: 'OW',
    titel: 'Objekt- und Werkschutz',
    text: 'Dauerhafte Bewachung von Gebäuden, Werksgeländen und Anlagen.',
  },
  {
    kuerzel: 'RK',
    titel: 'Revier- und Kontrolldienst',
    text: 'Kontrollgänge in festen oder wechselnden Intervallen statt Dauerposten.',
  },
  {
    kuerzel: 'VS',
    titel: 'Veranstaltungssicherheit',
    text: 'Absicherung von Veranstaltungen, Messen und Firmenanlässen.',
  },
  {
    kuerzel: 'BB',
    titel: 'Baustellenbewachung',
    text: 'Schutz von Baustellen, Material und Maschinen außerhalb der Arbeitszeit.',
  },
  {
    kuerzel: 'EP',
    titel: 'Empfangs- und Pfortendienst',
    text: 'Besetzung von Empfang und Pforte, Zutrittskontrolle und Besucherannahme.',
  },
  {
    kuerzel: 'PS',
    titel: 'Personenschutz',
    text: 'Begleitung und Schutz gefährdeter Personen nach individueller Lagebeurteilung.',
  },
  {
    kuerzel: 'KR',
    titel: 'KRITIS-Schutz',
    text: 'Bewachung von Anlagen mit erhöhten Anforderungen an Zutritt und Dokumentation.',
  },
];

// Kompetenzleiste — bewusst OHNE Zertifikatsclaims und ohne Kennzahlen.
export const kompetenzen = [
  { label: 'Einsatzplanung', text: 'in eigener Verantwortung' },
  { label: 'Qualifikation', text: 'Nachweise je Einsatz geprüft' },
  { label: 'Dokumentation', text: 'nachvollziehbare Kontrollprotokolle' },
  { label: 'Ansprechpartner', text: 'fest zugeordnet' },
];

export const kompetenzHinweis =
  '[Platzhalter] Zertifikate, Normen und Kennzahlen erscheinen erst, wenn die ' +
  'Originalnachweise geprüft und zur Veröffentlichung freigegeben sind.';

// Echte Sequenz — hier ist eine Nummerierung inhaltlich begründet.
export const ablauf = [
  {
    nr: '01',
    titel: 'Anfrage',
    text: 'Sie schildern Objekt, Zeitraum und Anforderungen.',
  },
  {
    nr: '02',
    titel: 'Abstimmung',
    text: 'Wir stimmen Leistungsverzeichnis, Besetzung und Ablauf mit Ihnen ab.',
  },
  {
    nr: '03',
    titel: 'Einsatz',
    text: 'Wir planen die Besetzung, führen den Einsatz durch und dokumentieren ihn.',
  },
];

export const unternehmen = {
  eyebrow: 'Auftragsverhältnis',
  titel: 'Wir erbringen die Leistung, nicht nur die Besetzung.',
  text:
    'Die AKRO GmbH erbringt Sicherheitsdienstleistungen als eigenverantwortlich ' +
    'organisierte Leistung. Auswahl und Anzahl der eingesetzten Kräfte, ' +
    'Einsatzplanung, Arbeitszeiten, Vertretung und Führung liegen bei uns. ' +
    'Sie beauftragen ein Ergebnis nach Leistungsverzeichnis.',
  hinweis:
    '[Platzhalter] Angaben zu Erfahrung, Einsatzumfang und Referenzen folgen ' +
    'nach Bestätigung durch die Geschäftsführung.',
};

export const cta = {
  eyebrow: 'Anfrage',
  titel: 'Objekt, Zeitraum, Anforderungen — den Rest planen wir.',
  text: 'Wir melden uns mit einem konkreten Vorschlag zu Besetzung und Ablauf zurück.',
  button: 'Einsatz anfragen',
};

export const footerSpalten = [
  {
    titel: 'Leistungen',
    eintraege: leistungen.map((l) => l.titel),
  },
  {
    titel: 'Unternehmen',
    eintraege: ['Unternehmen', 'Referenzen', 'Karriere'],
  },
  {
    titel: 'Kontakt',
    eintraege: ['Kontakt', 'Anfrage'],
  },
  {
    titel: 'Rechtliches',
    eintraege: ['Impressum', 'Datenschutz', 'AGB (PDF)'],
  },
];

export const navigation = [
  'Leistungen',
  'Unternehmen',
  'Referenzen',
  'Karriere',
  'Kontakt',
];

export const prototypHinweis =
  'Designexperiment — keine Produktionsseite. Prototyptexte, keine ' +
  'freigegebenen Referenzen, Zertifikate oder Kennzahlen.';

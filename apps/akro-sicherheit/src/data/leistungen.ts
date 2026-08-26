/**
 * Die sieben bestätigten V1-Leistungen von AKRO Sicherheit.
 *
 * Einzige Datenquelle für Leistungsübersicht, Einzelseiten, Navigation,
 * Footer und die verwandten Leistungen. Eine neue Leistung wird hier
 * ergänzt — nirgends sonst.
 *
 * Sprachregel: AKRO erbringt die Leistung eigenverantwortlich. Keine
 * Formulierungen, die Personalgestellung oder Weisungsrechte des
 * Auftraggebers nahelegen (CLAUDE.md §13).
 *
 * Die Abschnittstexte sind fachliche Leistungsbeschreibungen. Sie enthalten
 * bewusst KEINE Kennzahlen, Reaktionszeiten, Zertifikate oder Referenzen —
 * solche Angaben sind unbestätigt und werden erst nach Freigabe ergänzt.
 */

export interface Leistung {
  /** URL-Segment unter /leistungen/ */
  slug: string;
  /** Kurzkennung für die technische Darstellung, keine Rangfolge */
  kuerzel: string;
  /** Name der Leistung, zugleich H1 der Einzelseite */
  titel: string;
  /** Seitentitel im Browser und in der Suche */
  seitentitel: string;
  /** Meta-Description */
  beschreibung: string;
  /** Ein Satz für Übersicht und Register */
  kurz: string;
  /** Was konkret erbracht wird */
  umfang: string[];
  /** Typische Objekte und Situationen */
  einsatzbereiche: string[];
  /** Was nicht Teil der Leistung ist */
  abgrenzung: string;
  /** Slugs fachlich verwandter Leistungen */
  verwandt: string[];
}

export const leistungen: Leistung[] = [
  {
    slug: 'objekt-und-werkschutz',
    kuerzel: 'OW',
    titel: 'Objekt- und Werkschutz',
    seitentitel: 'Objekt- und Werkschutz | AKRO Sicherheit',
    beschreibung:
      'Dauerhafte Bewachung von Gebäuden, Werksgeländen und Anlagen. ' +
      'AKRO organisiert Einsatzplanung, Besetzung und Dokumentation in ' +
      'eigener Verantwortung.',
    kurz: 'Dauerhafte Bewachung von Gebäuden, Werksgeländen und Anlagen.',
    umfang: [
      'Bewachung des Objekts nach abgestimmtem Leistungsverzeichnis',
      'Zutritts- und Zufahrtskontrolle',
      'Kontrollgänge innerhalb und außerhalb der Betriebszeiten',
      'Schließ- und Öffnungsdienste',
      'Meldung und Dokumentation besonderer Vorkommnisse',
      'Alarmverfolgung nach vereinbartem Ablauf',
    ],
    einsatzbereiche: [
      'Produktions- und Werksgelände',
      'Lager- und Logistikstandorte',
      'Verwaltungsgebäude',
      'Gewerbeobjekte und Handelsflächen',
    ],
    abgrenzung:
      'Brandwachen, Sicherungsposten und Gasmessung gehören zum Bereich ' +
      'AKRO Fire & Safety und werden dort erbracht.',
    verwandt: [
      'revier-und-kontrolldienst',
      'empfangs-und-pfortendienst',
      'kritis-schutz',
    ],
  },
  {
    slug: 'revier-und-kontrolldienst',
    kuerzel: 'RK',
    titel: 'Revier- und Kontrolldienst',
    seitentitel: 'Revier- und Kontrolldienst | AKRO Sicherheit',
    beschreibung:
      'Kontrollgänge in festen oder wechselnden Intervallen statt ' +
      'Dauerposten. Geeignet für Objekte ohne durchgehenden Bewachungsbedarf.',
    kurz: 'Kontrollgänge in festen oder wechselnden Intervallen statt Dauerposten.',
    umfang: [
      'Kontrollfahrten zu vereinbarten Zeiten',
      'Prüfung von Türen, Toren, Fenstern und Absperrungen',
      'Kontrolle von Beleuchtung und sicherheitsrelevanter Technik',
      'Dokumentation jedes Kontrollgangs',
      'Sofortmeldung bei Auffälligkeiten',
    ],
    einsatzbereiche: [
      'Gewerbeparks und Einzelobjekte',
      'Leerstehende Gebäude',
      'Außenlager und Stellflächen',
      'Kommunale Liegenschaften',
    ],
    abgrenzung:
      'Bei durchgehendem Bewachungsbedarf ist der Objekt- und Werkschutz ' +
      'die passende Leistung.',
    verwandt: ['objekt-und-werkschutz', 'baustellenbewachung'],
  },
  {
    slug: 'veranstaltungssicherheit',
    kuerzel: 'VS',
    titel: 'Veranstaltungssicherheit',
    seitentitel: 'Veranstaltungssicherheit | AKRO Sicherheit',
    beschreibung:
      'Absicherung von Veranstaltungen, Messen und Firmenanlässen — von ' +
      'der Einlasskontrolle bis zur Nachbereitung.',
    kurz: 'Absicherung von Veranstaltungen, Messen und Firmenanlässen.',
    umfang: [
      'Einlass- und Ausweiskontrolle',
      'Besucherlenkung und Absperrung',
      'Bewachung von Aufbau, Veranstaltung und Abbau',
      'Kontrolle von Flucht- und Rettungswegen',
      'Zusammenarbeit mit Veranstalter und Behörden',
      'Dokumentation von Vorkommnissen',
    ],
    einsatzbereiche: [
      'Messen und Ausstellungen',
      'Firmenveranstaltungen und Tagungen',
      'Kulturelle Veranstaltungen',
      'Betriebsfeiern und Jubiläen',
    ],
    abgrenzung:
      'Brandsicherheitswachen bei Veranstaltungen werden über AKRO Fire & ' +
      'Safety erbracht.',
    verwandt: ['personenschutz', 'empfangs-und-pfortendienst'],
  },
  {
    slug: 'baustellenbewachung',
    kuerzel: 'BB',
    titel: 'Baustellenbewachung',
    seitentitel: 'Baustellenbewachung | AKRO Sicherheit',
    beschreibung:
      'Schutz von Baustellen, Material und Maschinen außerhalb der ' +
      'Arbeitszeit — mit dokumentierten Kontrollen und klarer Meldekette.',
    kurz: 'Schutz von Baustellen, Material und Maschinen außerhalb der Arbeitszeit.',
    umfang: [
      'Bewachung außerhalb der Arbeitszeiten und an Wochenenden',
      'Kontrolle von Baustellenzufahrten und Absperrungen',
      'Sicherung von Material, Maschinen und Containern',
      'Kontrolle der Baustellenbeleuchtung',
      'Dokumentation und Meldung von Vorkommnissen',
    ],
    einsatzbereiche: [
      'Hoch- und Tiefbaustellen',
      'Sanierungs- und Umbauprojekte',
      'Infrastrukturbaustellen',
      'Materiallager auf Baustellen',
    ],
    abgrenzung:
      'Die Verkehrssicherungspflicht des Bauherrn bleibt unberührt; AKRO ' +
      'übernimmt die vereinbarte Bewachungsleistung.',
    verwandt: ['revier-und-kontrolldienst', 'objekt-und-werkschutz'],
  },
  {
    slug: 'empfangs-und-pfortendienst',
    kuerzel: 'EP',
    titel: 'Empfangs- und Pfortendienst',
    seitentitel: 'Empfangs- und Pfortendienst | AKRO Sicherheit',
    beschreibung:
      'Besetzung von Empfang und Pforte: Zutrittskontrolle, ' +
      'Besucherannahme und Schlüsselverwaltung nach abgestimmtem Ablauf.',
    kurz: 'Besetzung von Empfang und Pforte, Zutrittskontrolle und Besucherannahme.',
    umfang: [
      'Besetzung von Empfang und Pforte zu vereinbarten Zeiten',
      'Besucheranmeldung und Ausweisausgabe',
      'Zutrittskontrolle für Beschäftigte, Besucher und Fremdfirmen',
      'Schlüssel- und Ausweisverwaltung',
      'Annahme von Sendungen nach Absprache',
      'Telefonvermittlung nach Absprache',
    ],
    einsatzbereiche: [
      'Verwaltungs- und Bürogebäude',
      'Werkspforten',
      'Kliniken und öffentliche Einrichtungen',
      'Forschungs- und Entwicklungsstandorte',
    ],
    abgrenzung:
      'Die Leistung wird nach Leistungsverzeichnis erbracht; die fachliche ' +
      'Führung des eingesetzten Personals liegt bei AKRO.',
    verwandt: ['objekt-und-werkschutz', 'veranstaltungssicherheit'],
  },
  {
    slug: 'personenschutz',
    kuerzel: 'PS',
    titel: 'Personenschutz',
    seitentitel: 'Personenschutz | AKRO Sicherheit',
    beschreibung:
      'Schutz gefährdeter Personen nach individueller Lagebeurteilung — ' +
      'zurückhaltend, abgestimmt und dokumentiert.',
    kurz: 'Schutz gefährdeter Personen nach individueller Lagebeurteilung.',
    umfang: [
      'Lagebeurteilung und Abstimmung des Schutzkonzepts',
      'Begleitung bei Terminen und Reisen',
      'Absicherung von Wohn- und Arbeitsumfeld nach Vereinbarung',
      'Abstimmung mit Behörden, sofern erforderlich',
      'Vertrauliche Dokumentation',
    ],
    einsatzbereiche: [
      'Unternehmensleitung und Führungskräfte',
      'Gefährdete Beschäftigte',
      'Begleitung bei Veranstaltungen',
      'Privatpersonen nach Einzelfallprüfung',
    ],
    abgrenzung:
      'Personenschutz wird ausschließlich nach vorheriger Lagebeurteilung ' +
      'und schriftlicher Vereinbarung erbracht.',
    verwandt: ['veranstaltungssicherheit', 'objekt-und-werkschutz'],
  },
  {
    slug: 'kritis-schutz',
    kuerzel: 'KR',
    titel: 'Schutz kritischer Infrastrukturen',
    seitentitel: 'KRITIS-Schutz | AKRO Sicherheit',
    beschreibung:
      'Bewachung von Anlagen mit erhöhten Anforderungen an Zutritt, ' +
      'Nachweisführung und Dokumentation.',
    kurz: 'Bewachung von Anlagen mit erhöhten Anforderungen an Zutritt und Dokumentation.',
    umfang: [
      'Bewachung nach erhöhten Zutrittsanforderungen',
      'Kontrolle und Protokollierung jedes Zutritts',
      'Begleitung von Fremdfirmen auf dem Gelände',
      'Lückenlose Dokumentation der Kontrollgänge',
      'Abgestimmte Melde- und Eskalationskette',
    ],
    einsatzbereiche: [
      'Energie- und Versorgungsanlagen',
      'Wasser- und Abwasseranlagen',
      'Telekommunikations- und Rechenzentrumsstandorte',
      'Anlagen mit besonderen Zutrittsauflagen',
    ],
    abgrenzung:
      'Welche regulatorischen Anforderungen im Einzelfall gelten, wird vor ' +
      'Vertragsschluss gemeinsam mit dem Betreiber geklärt.',
    verwandt: ['objekt-und-werkschutz', 'revier-und-kontrolldienst'],
  },
];

/** Hilfsfunktion für die verwandten Leistungen auf den Einzelseiten. */
export function verwandteLeistungen(slug: string): Leistung[] {
  const aktuelle = leistungen.find((l) => l.slug === slug);
  if (!aktuelle) return [];
  return aktuelle.verwandt
    .map((s) => leistungen.find((l) => l.slug === s))
    .filter((l): l is Leistung => Boolean(l));
}

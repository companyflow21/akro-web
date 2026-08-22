# SEO-Strategie – vorläufiges Planungsgerüst

> Dies ist ein vorläufiges Gerüst, keine ausgearbeitete Strategie. Es enthält
> nur Punkte, die bereits durch `CLAUDE.md` bestätigt sind. Alles andere ist
> als „noch zu klären" markiert. Keine Keywords, Suchvolumen, Rankings,
> Wettbewerber, Standorte, Referenzen, Zertifikate, Leistungsversprechen oder
> Unternehmenszahlen wurden erfunden.

## Ziele

- Nutzerorientierte, fachlich belastbare Inhalte haben Vorrang vor
  Seitenmenge (bestätigt, `CLAUDE.md` §9).
- Noch zu klären: konkrete Geschäftsziele, KPIs und Zeithorizont der
  SEO-Strategie.

## Marken und Domains

| Marke | Domain | Schwerpunkt | Grundfarbe |
|---|---|---|---|
| AKRO Sicherheit | akro-sicherheit.de | Objekt-, Werk-, Veranstaltungs- und Personenschutz | Blau/Cyan |
| AKRO Fire & Safety | akro-fire-safety.de | Sicherungsposten, Brandwachen, Gasmessung, PSAgA und industrielle HSE-Leistungen | Rot/Orange |
| AKRO Service | akro-service.de | Reinigung, Logistik, Transport und weitere Dienstleistungen | Grün |
| AKRO Group | akro-group.de | Schlanke Dachmarken- und Portalseite | AKRO-Blau |

Jede Domain erhält eigenständige Inhalte, Canonicals, Sitemap und
strukturierte Daten (bestätigt, `CLAUDE.md` §9).

## Zielgruppen

- Noch zu klären: konkrete Zielgruppen je Marke (z. B. Auftraggeber vs.
  Bewerber, Branche, Region).

## Leistungsseiten

- Noch zu klären: welche einzelnen Leistungsseiten je Marke entstehen.
  `CLAUDE.md` nennt „Leistungen" als eine der strukturierten Inhaltsarten,
  ohne konkrete Einzelseiten festzulegen (`CLAUDE.md` §8).

## Branchen

- Noch zu klären: welche Branchenseiten entstehen. „Branchen" ist als
  strukturierte Inhaltsart genannt (`CLAUDE.md` §8), Inhalte selbst noch
  offen.

## Standorte

- Noch zu klären: welche Standortseiten entstehen. „Standorte" ist als
  strukturierte Inhaltsart genannt (`CLAUDE.md` §8); Standortseiten
  brauchen laut Regelwerk eigenständige lokale Informationen und echten
  Nutzen, keine austauschbaren Textbausteine (bestätigt, `CLAUDE.md` §9).

## Informations- und Ratgeberinhalte

- „Ratgeber und Glossar" sowie „FAQ" sind als strukturierte Inhaltsarten
  genannt (`CLAUDE.md` §8). Konkrete Themen: noch zu klären.

## URL-Regeln

- Lesbare, kleingeschriebene und extensionlose URLs ohne Umlaute oder
  Leerzeichen (bestätigt, `CLAUDE.md` §9).
- Keine massenhaft erzeugten, nahezu identischen Stadt- oder
  Leistungsseiten (bestätigt, `CLAUDE.md` §9).

## Onpage-SEO

- Mobile-first entwickeln; mobile Version muss vollständige Hauptinhalte
  enthalten (bestätigt, `CLAUDE.md` §9).
- Pro Seite ein eindeutiges Hauptthema und grundsätzlich genau eine H1
  (bestätigt, `CLAUDE.md` §9).
- Pro Seite individueller Title, individuelle Description und korrekter
  Canonical (bestätigt, `CLAUDE.md` §9).
- Sitemap und `robots.txt` je Domain automatisch erzeugen (bestätigt,
  `CLAUDE.md` §9).
- Bilder mit sinnvollem Alt-Text, Breite und Höhe; unterhalb des
  sichtbaren Bereichs verzögert laden (bestätigt, `CLAUDE.md` §9).
- Seitenleistung anhand LCP, INP und CLS prüfen; das verwendete
  CSS-Werkzeug ist kein eigener Rankingfaktor (bestätigt, `CLAUDE.md` §9).
- Keine KI-Inhalte ungeprüft veröffentlichen (bestätigt, `CLAUDE.md` §9).

## Interne Verlinkung

- Leistungen, Branchen, Standorte und Wissensinhalte logisch intern
  verlinken (bestätigt, `CLAUDE.md` §9).

## Strukturierte Daten

- Organization oder passender LocalBusiness-Typ, Service, BreadcrumbList,
  Article/BlogPosting, JobPosting nur auf einer einzelnen tatsächlich
  aktiven Stellenanzeige (bestätigt, `CLAUDE.md` §10).
- FAQPage ist keine allgemeine SEO-Pflicht; kein Markup einbauen, das
  nicht zum sichtbaren Seiteninhalt passt (bestätigt, `CLAUDE.md` §10).
- Strukturierte Daten müssen zum sichtbaren Inhalt passen und vor
  Veröffentlichung validiert werden (bestätigt, `CLAUDE.md` §10).

## Lokale SEO

- Noch zu klären: konkrete lokale SEO-Maßnahmen und Standorte. `CLAUDE.md`
  legt hierzu über die genannten Standortseiten-Regeln (siehe Abschnitt
  „Standorte") hinaus nichts Konkretes fest.

## Migration und Redirects

Vor dem Domainwechsel von AKRO Sicherheit (bestätigt, `CLAUDE.md` §12):

1. Alle aktuell erreichbaren URLs erfassen.
2. Für jede alte URL eine fachlich passende neue Ziel-URL festlegen.
3. Individuelle permanente Weiterleitungen erstellen.
4. Nicht pauschal alle alten URLs auf die Startseite umleiten.
5. Redirects und Canonicals im Vorschau-Deployment testen.
6. Erst danach Domain und DNS umstellen.
7. MX-Einträge der Strato-E-Mail-Postfächer nicht verändern.
8. Anschließend Sitemap einreichen und Indexierung überwachen.

## Analytics und Conversion-Messung

- Ziel ist eine gemeinsame GA4-Messung für die AKRO-Gruppe über alle vier
  Domains, mit Cross-Domain-Messung (bestätigt, `CLAUDE.md` §11).
- Marke und Hostname müssen getrennt auswertbar bleiben (bestätigt,
  `CLAUDE.md` §11).
- Ein gemeinsames, dokumentiertes Event-Schema verwenden; wichtige
  Ereignisse: Lead, Formularstart, Formularversand, Telefonklick,
  E-Mail-Klick, Bewerbungsstart, Bewerbungsversand (bestätigt, `CLAUDE.md`
  §11).
- Google Consent Mode v2 und eine geeignete Einwilligungslösung einplanen;
  Tags dürfen nicht unkontrolliert vor der vorgesehenen Einwilligung
  feuern (bestätigt, `CLAUDE.md` §11).
- Tracking erst implementieren, wenn Messkonzept und
  Datenschutzanforderungen freigegeben sind (bestätigt, `CLAUDE.md` §11).

## Qualitäts- und Freigaberegeln

- Keine Zahlen, Kunden, Bewertungen, Zertifikate, Referenzen oder
  Leistungsversprechen erfinden (bestätigt, `CLAUDE.md` §13).
- Referenznamen und Kundenlogos nur nach ausdrücklicher
  Veröffentlichungsfreigabe verwenden (bestätigt, `CLAUDE.md` §13).
- Reaktionszeiten, Erfahrung, Mitarbeiterzahlen und andere
  Marketingzahlen vor Veröffentlichung bestätigen (bestätigt, `CLAUDE.md`
  §13).
- Zertifizierungsbezeichnungen und Geltungsbereiche mit den
  Originalzertifikaten abgleichen; Zertifikate in konkreten
  Kundennutzen übersetzen, ohne den Geltungsbereich zu übertreiben
  (bestätigt, `CLAUDE.md` §13).
- Keine KI-Inhalte ungeprüft veröffentlichen (bestätigt, `CLAUDE.md` §9).

## Noch zu recherchierende Punkte

- Konkrete Zielgruppen je Marke.
- Konkrete Leistungs-, Branchen- und Standortseiten (Umfang und Themen).
- Konkrete lokale SEO-Maßnahmen.
- Keywords, Suchvolumen und Wettbewerbsanalyse — bewusst nicht Teil dieses
  Gerüsts.
- Konkrete Zeitplanung und Priorisierung der SEO-Umsetzung.

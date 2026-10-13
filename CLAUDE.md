# AKRO Webprojekt – verbindlicher Projektkontext

> Ablageort: `C:\Users\alkho\Desktop\AKRO GmbH\Technik\01-projekte\akro-web\CLAUDE.md`
> Stand: 22.08.2026

Diese Datei wird von Claude Code bei Projektstart gelesen. Sie enthält die
verbindlichen Regeln und Entscheidungen für das AKRO-Webprojekt. Fehlende
Informationen werden erfragt und niemals erfunden oder geschätzt.
Bei webspezifischen technischen Konflikten hat diese Projektdatei Vorrang vor
einer übergeordneten `CLAUDE.md` im Ordner `Technik`.

## 1. Zusammenarbeit

- Der Nutzer ist kein Programmierer; Fachbegriffe kurz und verständlich erklären.
- Kompakt, schrittweise und mit vollständig kopierbaren Befehlen antworten.
- Immer nur eine klar abgegrenzte Aufgabe bearbeiten.
- Wirtschaftlichkeit beachten, ohne Qualität, Datenschutz oder Sicherheit zu opfern.
- Nur Änderungen durchführen, die im aktuellen Auftrag ausdrücklich erlaubt sind.
- Vor größeren Änderungen Vorgehen und betroffene Dateien nennen.
- Keine Dateien löschen, verschieben oder überschreiben, wenn ihre Bedeutung unklar ist.
- Keine Installation, keinen Commit, Push, Deploy und keine DNS-Änderung ohne Auftrag.
- Keine Subagenten oder Agententeams einsetzen, außer der Nutzer fordert sie ausdrücklich an.
- Nach Änderungen geänderte Dateien, Prüfungen und offene Punkte kompakt nennen.

## 2. Token- und Kontextökonomie

- Bestehende Informationen zuerst gezielt mit Suche und kleinen Dateiausschnitten prüfen.
- Nicht bei jeder Aufgabe den gesamten Altbestand oder alle Planungsdokumente einlesen.
- Keine parallelen Analysen, wenn eine gezielte Prüfung ausreicht.
- Pro Sitzung möglichst ein zusammenhängendes Arbeitspaket bearbeiten.
- Keine unnötigen Abhängigkeiten, Frameworks, MCPs oder Plugins hinzufügen.
- Detaillierte Dokumente nur lesen, wenn sie für die aktuelle Aufgabe relevant sind.

## 3. Unternehmen

- Rechtsträger: AKRO GmbH
- Sitz: Saarwellinger Straße 25, 66740 Saarlouis
- Niederlassung: Bonn
- Geschäftsführer: Wagdee Al Muliki
- Telefon: 0228 18456685
- Zentrale E-Mail: info@akro-sicherheit.de

Die Websites repräsentieren Geschäftsbereiche beziehungsweise Marken der AKRO GmbH,
sofern der Nutzer nicht ausdrücklich eine andere rechtliche Struktur bestätigt.

## 4. Marken und Domains

| Marke | Domain | Schwerpunkt | Grundfarbe |
|---|---|---|---|
| AKRO Sicherheit | akro-sicherheit.de | Objekt-, Werk-, Veranstaltungs- und Personenschutz | Blau/Cyan |
| AKRO Fire & Safety | akro-fire-safety.de | Sicherungsposten, Brandwachen, Gasmessung, PSAgA und industrielle HSE-Leistungen | Rot/Orange |
| AKRO Service | akro-service.de | Reinigung, Logistik, Transport und weitere Dienstleistungen | Grün |
| AKRO Group | akro-group.de | Schlanke Dachmarken- und Portalseite | AKRO-Blau |

Reihenfolge der Umsetzung:

1. AKRO Sicherheit vollständig fertigstellen.
2. Gemeinsames Designsystem stabilisieren.
3. AKRO Fire & Safety aufbauen.
4. AKRO Service aufbauen.
5. AKRO Group als schlanke Portalseite aufbauen.

## 5. Verbindliche Quellen

- Dieses Git-Repository ist die einzige Quelle für den aktuellen Programmstand.
- Der Ordner `akro sicherheit webseite` ist Altbestand und dient nur als Quelle für Inhalte, Assets und alte URLs.
- Der Ordner `neu claude` ist ein visueller HTML/CSS-Prototyp und kein produktiver Code.
- `CLAUDE_1.md` und `PROJEKTPLAN.md` außerhalb des Repositorys sind historische Planungsstände.
- Nichts aus Altbestand, Prototypen oder historischen Plänen ungeprüft übernehmen.
- Tatsächlich umgesetzter Stand gehört in `docs/STATUS.md`.
- Begründete und freigegebene Entscheidungen gehören in `docs/DECISIONS.md`.
- SEO-Strategie und URL-Plan gehören in `docs/SEO-STRATEGY.md`.

## 6. Technische Architektur

Dieser Abschnitt beschreibt den freigegebenen Zielzustand. Der tatsächliche
aktuelle Stand ist ausschließlich in `docs/STATUS.md` dokumentiert.

- Astro bleibt das Framework und erzeugt möglichst statisches HTML.
- npm bleibt der einzige Paketmanager; npm, pnpm und Yarn niemals mischen.
- Ziel ist ein schlankes npm-Workspace-Monorepo.
- Vier getrennt baubare Astro-Apps teilen gemeinsame Komponenten und Standards.
- React oder andere UI-Frameworks nur ergänzen, wenn ein konkreter Nutzen nachgewiesen und freigegeben wurde.
- Clientseitiges JavaScript auf das funktional notwendige Minimum beschränken.
- Abhängigkeiten nur installieren, wenn Zweck, Auswirkungen und Alternative vorher erklärt wurden.

Zielstruktur:

```text
apps/
  akro-sicherheit/
  akro-fire-safety/
  akro-service/
  akro-group/
packages/
  design-system/
```

Weitere gemeinsame Pakete erst anlegen, wenn ein tatsächlicher gemeinsamer Bedarf besteht.

## 7. Styling und Designsystem

Dieser Abschnitt beschreibt den freigegebenen Zielzustand. Tailwind und das
AKRO-Designsystem sind geplant, aber technisch noch nicht eingerichtet — es
ist noch kein Tailwind installiert. Der tatsächliche aktuelle Stand ist
ausschließlich in `docs/STATUS.md` dokumentiert.

- Tailwind wird lokal im Astro-Build verwendet, niemals über ein CDN.
- Tailwind dient für Layout, Responsive Design, Abstände und Standardzustände.
- Eigene AKRO-Design-Tokens steuern Farben, Typografie, Radien, Schatten und Bewegungen.
- Besondere Markenelemente, Verläufe und Animationen werden mit gezieltem Custom CSS umgesetzt.
- Die Marken verwenden gemeinsame Komponenten und keine kopierten CSS-Gesamtsysteme.
- Das Ergebnis darf nicht wie ein generisches Tailwind-Template wirken.
- Produktions-CSS muss minimiert und auf unnötige Styles geprüft werden.
- Schriften und wesentliche Assets selbst hosten.
- Keine Google Fonts, Font Awesome oder unnötigen externen CDN-Ressourcen.
- Bestehende Design-DNA erhalten: Blau/Cyan-Verläufe, hochwertige Cards,
  Zertifikatsdarstellung und dezente Bewegungen.
- Layout und Grid neu mobile-first aufbauen; bestehende Mobilfehler nicht kopieren.
- Mitarbeiter- und Bewerberbereiche dürfen heller und wärmer wirken.

## 8. Strukturierte Inhalte und spätere Agenten

Wiederkehrende Inhalte werden vom Layout getrennt und mit festen Schemata gespeichert:

- Leistungen
- Branchen
- Standorte
- Zertifizierungen
- Stellenanzeigen
- Ratgeber und Glossar
- FAQ
- Referenzen

Geeignete Formate sind Markdown, YAML oder JSON. Inhalte sollen durch Schemata
validiert werden, damit spätere Agenten und Redaktionswerkzeuge kontrolliert
damit arbeiten können.

Agenten dürfen später recherchieren, Entwürfe erstellen, Inhalte prüfen und
Änderungen über Branches oder Pull Requests vorschlagen. Ohne menschliche
Freigabe dürfen sie nichts veröffentlichen, deployen oder an geschäftlichen,
rechtlichen beziehungsweise personenbezogenen Daten verändern.

## 9. SEO-Grundregeln

- Nutzerorientierte, fachlich belastbare Inhalte haben Vorrang vor Seitenmenge.
- Mobile-first entwickeln; die mobile Version muss vollständige Hauptinhalte enthalten.
- Pro Seite ein eindeutiges Hauptthema und grundsätzlich genau eine H1 verwenden.
- Lesbare, kleingeschriebene und extensionlose URLs ohne Umlaute oder Leerzeichen.
- Pro Seite individueller Title, Description und korrekter Canonical.
- Sitemap und robots.txt je Domain automatisch erzeugen.
- Bilder mit sinnvollem Alt-Text, Breite und Höhe ausgeben; unterhalb des sichtbaren Bereichs verzögert laden.
- Leistungen, Branchen, Standorte und Wissensinhalte logisch intern verlinken.
- Keine massenhaft erzeugten, nahezu identischen Stadt- oder Leistungsseiten.
- Standortseiten brauchen eigenständige lokale Informationen und echten Nutzen.
- Keine KI-Inhalte ungeprüft veröffentlichen.
- Jede Domain erhält eigenständige Inhalte, Canonicals, Sitemap und strukturierte Daten.
- Seitenleistung anhand LCP, INP und CLS prüfen; das verwendete CSS-Werkzeug ist kein eigener Rankingfaktor.

## 10. Strukturierte Daten

Strukturierte Daten müssen zum sichtbaren Inhalt passen und vor Veröffentlichung
validiert werden. Je Seitentyp kommen insbesondere infrage:

- Organization oder passender LocalBusiness-Typ
- Service
- BreadcrumbList
- Article beziehungsweise BlogPosting
- JobPosting nur auf einer einzelnen, tatsächlich aktiven Stellenanzeige

FAQPage ist keine allgemeine SEO-Pflicht. Kein Markup einbauen, das nicht zum
sichtbaren Seiteninhalt passt oder keinen konkreten Nutzen hat.

## 11. Google Analytics und Einwilligung

- Der Repository- und CSS-Aufbau beeinflusst Google Analytics nicht.
- Ziel ist eine gemeinsame GA4-Messung für die AKRO-Gruppe über alle vier Domains.
- Cross-Domain-Messung für alle vier Domains einplanen.
- Marke und Hostname müssen getrennt auswertbar bleiben.
- Ein gemeinsames, dokumentiertes Event-Schema verwenden.
- Wichtige Ereignisse: Lead, Formularstart, Formularversand, Telefonklick,
  E-Mail-Klick, Bewerbungsstart und Bewerbungsversand.
- Google Consent Mode v2 und eine geeignete Einwilligungslösung einplanen.
- Analytics- und Werbe-Tags dürfen nicht unkontrolliert vor der vorgesehenen Einwilligung feuern.
- Tracking erst implementieren, wenn Messkonzept und Datenschutzanforderungen freigegeben sind.

## 12. URL-Migration von AKRO Sicherheit

Vor dem Domainwechsel:

1. Alle aktuell erreichbaren URLs erfassen.
2. Für jede alte URL eine fachlich passende neue Ziel-URL festlegen.
3. Individuelle permanente Weiterleitungen erstellen.
4. Nicht pauschal alle alten URLs auf die Startseite umleiten.
5. Redirects und Canonicals im Vorschau-Deployment testen.
6. Erst danach Domain und DNS umstellen.
7. MX-Einträge der Strato-E-Mail-Postfächer nicht verändern.
8. Anschließend Sitemap einreichen und Indexierung überwachen.

## 13. Inhalte, Zertifikate und Recht

- AKRO erbringt Dienstleistungen beziehungsweise Werkleistungen, keine Arbeitnehmerüberlassung.
- Nicht von Personalgestellung oder Mitarbeitern nach Bedarf sprechen.
- Eigenverantwortliche Organisation, Einsatzplanung und Leistungserbringung durch AKRO beschreiben.
- Keine fremden Webseitentexte übernehmen.
- Keine Zahlen, Kunden, Bewertungen, Zertifikate, Referenzen oder Leistungsversprechen erfinden.
- Referenznamen und Kundenlogos nur nach ausdrücklicher Veröffentlichungsfreigabe verwenden.
- Reaktionszeiten, Erfahrung, Mitarbeiterzahlen und andere Marketingzahlen vor Veröffentlichung bestätigen.
- Zertifizierungsbezeichnungen und Geltungsbereiche mit den Originalzertifikaten abgleichen.
- Zertifikate in konkreten Kundennutzen übersetzen, ohne den Geltungsbereich zu übertreiben.
- Impressum und Datenschutz als eigenständige Seiten erstellen.
- Keine Rechts- oder Unternehmensdaten aus Platzhaltern und Altcode übernehmen.
- Rechtstexte vor Veröffentlichung fachlich beziehungsweise rechtlich prüfen lassen.

## 14. Formulare und Automatisierung

- Kein PHP-Mailversand und keine Secrets im Browsercode oder Repository.
- Kurze Kontaktanfragen und umfangreiche Personalformulare getrennt behandeln.
- Jotform bleibt eine mögliche Lösung für komplexe Personal- und Dokumentenformulare.
- n8n und Make bleiben außerhalb der Website.
- Website und Automatisierungen später über klar definierte Datenfelder und Ereignisse verbinden.
- Noch keine endgültige Formulararchitektur festlegen, bevor Anforderungen,
  Datenschutz, Zustellung, Spam-Schutz und Zielsysteme geklärt sind.
- Risikoreiche Prozesse wie Verträge, Einstellungen und Zahlungen behalten menschliche Freigaben.

## 15. Hosting und Deployment

- Domains und E-Mail-Postfächer bleiben bei Strato.
- Die statische Architektur bleibt zwischen Hosting-Anbietern portabel.
- Vercel ist die bevorzugte Hosting- und Deployment-Lösung für die Websites,
  vorbehaltlich eines für die geschäftliche Nutzung passenden Tarifs.
- Cloudflare Pages bleibt eine mögliche Alternative.
- Jede Domain erhält ein eigenes Deployment der zugehörigen App.
- Hosting, GitHub-Anbindung und Domains erst behandeln, wenn die lokale Grundstruktur funktioniert und geprüft wurde.
- DNS-, Hosting- und Deployment-Änderungen erfolgen nur nach ausdrücklicher Freigabe.
- Die MX-Einträge der E-Mail-Postfächer dürfen nicht verändert werden.
- Keine produktive DNS-Umstellung ohne getestetes Vorschau-Deployment, Redirect-Liste und Rückfallplan.

## 16. Arbeitsablauf je Aufgabe

1. Aktuellen Zustand gezielt prüfen.
2. Kleinen Plan mit betroffenen Dateien nennen.
3. Nur den freigegebenen Umfang ändern.
4. Passende technische Prüfungen ausführen.
5. Ergebnis, geänderte Dateien und offene Punkte kompakt berichten.

Im Zweifel stoppen und nachfragen. Keine Annahmen stillschweigend als Fakten behandeln.

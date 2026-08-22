# Seitenarchitektur AKRO Sicherheit V1

> Stand: 22.08.2026
> **Freigegeben mit Präzisierungen.** Die Architektur ist bestätigt; einzelne
> URLs bleiben ausdrücklich vorläufig und sind unten als solche markiert.
> Die verbindliche Redirect-Planung liegt in `docs/URL-MIGRATION.md` und wird
> von diesem Dokument nicht verändert.

## 1. Status und Geltungsbereich

Dieses Dokument plant **ausschließlich `akro-sicherheit.de` in Version 1**.

| Marke | Geltung in diesem Dokument |
| --- | --- |
| AKRO Sicherheit | Vollständige Architekturplanung für V1, freigegeben |
| AKRO Fire & Safety | Nur zur Abgrenzung dokumentiert — keine Seitenplanung |
| AKRO Service | Nur zur Abgrenzung dokumentiert — keine Seitenplanung |
| AKRO Group | Nicht Teil dieses Dokuments |

Die Reihenfolge folgt `CLAUDE.md` §4: AKRO Sicherheit wird zuerst
fertiggestellt, danach wird das Designsystem stabilisiert, erst dann folgen
die weiteren Marken. Für Fire & Safety und Service existiert **noch keine
Seitenplanung**.

Grundlage des Ist-Stands: `docs/STATUS.md`. Grundlage des Altbestands:
`docs/LEGACY-INVENTORY.md`.

## 2. Markenabgrenzung

Die folgende Zuordnung der V1-Kernleistungen ist bestätigt. Sie ist der
**bestätigte Startumfang und keine dauerhafte Begrenzung** des
Leistungsangebots. Neue Leistungen müssen später ohne Umbau der
Grundarchitektur ergänzt werden können (siehe Abschnitt 8).

### AKRO Sicherheit — `akro-sicherheit.de`

1. Objekt- und Werkschutz
2. Revier- und Kontrolldienst
3. Veranstaltungssicherheit
4. Baustellenbewachung
5. Empfangs- und Pfortendienst
6. Personenschutz
7. Schutz kritischer Infrastrukturen (KRITIS)

### AKRO Fire & Safety — `akro-fire-safety.de` (nur Abgrenzung)

Sicherungsposten · Brandwachen · Gas- und Atmosphärenüberwachung ·
Höhensicherung und PSAgA · HSE- und SGU-Dienstleistungen

### AKRO Service — `akro-service.de` (nur Abgrenzung)

Reinigung · Logistik · Hostessen und Servicepersonal · weitere
personalintensive Leistungen als Werk- oder Dienstvertrag.

Ausdrücklich **keine Arbeitnehmerüberlassung** — dies prägt sämtliche Texte
und Verträge dieses Bereichs (`CLAUDE.md` §13).

### Trennungsregeln

- **Keine Vermischung.** Jede Leistung gehört genau einer Marke und wird nur
  auf deren Domain als eigene Leistungsseite geführt.
- **Querverweise statt Doppelinhalt.** Grenzt eine Anfrage an einen anderen
  Bereich (etwa Brandwache bei einem Sicherheitskunden), wird auf die andere
  Domain verwiesen — der Inhalt wird nicht dupliziert.
- **Jede Domain bleibt eigenständig** in Inhalten, Canonicals, Sitemap und
  strukturierten Daten (`CLAUDE.md` §9).

### Aufnahme neuer Leistungen

Bevor eine neue Leistung eine eigene Seite bekommt, muss geklärt sein:

1. Zu welcher Marke gehört sie eindeutig?
2. Gibt es eine reale, belegbare Nachfrage oder einen konkreten Auftrag?
3. Trägt sie genug eigenständigen Inhalt für eine vollwertige Seite, oder ist
   sie ein Abschnitt auf einer bestehenden Seite?
4. Überschneidet sie sich inhaltlich mit einer bestehenden Seite
   (Kannibalisierungsprüfung, siehe Abschnitt 8)?

Wird eine Frage mit Nein beantwortet, entsteht **keine** neue Seite.

## 3. Sitemap

### V1 — öffentlich, in Navigation und XML-Sitemap

```text
/                                     Startseite (über das Logo erreichbar)
/leistungen                           Leistungsübersicht
  /leistungen/objekt-und-werkschutz
  /leistungen/revier-und-kontrolldienst
  /leistungen/veranstaltungssicherheit
  /leistungen/baustellenbewachung
  /leistungen/empfangs-und-pfortendienst
  /leistungen/personenschutz
  /leistungen/kritis-schutz            URL vorläufig, siehe unten
/unternehmen
/referenzen
/karriere
/kontakt
/anfrage
/impressum                            nur Footer
/datenschutz                          nur Footer
```

### V1 — technisch erforderlich, aber nicht öffentlich gelistet

```text
/404      kein Navigationspunkt, kein Eintrag in der XML-Sitemap, noindex
```

### V1 vorgesehen, aber blockiert

```text
/zertifizierungen    erst nach Prüfung der Originalzertifikate;
                     vorerst nicht in der Hauptnavigation
```

### Spätere Erweiterung, nicht Teil des ersten Launch

```text
/branchen            erst mit eigenständigen, belastbaren Inhalten
/standorte           offen, siehe Abschnitt 7 (lokale SEO)
```

### Nicht als Seite vorgesehen

Die AGB bleiben in V1 als **PDF** erhalten. Es wird **keine zusätzliche
HTML-Seite** `/agb` festgelegt. Der endgültige PDF-Pfad und eventuell
notwendige Redirects sind offen.

### Hinweis zur KRITIS-URL

`/leistungen/kritis-schutz` ist ein **Arbeitsvorschlag**. Die endgültige URL
wird vor dem Websitebau in einer separaten SEO- und Begriffsprüfung
beschlossen. Bis dahin gilt keine Festlegung.

## 4. Seitenübersicht

Alle URLs sind vorläufig, sofern nicht anders vermerkt. „Bestätigt" bezieht
sich auf die **Seite**, nicht auf ihre URL.

| URL (vorläufig) | Seitentyp | Zweck | Zielgruppe | Wichtigste Nutzerfrage | Primärer CTA | Inhaltsquelle | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Startseite | Einstieg, Vertrauen, Weiterleitung in die Leistungen | Auftraggeber | Ist AKRO der passende Sicherheitsdienst für mich? | Anfrage stellen | Altbestand + neu | Bestätigt |
| `/leistungen` | Übersicht | Alle sieben Leistungen sortiert zugänglich machen | Auftraggeber | Welche Leistungen gibt es? | Zur passenden Leistung | Altbestand | Bestätigt |
| `/leistungen/objekt-und-werkschutz` | Leistungsseite | Dauerhafte Bewachung von Objekten und Werksgeländen | Industrie, Gewerbe | Wie wird mein Objekt dauerhaft bewacht? | Anfrage stellen | Altbestand + neu | Bestätigt |
| `/leistungen/revier-und-kontrolldienst` | Leistungsseite | Intervallkontrollen ohne Dauerposten | Gewerbe, Verwaltung | Geht Sicherheit auch ohne ständige Präsenz? | Anfrage stellen | Neu zu erstellen | Bestätigt |
| `/leistungen/veranstaltungssicherheit` | Leistungsseite | Absicherung von Veranstaltungen | Veranstalter, Messen | Wer sichert meine Veranstaltung ab? | Anfrage stellen | Altbestand + neu | Bestätigt |
| `/leistungen/baustellenbewachung` | Leistungsseite | Schutz von Baustellen und Material | Bauunternehmen | Wie schütze ich meine Baustelle vor Diebstahl? | Anfrage stellen | Neu zu erstellen | Bestätigt |
| `/leistungen/empfangs-und-pfortendienst` | Leistungsseite | Empfang, Zutrittskontrolle, Pforte | Unternehmen, Verwaltung | Wer besetzt Empfang und Pforte? | Anfrage stellen | Neu zu erstellen | Bestätigt |
| `/leistungen/personenschutz` | Leistungsseite | Schutz von Personen | Unternehmen, Privatpersonen | Wie läuft professioneller Personenschutz ab? | Kontakt aufnehmen | Altbestand + neu | Bestätigt |
| `/leistungen/kritis-schutz` | Leistungsseite | KRITIS-spezifische Anforderungen | Betreiber kritischer Anlagen | Erfüllt AKRO die Anforderungen im KRITIS-Umfeld? | Anfrage stellen | Noch zu klären | Seite bestätigt, **URL vorläufig** |
| `/unternehmen` | Unternehmensseite | Wer AKRO ist, wie gearbeitet wird | Auftraggeber, Bewerber | Mit wem habe ich es zu tun? | Kontakt aufnehmen | Altbestand | Bestätigt |
| `/referenzen` | Referenzseite | Belegte Projekte und Kunden | Auftraggeber | Für wen hat AKRO schon gearbeitet? | Anfrage stellen | Noch zu klären (Freigabe) | Bestätigt |
| `/karriere` | Karriereseite | Bewerbergewinnung | Bewerber | Kann ich bei AKRO arbeiten? | Initiativbewerbung | Neu zu erstellen | Bestätigt |
| `/kontakt` | Kontaktseite | Direkter Kontaktweg | Alle | Wie erreiche ich AKRO? | Kontaktformular | Altbestand | Bestätigt |
| `/anfrage` | Formularseite | Strukturierte Angebotsanfrage | Auftraggeber | Wie bekomme ich ein Angebot? | Anfrage absenden | Altbestand (Feldschema) | Bestätigt |
| `/impressum` | Pflichtseite | Gesetzliche Anbieterkennzeichnung | Alle | Wer betreibt diese Seite? | — | Noch zu klären | Bestätigt, nur Footer |
| `/datenschutz` | Pflichtseite | Datenschutzerklärung | Alle | Was passiert mit meinen Daten? | — | Noch zu klären | Bestätigt, nur Footer |
| `/404` | Fehlerseite | Nutzer auffangen statt verlieren | Alle | Wo bin ich gelandet? | Zur Startseite | Neu zu erstellen | **Bestätigt (V1, technisch)** — keine Navigation, keine XML-Sitemap, `noindex` |
| `/zertifizierungen` | Nachweisseite | Qualitäts- und Normnachweise erklären | Auftraggeber, Ausschreibungen | Welche Nachweise kann AKRO vorlegen? | Anfrage stellen | Noch zu klären | **Für V1 vorgesehen, blockiert** — nicht in der Hauptnavigation |
| `/branchen` | Übersicht | Branchenspezifischer Einstieg | Auftraggeber | Kennt AKRO meine Branche? | Zur Leistung | Noch zu klären | **Nicht Teil des ersten Launch** |

### Blockade `/zertifizierungen`

Die Seite ist für V1 vorgesehen, bleibt aber blockiert, bis kumulativ erfüllt ist:

1. Originalzertifikate wurden geprüft.
2. Gültigkeit und Geltungsbereich wurden bestätigt.
3. Die öffentliche Darstellung wurde freigegeben.

Bis dahin erscheint sie **nicht** in der Hauptnavigation.

## 5. Navigation

### Hauptnavigation (Desktop)

**Logo** (führt auf `/`) · `Leistungen` · `Unternehmen` · `Referenzen` ·
`Karriere` · `Kontakt` · **`Anfrage stellen`** als hervorgehobener Button.

Die Startseite wird ausschließlich über das Logo erreicht und bekommt
**keinen eigenen Navigationspunkt**.

`Leistungen` öffnet ein Untermenü mit den sieben Leistungsseiten und einem
Verweis auf die Übersicht. Rechtstexte, `/404`, `/zertifizierungen` und
`/branchen` gehören **nicht** in die Hauptnavigation.

### Mobile Navigation

- **Telefonnummer und Anfrage müssen auf Mobilgeräten leicht erreichbar
  sein.** Ob dies über eine dauerhaft sichtbare beziehungsweise sticky
  Darstellung gelöst wird, ist **noch keine feste Architekturentscheidung** —
  Platzbedarf und Bedienbarkeit werden erst im Prototyp geprüft.
- Alle übrigen Einträge in einem einklappbaren Menü; `Leistungen` als
  aufklappbare Gruppe, nicht als eigene Zwischenebene.
- Die mobile Version muss die vollständigen Hauptinhalte enthalten
  (`CLAUDE.md` §9) — keine reduzierte Mobilfassung.

### Footer-Navigation

| Spalte | Inhalt |
| --- | --- |
| Leistungen | Alle sieben Leistungsseiten |
| Unternehmen | Unternehmen, Referenzen, Karriere |
| Kontakt | Anschrift, Telefon, E-Mail, Kontakt, Anfrage |
| Rechtliches | Impressum, Datenschutz, AGB (PDF) |

### Impressum und Datenschutz

Beide werden **eigenständige Seiten** und ausschließlich im Footer verlinkt —
auf **jeder** Seite. Damit endet der in `docs/LEGACY-INVENTORY.md` §1
dokumentierte Zustand, dass beide Aufklapp-Elemente innerhalb von
`kontakt.html` sind.

Die AGB werden im Footer als PDF verlinkt; der endgültige Pfad ist offen.

### Platzierung von „Anfrage stellen"

1. Als hervorgehobener Button in der Kopfzeile, auf allen Seiten, auch mobil.
2. Am Ende jeder Leistungsseite als Abschluss-CTA.
3. Im Footer-Block Kontakt.

Der CTA führt immer auf `/anfrage`. `/kontakt` bleibt der Weg für allgemeine
Fragen — die beiden werden nicht vermischt.

## 6. Muster für Leistungsseiten

Ein einziges wiederverwendbares Muster für alle sieben Seiten. Gleiche
Struktur, unterschiedlicher Inhalt — das hält spätere Ergänzungen billig.

| # | Abschnitt | Inhalt |
| --- | --- | --- |
| 1 | Einstieg | Genau eine H1 mit der Leistungsbezeichnung, kurze Einordnung, CTA |
| 2 | Leistungsumfang | Was konkret erbracht wird, als Aufzählung |
| 3 | Einsatzbereiche | Typische Objekte und Situationen |
| 4 | Ablauf | Von der Anfrage bis zum Einsatz, nachvollziehbar |
| 5 | Qualifikation | Welche Nachweise das eingesetzte Personal mitbringt — **nur belegbare Angaben** |
| 6 | Abgrenzung | Was nicht Teil der Leistung ist, Verweis auf die zuständige Marke |
| 7 | Verwandte Leistungen | Zwei bis drei thematisch nahe Leistungsseiten |
| 8 | Abschluss-CTA | Verweis auf `/anfrage` |

Ein FAQ-Abschnitt ist **optional** und nur sinnvoll, wenn echte,
wiederkehrende Kundenfragen vorliegen. `CLAUDE.md` §10 stellt klar, dass
FAQPage-Markup keine SEO-Pflicht ist.

### Interne Verlinkung

- Jede Leistungsseite verlinkt zurück auf `/leistungen`.
- Jede Leistungsseite verlinkt auf zwei bis drei verwandte Leistungen —
  fachlich begründet, nicht wahllos.
- Grenzt eine Leistung an eine andere Marke, wird auf die passende Domain
  verwiesen statt Inhalt zu duplizieren.
- `/referenzen` verlinkt auf die jeweils passende Leistungsseite, sobald
  Referenzen freigegeben sind.

Vorschlag für verwandte Leistungen (fachlich, noch zu bestätigen):

| Seite | Verwandt mit |
| --- | --- |
| Objekt- und Werkschutz | Revier- und Kontrolldienst, Empfangs- und Pfortendienst, KRITIS |
| Revier- und Kontrolldienst | Objekt- und Werkschutz, Baustellenbewachung |
| Veranstaltungssicherheit | Personenschutz, Empfangs- und Pfortendienst |
| Baustellenbewachung | Revier- und Kontrolldienst, Objekt- und Werkschutz |
| Empfangs- und Pfortendienst | Objekt- und Werkschutz, Veranstaltungssicherheit |
| Personenschutz | Veranstaltungssicherheit, Objekt- und Werkschutz |
| KRITIS | Objekt- und Werkschutz, Revier- und Kontrolldienst |

### Inhaltliche Grenzen

Keine erfundenen Leistungsversprechen, Reaktionszeiten, Mitarbeiterzahlen,
Einsatzstunden, Objektzahlen oder Zertifizierungsclaims (`CLAUDE.md` §13).
Fehlt eine Angabe, wird sie als `[TODO: ...]` markiert und nachgefragt.
Zertifizierungen dürfen nur benannt werden, wenn sie mit den
Originalzertifikaten abgeglichen sind.

## 7. SEO-Architektur

### URL-Regeln

- Extensionlos, durchgehend kleingeschrieben, keine Umlaute, keine
  Leerzeichen (`CLAUDE.md` §9).
- Leistungsseiten liegen unter `/leistungen/` — die Hierarchie ist im Pfad
  ablesbar.
- Maximal zwei Ebenen tief. Tiefere Verschachtelung ist nicht vorgesehen.
- Umlaute werden umschrieben, nicht ersetzt.
- Die KRITIS-URL ist als Einzige noch ausdrücklich unentschieden.

### Struktur je Seite

- **Genau eine H1**, die das Seitenthema benennt.
- H2 gliedern die Abschnitte aus Abschnitt 6 in fachlich sinnvoller Folge.
- Individueller Title und individuelle Description je Seite.
- Selbstreferenzierender Canonical auf **jeder** indexierbaren Seite — im
  Altbestand fehlt er vollständig (`docs/LEGACY-INVENTORY.md` §1).
- `/404` erhält `noindex` und keinen Sitemap-Eintrag.

### Vorläufige Suchintention

Einordnung nach Nutzerabsicht, **ohne** Suchvolumen, Rankings oder
Search-Console-Daten — solche Daten liegen nicht vor und werden nicht
geschätzt.

| Seite | Vorläufige Suchintention |
| --- | --- |
| `/` | Navigierend und kommerziell — Anbieter finden und einordnen |
| `/leistungen` | Informierend — Überblick verschaffen |
| Leistungsseiten | Kommerziell — konkrete Leistung mit Beauftragungsabsicht |
| `/unternehmen` | Informierend — Anbieter prüfen |
| `/referenzen` | Vertrauensprüfend — Eignung belegen |
| `/karriere` | Bewerbend — Arbeitsplatz suchen |
| `/kontakt`, `/anfrage` | Transaktional — Kontakt herstellen |
| `/impressum`, `/datenschutz` | Rechtlich, nicht auf Ranking ausgelegt |
| `/404` | Keine — technische Seite, `noindex` |

### Canonical-Grundregeln

1. Jede indexierbare Seite verweist per Canonical auf sich selbst.
2. Eine einzige kanonische Domainvariante (www oder ohne www) — die
   Entscheidung steht in `docs/URL-MIGRATION.md` noch offen.
3. Ausschließlich `https`.
4. Keine Parameter-URLs in den Index; falls sie entstehen, zeigt der
   Canonical auf die parameterfreie Fassung.
5. Kein markenübergreifender Canonical zwischen den vier Domains.

### Strukturierte Daten

Je Seitentyp nur, was zum sichtbaren Inhalt passt (`CLAUDE.md` §10):
Organization oder passender LocalBusiness-Typ, `Service` auf Leistungsseiten,
`BreadcrumbList` in der Hierarchie. `JobPosting` **ausschließlich** auf einer
einzelnen, tatsächlich offenen Stellenanzeige — nicht auf `/karriere` selbst,
solange dort keine konkrete Stelle steht.

### Lokale SEO

Lokale Landingpages werden in V1 **nicht automatisch angelegt**. Das ist eine
**offene Entscheidung**, kein Versäumnis: `CLAUDE.md` §9 verbietet massenhaft
erzeugte, nahezu identische Stadtseiten und verlangt für Standortseiten
eigenständige lokale Informationen und echten Nutzen.

Der Standortbezug wird in V1 über die regulären Seiten und die
Kontaktangaben abgebildet.

## 8. Erweiterbarkeit

Die V1-Leistungen sind der bestätigte Startumfang, **keine dauerhafte
Begrenzung**. Die Architektur ist so angelegt, dass neue Leistungen ohne
Umbau der Grundstruktur ergänzt werden können.

### Neue Leistungen

Eine neue Leistung durchläuft die vier Prüffragen aus Abschnitt 2. Fällt die
Entscheidung für eine eigene Seite, entsteht sie unter `/leistungen/<name>`
nach dem Muster aus Abschnitt 6 und wird in Übersicht, Navigation, Footer und
den verwandten Leistungen ergänzt. **Bestehende URLs ändern sich dadurch
nicht**, und weder Navigationslogik noch Seitenmuster müssen angepasst werden.

### Branchen- und Standortseiten

Beide Ebenen sind vorgesehen, aber **nicht Teil des ersten Launch**:

- Branchenseiten unter `/branchen/<branche>` mit `/branchen` als Übersicht.
  Sie beantworten „kennt AKRO meine Branche", nicht „welche Leistung gibt es"
  — sonst kannibalisieren sie die Leistungsseiten. Sie dürfen erst mit
  eigenständigen, belastbaren Inhalten entstehen.
- Standortseiten unter `/standorte/<ort>`. Nur, wenn echter lokaler Inhalt
  vorliegt (Einsatzgebiet, Anfahrt, lokale Referenz).

Beide Ebenen werden erst begonnen, wenn die sieben Leistungsseiten inhaltlich
vollständig sind.

### Kannibalisierung und doppelte Inhalte vermeiden

1. **Ein Thema, eine Seite.** Zwei Seiten dürfen nicht dieselbe Nutzerfrage
   beantworten.
2. **Klare Achsen:** Leistungsseiten beschreiben *was*, Branchenseiten *für
   wen*, Standortseiten *wo*. Vermischen sich die Achsen, entsteht Doppelung.
3. **Kein Textbaustein-Vervielfältigen** mit ausgetauschtem Orts- oder
   Branchennamen.
4. **Keine markenübergreifende Doppelung** — verlinken statt kopieren.
5. Vor jeder neuen Seite prüfen, ob eine bestehende Seite dieselbe Frage
   bereits beantwortet. Wenn ja: bestehende Seite erweitern.

### URL-Stabilität

Nach Veröffentlichung gelten URLs als dauerhaft. Ist eine Änderung
unvermeidbar, wird die alte URL per 301 auf die inhaltlich passende neue Seite
geführt — niemals pauschal auf die Startseite (`CLAUDE.md` §12). Deshalb
werden URLs vor dem Start festgelegt und danach nicht mehr aus kosmetischen
Gründen angefasst.

## 9. Offene Entscheidungen

Vor dem Websitebau durch den Auftraggeber zu bestätigen.

### Architektur und URLs

- **KRITIS-URL:** `/leistungen/kritis-schutz` ist ein Arbeitsvorschlag. Die
  endgültige URL wird nach separater SEO- und Begriffsprüfung beschlossen.
- Bestätigung der übrigen URL-Struktur aus Abschnitt 4.
- Kanonische Domainvariante: mit oder ohne `www`?
- Bleiben lokale Landingpages aus V1 ausgeschlossen?
- Endgültiger PDF-Pfad der AGB und eventuell notwendige Redirects.
- Zeitpunkt für `/branchen` und `/standorte`.

### Blockiert bis zur Freigabe

- **`/zertifizierungen`:** Prüfung der Originalzertifikate, Bestätigung von
  Gültigkeit und Geltungsbereich, Freigabe der öffentlichen Darstellung.

### Referenzen — Freigaben erforderlich

- Welche Kunden dürfen **namentlich** genannt werden? In
  `docs/LEGACY-INVENTORY.md` sind Logos vorhanden, eine
  Veröffentlichungsfreigabe liegt **nicht** vor.
- Dürfen Kundenlogos abgebildet werden?
- Dürfen konkrete Projekte beschrieben werden, und in welcher Detailtiefe?

### Zertifikate und Nachweise

- Abgleich aller Zertifizierungsbezeichnungen und Geltungsbereiche mit den
  Originalzertifikaten.
- Welche Zertifikate sind **aktuell gültig**, welche abgelaufen?
- Bewacherregister-ID und Erlaubnis nach §34a GewO.

### Unternehmensdaten

- Registergericht und HRB-Nummer.
- USt-IdNr. — im Altbestand steht „auf Anfrage", was für ein Impressum nicht
  ausreicht.
- Zuständige Aufsichtsbehörde.
- Berufs- beziehungsweise Betriebshaftpflicht mit Geltungsbereich.
- Vollständige Angaben zum Geschäftsführer im Impressum.
- Verbandsmitgliedschaften: bestätigt oder nicht?
- Alle Marketingzahlen (Erfahrung, Reaktionszeit, Mitarbeiterzahl,
  Einsatzstunden) — bis zur Bestätigung nicht verwendbar.

### Rechtstexte

- Impressum: Erstellung und rechtliche Prüfung.
- Datenschutzerklärung: Erstellung und rechtliche Prüfung, abgestimmt auf die
  tatsächlich eingesetzte Formularlösung.
- Werden weiterhin IP-Adresse und User-Agent bei Formularsendungen
  protokolliert? Der Altbestand tut dies (`docs/LEGACY-INVENTORY.md` §2) — die
  Datenschutzerklärung muss dazu passen.
- Sämtliche Rechtstexte sind vor Veröffentlichung fachlich zu prüfen
  (`CLAUDE.md` §13).

### Inhalte und Technik

- Formulararchitektur für `/kontakt` und `/anfrage` — laut `CLAUDE.md` §14
  bewusst noch nicht festgelegt. PHP-Mailversand und Formspree entfallen.
- Mobile Erreichbarkeit von Telefon und Anfrage: sticky oder nicht — wird im
  Prototyp auf Platzbedarf und Bedienbarkeit geprüft.
- Echte Markenfarben, Typografie und Design-Tokens — in
  `packages/design-system` stehen bisher nur `[TODO]`-Platzhalter.
- Lizenzrechtlich nutzbare, lokal hostbare Schriftdateien.
- Inhaltsquelle für die KRITIS-Leistungsseite — im Altbestand nicht
  ausreichend vorhanden.
- Bildmaterial für die neu zu erstellenden Leistungsseiten.
- Search-Console- und Serverlogdaten für die Redirect-Liste
  (`docs/URL-MIGRATION.md`).

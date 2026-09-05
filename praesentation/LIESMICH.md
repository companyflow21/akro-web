# Unternehmenspräsentation

15 Folien im Format 16:9, ausgelegt auf einen **Rahmenvertrag mit Wellnest**.

- Vorlage: `unternehmenspraesentation.html`
- Ergebnis: `AKRO-Unternehmenspraesentation.pdf` (15 Seiten, 960 × 540 pt)
- Neu bauen: `build.ps1` im PowerShell-Fenster ausführen

Das PDF ist die Fassung, die verschickt wird. Es öffnet auf jedem Gerät
gleich, verrutscht nicht und lässt sich nicht versehentlich verändern. Die
HTML-Vorlage bleibt als Grundlage für den nächsten Kunden — dann werden nur
Titelblatt und die Wellnest-Folie getauscht.

---

## Folienübersicht

| # | Folie |
|---|---|
| 01 | Titel |
| 02 | Auf einen Blick — Stammdaten |
| 03 | Werkleistung statt Personalgestellung |
| 04 | Drei Geschäftsbereiche |
| 05 | AKRO Sicherheit — dauerhafte Bewachung |
| 06 | AKRO Sicherheit — befristete Einsätze |
| 07 | Personal und Qualifikation |
| 08 | AKRO Fire & Safety |
| 09 | AKRO Service |
| 10 | Zertifizierte Managementsysteme |
| 11 | Rechtssicherheit als Auftraggeber |
| 12 | Referenzen |
| 13 | Zusammenarbeit mit Wellnest |
| 14 | Ablauf einer Beauftragung |
| 15 | Kontakt |

Folie 03 trägt das stärkste Verkaufsargument gegenüber Wellnest: AKRO
übernimmt eine Leistung, statt Personal zu stellen. Das nimmt dem Auftraggeber
das Weisungs- und Prüfungsrisiko ab. Folie 11 macht die Compliance-Angaben
unaufgefordert — genau die, nach denen ein Einkäufer sonst nachfragen muss.

---

## Was noch fehlt

Es gibt zwei Markierungen. **Gelb** heißt: die Angabe fehlt ganz und muss
beschafft werden (`class="offen"`). **Blau** heißt: aus öffentlicher Quelle
recherchiert, nur noch gegenprüfen (`class="pruefen"`). Solange eine der
beiden sichtbar ist, geht das PDF nicht raus.

Blau vorbelegt auf Folie 11: **Amtsgericht Saarbrücken** als Registergericht
und **Landkreis Saarlouis, Amt für öffentliche Sicherheit und Ordnung** als
Aufsichtsbehörde nach § 34a GewO.

### Folie 13 — die wichtigste Folie, vier Angaben

- Objekt oder Standort des bisherigen Einsatzes
- Zeitraum
- Art des Einsatzes
- Ansprechpartner bei Wellnest

Ohne diese vier Angaben bleibt die Folie leer, auf der die Präsentation
eigentlich beweist, dass es die Zusammenarbeit schon gibt.

### Folie 07 und 11 — Compliance

- Bewacherregister-ID (Folie 07)
- HRB-Nummer (Folie 11)
- Deckungssumme der Betriebshaftpflicht (Folie 11)
- Umsatzsteuer-Identifikationsnummer (Folie 11)

Dieselben Angaben werden auch für das Impressum der Platzhalterseite
gebraucht.

### Folie 12 — Logos

Von den fünf Referenzen liegen nur **Koelnmesse** und **Bundesvereinigung
Lebenshilfe** als brauchbare SVG-Dateien vor. Die Logos von **Evonik, REWE und
Kötter** sind im Altbestand zerstört. Bis saubere Dateien vorliegen, stehen
diese drei als Textnamen — die Folie funktioniert in beiden Zuständen.

Ein Logo darf nicht nachgezeichnet oder von einer Bild-KI erzeugt werden. Das
wäre eine Fälschung fremder Marken.

---

## Anschreiben

Die E-Mail, mit der das PDF rausgeht, steht in `anschreiben-wellnest.md` —
drei Fassungen (Hauptfassung, Kurzfassung, Nachfassen) plus eine Checkliste
vor dem Absenden.

---

## Bilder einsetzen

Fotos in den Ordner `bilder/` legen. Am wertvollsten:

1. Mitarbeiter in AKRO-Dienstkleidung im Einsatz
2. Bewachte Objekte, Werksgelände, Pforte, Empfang
3. Eine Situation aus dem Wellnest-Einsatz, falls vorhanden

Dateinamen klein, ohne Leerzeichen und ohne Umlaute — also
`werkschutz-pforte.jpg`, nicht `Werkschutz Pforte (groß).jpg`.

Vorgesehene Plätze:

- **Folie 13**, unter den Eckdaten: dort steht ein leerer Rahmen mit dem
  Hinweis „Foto vom Einsatz oder vom Objekt einsetzen"
- **Folie 01**, das Titelblatt, verträgt ein großflächiges Foto als
  Hintergrund. Bisher bewusst ohne, weil kein geeignetes Material vorlag.

Sag Bescheid, wenn die Fotos da sind — das Einsetzen und Zuschneiden mache
ich.

---

## Zahlen, die bewusst fehlen

Nicht in der Präsentation stehen: Mitarbeiterzahl, Einsatzstunden,
Objektzahl, „über 5 Jahre am Markt", „über 8 Jahre Berufserfahrung" und
„3 Stunden bis Einsatzbeginn".

Die letzten drei stehen zwar in `AGENTS.md`, gelten nach
`01-projekte/akro-web/CLAUDE.md` §13 aber als bestätigungspflichtig. Gerade
die **drei Stunden bis Einsatzbeginn** wären gegenüber Wellnest ein starkes
Argument — aber nur, wenn die Zusage im Ernstfall gehalten wird. Wenn du sie
freigibst, ergänze ich sie auf Folie 03 und 14.

---

## Technisches

Eine Folie ist exakt 1280 × 720 CSS-Pixel. Bei 96 dpi entspricht das
13,333 × 7,5 Zoll, also genau der Seitengröße im `@page`-Block der
`assets/folien.css`. Dadurch wird jede Folie beim Druck zu genau einer
PDF-Seite ohne Skalierung.

Farben und Schriften stammen wörtlich aus
`packages/design-system/tokens.css`. Die Schriftdateien (Archivo,
Source Serif 4, beide SIL-OFL-lizenziert) liegen unter `assets/fonts/` und
werden ins PDF eingebettet — geprüft: 46 Font-Deskriptoren, ausschließlich
`Archivo SemiBold` und `Source Serif 4`, keine Ersatzschriften wie Arial oder
Georgia.

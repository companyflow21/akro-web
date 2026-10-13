# AKRO Design Starter

Dieses Paket enthält nur die übertragbaren Grundlagen des Designs von
akro-group.de. Es enthält keine Inhalte, Rechtstexte oder Technik der
Platzhalterseite.

## Inhalt

- `akro-design.css` – Farben, Typografie, Layout und wiederverwendbare Bausteine
- `fonts/` – Archivo und Source Serif 4, lokal gehostet
- `img/akro-wortmarke.svg` – transparente AKRO-Wortmarke
- `img/favicon.svg` – AKRO-Favicon
- `beispiel.html` – minimales Einbaubeispiel

## Einbau

Den kompletten Ordner in das neue Projekt kopieren und das Stylesheet im
`<head>` einbinden:

```html
<link rel="stylesheet" href="/pfad/akro-design/akro-design.css" />
```

Die relativen Pfade müssen erhalten bleiben, damit die Schriften gefunden
werden:

```text
akro-design/
├── akro-design.css
├── fonts/
│   ├── archivo-latin-var.woff2
│   └── source-serif-4-latin-var.woff2
└── img/
    ├── akro-wortmarke.svg
    └── favicon.svg
```

## Markenfarbe wählen

`data-akro-brand` kann am `<html>`-Element oder an einer einzelnen dunklen
Fläche gesetzt werden:

```html
<html lang="de" data-akro-brand="sicherheit">
```

Mögliche Werte:

- `sicherheit`
- `fire-safety`
- `service`

Ohne Attribut wird die neutrale Graphitwelt der Dachmarke verwendet.

## Wichtigste Gestaltungsregeln

1. Die Dachmarke bleibt graphitfarben; Farbe kommt aus den drei Sparten.
2. Archivo wird für Überschriften, Labels und Buttons verwendet.
3. Source Serif 4 wird für Fließtext verwendet.
4. Keine unnötigen Rundungen, Schatten oder typischen Kacheloptiken.
5. Große, klare Flächen und technische Labels in gesperrten Versalien.
6. Die drei Geschäftsbereiche immer gleichrangig darstellen.
7. Schriften und Bilder lokal hosten; keine externen Font-CDNs.

## Wichtigste Klassen

- `.akro-container` – zentrierte Inhaltsbreite
- `.akro-section` – einheitlicher vertikaler Abschnittsabstand
- `.akro-label` – technisches Label in Versalien
- `.akro-lead` – hervorgehobener Einleitungstext
- `.akro-brand-surface` – dunkle Fläche in der aktiven Markenfarbe
- `.akro-actions` – Button-Zeile
- `.akro-button` mit `--primary`, `--light` oder `--outline`
- `.akro-business-grid` und `.akro-business-card` – drei gleichrangige Sparten

Die Farbwerte stehen zentral am Anfang der CSS-Datei und können dort für die
neue Seite angepasst werden.

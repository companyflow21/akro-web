# brand/akro

Dachmarke AKRO — markenübergreifend verwendbar.

## Bedarf

- Logo positiv (dunkel auf hell)
- Logo negativ (hell auf dunkel) — **fehlt und wird gebraucht**, weil das
  vorhandene SVG schwarz rendert und auf Navy unsichtbar ist
- Wortmarke und Bildmarke getrennt, falls die Marke sie vorsieht
- Favicon und App-Icons

## Bestand

Es existiert genau eine Logodatei: `akro-logo.svg` aus dem Altbestand. Sie
liegt derzeit als Kopie unter
`apps/akro-sicherheit/public/design-preview/` und dient ausschließlich dem
Designexperiment.

Diese Datei ist **kein druckfähiger Vektor-Master** — sie enthält
eingebettete Bitmaps mit rund 1006 Pixel Breite (`docs/DECISIONS.md`
Punkt 20). Ein echter Vektor (AI, EPS oder reines SVG) bleibt zu beschaffen.

## Ergänzt am 13.10.2026

- `akro-wortmarke.svg` – Wortmarke „AKRO“ mit Schild in Elektroblau, für
  hellen Grund. Aus dem Platzhalter von akro-group.de übernommen; die Form
  liegt als Maske vor, deshalb lässt sich die Farbe je Marke neu füllen
  (Beispiele unter `Test-Design/2026-10-13-layouts-look3/logos/`). Weiterhin
  kein druckfähiger Vektor-Master.
- `favicon.svg` – Favicon, ebenfalls aus dem Platzhalter.
- Verwendet von `apps/akro-group` über `@akro/assets/brand/akro/…`.

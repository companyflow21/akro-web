# Test-Design

Ablage für **alle Designtests** des AKRO-Webprojekts. Ab sofort landet hier
jeder Entwurf, jede Variante und jeder Vergleich, der zur Gestaltung gehört —
und zwar ausschließlich hier, nicht verstreut in den Apps.

## Wozu dieser Ordner da ist

Designtests sind Wegwerfarbeit: Sie werden erstellt, angesehen, verworfen oder
übernommen. Wenn sie zwischen den produktiven Seiten liegen, ist nach ein paar
Wochen nicht mehr erkennbar, was echte Website ist und was Versuch war. Dieser
Ordner trennt beides sauber.

## Was hier hineingehört

- Entwürfe für Farben, Typografie, Abstände und Raster
- Alternative Varianten derselben Seite zum direkten Vergleich
- Layoutstudien für einzelne Bausteine (Kopfbereich, Karten, Formulare)
- Bildwelten- und Stilproben je Marke

## Was hier nicht hineingehört

- Produktive Seiten — die liegen unter `apps/<marke>/src/pages/`
- Die verbindlichen Design-Tokens — die liegen in
  `packages/design-system/tokens.css`
- Echte Assets — die liegen unter `packages/assets/`

## Aufbau

Ein Unterordner je Test, benannt nach Datum und Thema, damit die Reihenfolge
ohne Nachdenken lesbar bleibt:

```
Test-Design/
  2026-08-23-startseite-hero/
  2026-08-30-farbwelt-fire-safety/
```

In jedem Unterordner eine kurze `README.md` mit drei Sätzen: Was wurde
getestet, was war das Ergebnis, was wurde daraus übernommen. Ohne diese Notiz
ist ein alter Test nach einem Monat wertlos.

Eigenständige HTML-Dateien lassen sich direkt im Browser öffnen — für einen
schnellen Blick ist kein laufender Entwicklungsserver nötig.

## Hinweis zum bestehenden Designvergleich

Der frühere Designvergleich (Variante A gegen daisyUI-Hybrid) liegt weiterhin
unter `apps/akro-sicherheit/src/pages/design-preview/` und den zugehörigen
`preview/`-Ordnern. Er bleibt auf ausdrückliche Anweisung unverändert an Ort
und Stelle und wird **nicht** hierher verschoben. Dieser Ordner gilt für alle
Tests ab jetzt.

# Schriftdateien

Dieser Ordner ist noch leer. Hier liegen später die selbst gehosteten
Schriftdateien; eingebunden werden sie über `@font-face` in `base.css`.

## Warum hier und nicht im `public/`-Ordner der Apps

Vier Apps teilen dieselben Schriften. Lägen die Dateien in
`apps/<app>/public/`, gäbe es vier Kopien, die einzeln gepflegt werden
müssten. Von hier aus greift jede App über den CSS-Import auf dieselbe
Datei zu; das Build-Werkzeug kopiert sie in die jeweilige Ausgabe.

## Was hier hineingehört

| Datei | Familie | Verwendung |
|---|---|---|
| `archivo-latin-var.woff2` | Archivo, variabel 400–700 | Überschriften und technische Etiketten |
| `source-serif-4-latin-var.woff2` | Source Serif 4, variabel | Fließtext |

Beide stehen unter der SIL Open Font License 1.1: kostenlos, kommerziell
nutzbar, Web und Druck, Selbsthosting ausdrücklich erlaubt. Die
Lizenztexte gehören als `OFL-archivo.txt` und `OFL-source-serif.txt`
danebengelegt — die Lizenz verlangt, dass sie mitgeliefert werden.

Nur der lateinische Zeichensatz, nur das Format WOFF2, jeweils als
variable Schrift. Das ergibt eine Datei je Familie statt einer je
Schnitt.

## Solange der Ordner leer ist

Die Seite fällt auf Georgia für den Fließtext und auf Helvetica
beziehungsweise Segoe UI für die Überschriften zurück. Die Gattung
stimmt damit, die Marke fehlt.

## Regel

Keine Einbindung über fremde Server. Weder Google Fonts noch ein
anderes CDN, auch nicht vorübergehend zum Ausprobieren.

# 2026-08-23 – Seitenaufbau AKRO Sicherheit (Ausgangspunkt)

**Woher:** Kopie des vollständigen, bislang uncommitteten Seitenaufbaus aus
`apps/akro-sicherheit/src` (Stand 23.08.2026) – Seiten, Komponenten, Layout,
Daten, JSON-LD und das Design-System-CSS (`tokens.css`/`base.css`, lokal
kopiert statt über `@akro/design-system` eingebunden). Der Designvergleich
unter `design-preview/` ist bewusst **nicht** mitkopiert, er bleibt weiterhin
ausschließlich in `apps/akro-sicherheit` (siehe Hinweis in
`Test-Design/README.md`).

**Zweck:** Ausgangsbasis, um das Design hier frei weiterzuentwickeln, ohne
`apps/akro-sicherheit` oder den produktiven Projektstand zu beeinflussen.
Dieser Ordner ist eigenständig lauffähig (eigene `package.json` und
`astro.config.mjs`, kein Bezug zum npm-Workspace) – `npm install` und
`npm run dev` laufen unabhängig vom Repository-Root.

**Bekannte Widersprüche, bewusst mitkopiert, werden erst am Ende bereinigt:**

- `src/config.ts` markiert die Entscheidung www gegen non-www weiterhin als
  offen (`[TODO]`).
- Die ursprüngliche `astro.config.mjs` in `apps/akro-sicherheit` setzt
  bereits `site: 'https://www.akro-sicherheit.de'`, obwohl `docs/STATUS.md`
  dokumentiert, dass dieser Wert erst im SEO-/Deployment-Schritt gesetzt
  werden sollte. Hier in der Testumgebung ist `site` nicht gesetzt, weil es
  für reine Designarbeit ohne Bedeutung ist.
- Der gesamte hier kopierte Seitenaufbau ist in `docs/STATUS.md` und
  `docs/DECISIONS.md` noch nicht dokumentiert.

**Ergebnis / Übernahme:** offen – dieser Ordner ist der Startpunkt der
Designarbeit, noch kein abgeschlossener Test.

## Prüfrunde 23.08.2026

Startseite (`/`) in Chrome DevTools auf Desktop (1440×900) und Mobil
(390×844, iPhone-Maß) geprüft, inklusive Konsole, Netzwerk-Requests und
Funktionstest des mobilen Menüs (natives `<details>`/`<summary>`, öffnet
und zeigt alle Navigationspunkte plus „Anfrage stellen").

Zwei technische Mängel gefunden und behoben, beide rein layout-/asset-seitig,
keine inhaltliche Entscheidung:

- `favicon.ico` fehlte (404 in der Konsole). Behoben mit
  `<link rel="icon">` auf `public/akro-logo.svg` in `BaseLayout.astro`,
  mit Kommentar, dass das Logo nur vorläufige Referenz ist
  (siehe `docs/DECISIONS.md` Punkt 20) und kein finales Favicon-Ergebnis.
- Leistungsraster auf der Startseite (7 Karten, 3 Spalten) ließ in der
  letzten Zeile eine leere Kachel stehen. Behoben, indem die letzte Karte
  (wie schon die erste) zwei Spalten breit wird
  (`src/pages/index.astro`, `ServiceCard`-Aufruf).

Nach der Korrektur erneut per Reload auf Desktop und Mobil geprüft: kein
404 mehr, kein leerer Rasterplatz, keine neuen Konsolenfehler.

## Designalternative „Nachtwache" (24.08.2026)

Zweite, eigenständige Variante der Startseite unter `/nachtwache` —
gleiche freigegebene Inhalte wie unter `/`, aber neue Farbwelt,
Typografie und Seitenaufbau. Betrifft ausschließlich neue Dateien, nichts
an Variante A (`/`) wurde verändert:

- `src/styles/tokens-nachtwache.css`, `base-nachtwache.css`,
  `global-nachtwache.css`
- `src/components/HeaderNachtwache.astro`, `FooterNachtwache.astro`
- `src/layouts/BaseLayoutNachtwache.astro`
- `src/pages/nachtwache/index.astro` (noindex, nur Vergleichsentwurf)

**Leitidee:** ein bewachtes Objekt bei Nacht — Suchscheinwerfer,
Absperrband, Kontrollgang. Gleiche Blau/Cyan-Markenfamilie, aber dunkler
und kühler interpretiert, mit einem zweiten Akzent (Amber „Flare"), der
ausschließlich dem Anfrage-CTA vorbehalten ist. Displayschrift:
Bahnschrift (Windows-Systemschrift, Beschilderungscharakter, lizenzfrei).
Signatur-Element: ein diagonales Sperrstreifen-Band als Abschnittstrenner
statt Haarlinie. Größte strukturelle Änderung: Die Leistungsübersicht ist
keine Kachel-, sondern eine Registerliste (Duty-Board-Zeilen mit
Hover-Markierung).

Geprüft auf Desktop (1440×900) und Mobil (390×844): ein echter
horizontaler Overflow durch das lange Wort „SICHERHEITSDIENSTLEISTUNGEN"
in Großschreibung wurde gefunden und behoben (`min-w-0` auf den
Grid-Spalten, `break-words` auf allen Display-Überschriften, kleinere
mobile Schriftgröße für die H1). Hover-Interaktion der Registerzeilen
und Sticky-Header geprüft, keine Konsolenfehler.

Beantwortet nebenbei die in der vorherigen Runde offene Frage warme vs.
kühle Hintergrundfarbe: „Nachtwache" nutzt bewusst die kühle Variante,
zum direkten Vergleich mit dem warmen Sand aus Variante A.

**Ergebnis / Übernahme:** offen — Entwurf zur Bewertung, noch keine
Entscheidung für eine der beiden Varianten.

## Überarbeitung „Nachtwache" — Farbe, Kontrast, Semantik, Bild (24.08.2026)

Vier gezielte Anpassungen an `src/pages/nachtwache/index.astro` und den
zugehörigen Dateien, Inhalt/Aufbau unverändert:

1. **Farbpalette vereinheitlicht:** `sand`→`slate` umbenannt und auf
   Tailwind-Slate-Werte gelegt (`#f1f5f9`/`#e2e8f0`/`#cbd5e1`). Amber
   („flare") ersetzt durch `signal` — ein helles, gesättigtes Electric
   Cyan (`#00e5ff`), ausschließlich für den Anfrage-CTA. Damit bleibt der
   CTA weiterhin optisch abgesetzt vom dekorativen Accent-Cyan
   (`#2fd8ea`) — über Sättigung/Helligkeit statt über einen fremden
   Farbton, sonst wäre der Button nicht mehr vom Dekor unterscheidbar.
2. **Kontraste angehoben:** alle Text-Deckkräften unter 70 % und
   Rahmen-Deckkräften unter 20 % in Header, Footer und der Startseite
   angehoben (u. a. `text-slate/45`→`/80`, `border-slate/10`→`/25`,
   `text-slate/40`→`/75`).
3. **Semantisches Markup:** Leistungstitel in beiden Listen
   (Hero-Einsatzregister und Hauptregister) von `<span>` zu `<h3>`
   geändert; dafür das Label „Einsatzregister" zu `<h2>` aufgewertet,
   damit keine Überschriftenebene übersprungen wird (h1→h2→h3 durchweg
   geprüft). `<main>` war im Layout bereits vorhanden.
4. **Bild-Platzhalter ergänzt:** neues Element über dem
   Einsatzregister im Hero, `aria-hidden`, mit sichtbarem
   „Bildmaterial folgt"-Hinweis und Code-Kommentar zur späteren
   Bildbeschaffung. Register-Liste bewusst nicht ersetzt, sondern
   ergänzt — sie ist echter, funktionierender Inhalt.

Geprüft auf Desktop und Mobil, kein horizontaler Overflow, keine
Konsolenfehler, Heading-Reihenfolge per Accessibility-Snapshot verifiziert.

## Designalternative „Vitrine" für /leistungen (24.08.2026)

Dritte, eigenständige Vergleichsseite: `src/pages/leistungen-vitrine.astro`
(noindex). Glassmorphism-/3D-Verlauf-Ästhetik mit schwebendem
Satelliten-Netzwerk im Hero (7 Leistungen kreisförmig um ein Zentrum,
Positionen berechnet statt von Hand geschätzt), Glass-Cards, Wellen-
Trennern und einem 4-Stufen-Prozess mit animierten SVG-Verbindungen.
Kopf-/Fußbereich bewusst von Variante A wiederverwendet, um nicht für
eine einzelne Seite ein viertes Chrome-Design zu bauen — nur der
Seiteninhalt ist neu.

**Offen gelegte Spannungen zum bisherigen Stand, bewusst trotzdem
umgesetzt, damit sie sich im Vergleich bewerten lassen:**

- Widerspricht der freigegebenen Designvorgabe „keine verspielten oder
  übertriebenen Animationen" (schwebende Partikel, pulsierende Linien,
  Satelliten-Float). Bewusst mit `prefers-reduced-motion`-Abschaltung
  umgesetzt, aber die Grundspannung bleibt bestehen.
- Ist eine dritte, von Variante A und „Nachtwache" unabhängige
  Formensprache — fragmentiert das Gesamtbild, falls sie nicht am Ende
  wieder auf eine der beiden bestehenden Richtungen zurückgeführt wird.
- Referenziert Klassennamen/Struktur aus dem echten Altbestand
  (`akro sicherheit webseite/leistungen.html`, dort tatsächlich mit 6
  statt 7 Satelliten vorhanden) — der Code selbst ist neu geschrieben,
  nicht kopiert, aber die Anlehnung an Altbestand-Optik widerspricht der
  Grundregel, Altbestand nur für Inhalte/Assets/alte URLs zu nutzen,
  nicht für Design.
- Farbwerte als Tailwind-Arbiträrwerte direkt aus dem Auftrag
  übernommen (`#1a6caf`/`#0056D2`/`#007BFF`), nicht in ein Token-System
  überführt — bewusst nur für diese eine Vergleichsseite.

**Technische Korrektur:** `bg-gradient-to-br` existiert in Tailwind 4
nicht mehr, heißt jetzt `bg-linear-to-br` — per Context7 geprüft und
korrekt verwendet.

Geprüft auf Desktop und Mobil: kein Overflow, keine Konsolenfehler,
Heading-Reihenfolge (h1→h2→h3, keine übersprungene Ebene) per
Accessibility-Snapshot verifiziert. Dev-Server mit `astro dev --background`
neu gestartet, weil ein bekannter HMR-Fehler neue Seiten nach langer
Laufzeit nicht automatisch registriert (`Failed to update routes via HMR`).

## Vereinheitlichter Entwurf „Klarsicht" (24.08.2026)

Mischung aus Vitrine und Nachtwache, nach Rückfrage entschieden: Vitrine
bleibt tragende Optik (heller Verlauf, Glass-Cards), aus Nachtwache
übernommen wurden nur zwei Prinzipien — kühlere Farbgebung und ein
einziger, ausschließlich dem Anfrage-CTA vorbehaltener Akzent
(„Signal", `#00d1e6`), getrennt vom dekorativen Verlaufsblau. Der
Satelliten-Hero aus Vitrine wurde ersetzt (generisches, animiertes
Muster, widerspricht „keine verspielten/übertriebenen Animationen") durch
ein ruhiges, statisches Glass-Chip-Register mit vollen Leistungsnamen.
`/nachtwache` und `/leistungen-vitrine` bleiben unverändert als Referenz
liegen, nichts wurde gelöscht oder überschrieben.

Drei durchgängig gestaltete, neue Seiten:
- `/klarsicht` — Startseite
- `/klarsicht/leistungen` — Leistungen-Übersicht
- `/klarsicht/leistungen/objekt-und-werkschutz` — Leistungsdetail

Gemeinsame Basis: `src/styles/tokens-klarsicht.css`/`base-klarsicht.css`/
`global-klarsicht.css`, `src/layouts/BaseLayoutKlarsicht.astro`,
`src/components/klarsicht/GradientPageHeader.astro` (kompakter
Verlauf-Kopfbereich, von Leistungen-Übersicht und Leistungsdetail
gemeinsam genutzt) und `ServiceShowcase.astro` (der Satelliten-Ersatz).
Alle drei Seiten teilen sich dieselben Tokens, dieselbe Glass-Card-Klasse
und denselben Signal-Akzent — garantiert konsistent statt einzeln
nachgebaut.

**Echter Bug gefunden und behoben:** Header.astro/Footer.astro
(bewusst von Variante A weiterverwendet, damit nicht für einen dritten
Entwurf ein viertes Kopf-/Fußbereich-Design entsteht) sind gegen
Variante-A-spezifische Klassen gebaut (`.btn`/`.btn--primary`,
`text-sand`, `bg-ink` …). Ohne Variante A's `tokens.css`/`base.css` im
Import blieben der Anfrage-Button unstyled und der Footer-Text praktisch
unsichtbar (falsche/fehlende Farbvariable). Behoben, indem
`global-klarsicht.css` zuerst Variante A's Tokens/Basis importiert und
danach die eigenen Klarsicht-Tokens — überschreibt gemeinsame Namen für
den Seiteninhalt, lässt Header/Footer aber korrekt gestylt.

Alle drei Seiten auf Desktop (1440×900) und Mobil (390×844) geprüft:
kein horizontaler Overflow, keine Konsolenfehler, Heading-Reihenfolge
(h1→h2→h3, keine übersprungene Ebene) auf Startseite und Leistungsdetail
per Skript verifiziert. Signal-Akzent (`bg-signal`) kommt geprüft
ausschließlich an den drei Primär-CTA-Flächen vor (Hero-Button,
Abschluss-CTA je Seite), nirgends dekorativ.

**Ergebnis / Übernahme:** offen — Entwurf zur Bewertung. Unternehmen und
weitere Seiten (Kontakt, Anfrage, Karriere, Referenzen) sind noch nicht
im Klarsicht-System gestaltet.

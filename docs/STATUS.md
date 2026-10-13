# Status – Ist-Stand

> Geprüft am: 26.08.2026
> Dieser Inhalt beschreibt einen **veränderlichen Ist-Stand** zum genannten
> Prüfdatum, keine feste Aussage für die Zukunft. Bei jeder neuen Prüfung
> aktualisieren.

## Monorepo / Workspaces

- **npm-Workspace-Monorepo ist eingerichtet.** Root-`package.json` enthält
  `"private": true` und `"workspaces": ["apps/*", "packages/*"]`, keine
  Root-Abhängigkeiten.
- npm ist der einzige Paketmanager. `package-lock.json` wurde einmalig vom
  Repository-Root erzeugt.

| Pfad | Workspace-Name |
| --- | --- |
| `apps/akro-sicherheit` | `@akro/sicherheit` |
| `apps/akro-fire-safety` | `@akro/fire-safety` |
| `apps/akro-service` | `@akro/service` |
| `apps/akro-group` | `@akro/group` |
| `packages/design-system` | `@akro/design-system` |
| `packages/assets` | `@akro/assets` |

- `@akro/design-system` ist in `node_modules` als Workspace-Verknüpfung
  (Junction) eingebunden, nicht als Kopie.

## Astro

- Astro-Version laut App-`package.json`: `^7.2.4`
- **Vier getrennt baubare Astro-Apps.** Der frühere Astro-Default-Scaffold
  wurde per `git mv` nach `apps/akro-sicherheit` überführt; die drei übrigen
  Apps wurden neu angelegt.
- Astro-Default-Inhalte sind entfernt: `Welcome.astro`, `Layout.astro`,
  `astro.svg`, `background.svg`, `favicon.svg`, `favicon.ico`.
- Jede App besitzt `astro.config.mjs`, eigenes `tsconfig.json`
  (`extends: astro/tsconfigs/strict`), `src/pages/index.astro`,
  `src/layouts/BaseLayout.astro` und `src/styles/global.css`.
- In `apps/akro-sicherheit/astro.config.mjs` ist `site` auf die www-Variante
  von akro-sicherheit.de gesetzt; der Wert muss mit `SITE_URL` in
  `src/config.ts` übereinstimmen. Beide sind als `[TODO]` markiert, bis die
  Frage www gegen non-www entschieden ist. In den drei übrigen Apps ist
  `site` weiterhin nicht gesetzt.

## Tailwind

- **Tailwind 4 ist lokal eingerichtet.** Je App sind `tailwindcss` und
  `@tailwindcss/vite` als devDependencies installiert; das Vite-Plugin ist in
  `astro.config.mjs` eingebunden.
- CSS-first: kein `tailwind.config.*`, keine content-Globs, keine presets,
  kein `require()`, kein `@astrojs/tailwind`.
- `@astrojs/tailwind`, `cdn.tailwindcss.com` und `fonts.googleapis.com` kommen
  im Repository nicht vor; das gebaute HTML enthält keine externen URLs.

## Designsystem

- `packages/design-system` ist ein privates CSS-Package (Version `0.0.0`) mit
  `tokens.css`, `base.css` und dem Ordner `fonts/`, exportiert über das
  `exports`-Feld.

### Farben

- **Je Marke drei Token mit festen, nicht austauschbaren Aufgaben:**
  `--color-deep` für große dunkle Flächen, `--color-brand` als Schrift- und
  Rahmenfarbe auf hellem Grund, `--color-accent` als Schaltflächenfläche mit
  dunkler Schrift darauf (`--color-on-accent`).
- Umgesetzt für alle vier Marken. Die Dachmarke hat einen neutralen
  Graphitton, damit die drei Sparten die Farbe tragen; das beantwortet das
  frühere `[TODO]` zur Dachmarkenfarbe. Fire & Safety liegt in der
  Ziegelrot-Familie statt in Orange.
- Alle Paare sind gegen `--color-surface` und `--color-on-accent` gerechnet.
  Der niedrigste Wert im Satz liegt bei 5,39:1 und erfüllt WCAG AA.
- **Die Werte sind weiterhin Arbeitsstand.** Die Freigabe der
  Geschäftsführung steht aus, das `[TODO]` in `tokens.css` bleibt bestehen.

### Typografie

- **Neun benannte Größenstufen** ersetzen 23 verstreute Werte, von denen 16
  frei in eckigen Klammern hingeschrieben waren: `text-hero`, `text-titel`,
  `text-abschnitt`, `text-karte`, `text-vorspann`, `text-fliess`,
  `text-klein`, `text-marginalie`, `text-etikett`.
- Jede Stufe trägt Größe, Zeilenhöhe, Laufweite und Gewicht gemeinsam.
  Überschriften beziehen ihre Stufe aus `base.css` und brauchen in den
  Seiten keine Utility-Klasse mehr.
- In Seiten, Komponenten und `base.css` steht **kein einziger freier
  Schriftgrößenwert** mehr. Ausgenommen sind die Seiten unter
  `design-preview/`, die eine eigene, isolierte Vorschauwelt verwenden.

### Schriften

- **Zwei selbst gehostete variable WOFF2-Dateien** unter
  `packages/design-system/fonts/`, jeweils nur lateinischer Zeichensatz:
  `archivo-latin-var.woff2` (34,9 KB) für Überschriften und Etiketten,
  `source-serif-4-latin-var.woff2` (50,8 KB) für den Fließtext.
- Beide unter SIL Open Font License 1.1. Die Lizenztexte liegen als
  `OFL-archivo.txt` und `OFL-source-serif.txt` daneben, wie die Lizenz es
  verlangt.
- Bei Source Serif ist die Achse für optische Größen bewusst weggelassen —
  sie hätte die Datei von 51 auf 122 KB gebracht.
- Einbindung über `@font-face` in `base.css` mit `font-display: swap`.
  **Kein Preload**, weil die Dateien im gemeinsamen Paket liegen und beim
  Bauen einen Namen mit Prüfsumme bekommen.
- Gemessen: Die x-Höhe von Source Serif entspricht mit 0,500 exakt der von
  Segoe UI, der Fließtext wird durch den Wechsel nicht kleiner. Zeilenlänge
  in echten Absätzen 55 bis 71 Zeichen, Median 60.

## Inhalte

- **AKRO Sicherheit ist inhaltlich weitgehend gebaut.** Startseite,
  Leistungsübersicht mit sieben Leistungsseiten aus `src/data/leistungen.ts`,
  Unternehmen, Referenzen, Karriere, Kontakt, Anfrage, Impressum,
  Datenschutz, 404 sowie `sitemap.xml` und `robots.txt`.
- Impressum und Datenschutz tragen ein sichtbares **ENTWURF**-Banner; jede
  fehlende Pflichtangabe ist einzeln als `TODO` im Seitentext markiert. Beide
  sind rechtlich ungeprüft und so nicht veröffentlichungsfähig.
- Unter `design-preview/` liegen vier Seiten mit `noindex, nofollow`, die
  weder in der Navigation noch in der Sitemap auftauchen und zusätzlich über
  `robots.txt` gesperrt sind. Darunter `design-preview/marken` als
  Freigabevorlage, die alle vier Markenwelten am identischen Seitenaufbau
  zeigt.
- **Die Startseiten von Fire & Safety, Service und Group sind unverändert**
  schlichte technische Vorschauseiten mit `noindex, nofollow`.

## Builds

- Am 26.08.2026 geprüft: `npm run build` für alle vier Workspaces läuft
  fehlerfrei durch, Ausgabe jeweils als statisches HTML in `apps/<app>/dist`.
  `@akro/sicherheit` erzeugt 21 Seiten, die drei übrigen je eine.
- Im gebauten HTML steht **kein einziger externer Ladeverweis**. Im Browser
  gegengeprüft: null Netzwerkaufrufe an fremde Server.
- Gewicht der Startseite: 15,3 KB HTML, 25,3 KB CSS, 83,7 KB Schriften —
  zusammen 124 KB.

## Git

- **Remote eingerichtet und Arbeitsstand gesichert.** Geprüft am 26.08.2026:
  `origin` zeigt auf das **private** Repository `companyflow21/akro-web` bei
  GitHub. Lokaler Stand und `origin/master` sind identisch, das
  Arbeitsverzeichnis ist sauber.
- Der Branch heißt `master`.
- Vor dem ersten Push wurde geprüft, dass keine Zugangsdaten mitgehen.
  `node_modules` und `dist` sind ausgeschlossen; das Repository umfasst
  153 Dateien.
- Die Obsidian-Wissensbasis unter `Technik/Brain` liegt in einem eigenen
  privaten Repository `companyflow21/akro-wissensbasis`. Sie gehört nicht zu
  diesem Repository, ist für den Projektkontext aber die wichtigste Quelle.

## Hosting

- **Nicht eingerichtet.** Keine `vercel.json`, keine Vercel-Verknüpfung, kein
  Deployment, keine DNS-Änderung. Vier getrennte Deployments sind als Ziel
  vorgesehen, siehe `docs/DECISIONS.md`.

## Planungsstand

- **Bestandsaufnahme des Altbestands abgeschlossen.** Ergebnis in
  `docs/LEGACY-INVENTORY.md` (sechs alte HTML-Seiten, `sendmail.php`, beide
  Formulare, externe Abhängigkeiten, 64,12 MB Assets mit neun verifizierten
  Duplikatpaaren, zwölf Migrationsrisiken, React-Bestand als nicht produktiv).
- **Vorläufige URL-Migration dokumentiert** in `docs/URL-MIGRATION.md`. Jede
  Zuordnung ist als „noch zu klären" markiert; Search-Console- und Logdaten
  fehlen weiterhin.
- **Seitenarchitektur AKRO Sicherheit V1 abgeschlossen und freigegeben.**
  Ergebnis in `docs/SITE-ARCHITECTURE.md`, Entscheidungen in
  `docs/DECISIONS.md` Punkte 11 bis 17.
- **Für AKRO Fire & Safety und AKRO Service existiert noch keine
  Seitenplanung** — beide sind bisher nur zur Abgrenzung dokumentiert.
- **Bildbriefing erstellt (23.09.2026)** in `docs/BILDBRIEFING.md`: 23
  Motive für Sicherheit, Fire & Safety, Service und Karriere mit Prompts,
  Formaten, Dateinamen und Alt-Texten. Noch kein Bild erzeugt.

## Websitebau

- **Für AKRO Sicherheit weit fortgeschritten.** Es bestehen ein Grundlayout,
  wiederverwendbare Komponenten (`Header`, `Footer`, `Seo`, `SectionHead`,
  `ServiceCard`, `CtaBand`, `Breadcrumb`), strukturierte Leistungsdaten und
  die Erzeugung strukturierter Daten in `src/lib/jsonld.ts`.
- Jede Seite hat einen eigenen Title, eine eigene Description und einen
  selbstreferenzierenden Canonical.
- **Aus dem Altbestand wurde weiterhin kein einziges Asset übernommen.** Die
  Rasterbilder des Altbestands sind unbrauchbar, siehe Abschnitt Assets.
- **Für Fire & Safety, Service und Group ist noch nichts gebaut.**

## Assets

- **Zentrale Assetstruktur angelegt** unter `packages/assets` als Workspace
  `@akro/assets`, neben `@akro/design-system`. Aufbau: `brand/` (fünf
  Markenordner), `shared/` (sieben Bereiche), sowie die vier Bildwelten
  `security/`, `fire-safety/`, `service/`, `group/`.
- **Alle Ordner sind inhaltlich leer.** Jeder Ordner enthält eine `README.md`,
  die Bedarf, Bestand, Regeln und Blockaden beschreibt — auch damit Git die
  Struktur überhaupt versioniert.
- Es wurde **kein einziges Bild übernommen, kopiert oder erzeugt**. Die
  Logokopie unter `apps/akro-sicherheit/public/design-preview/` gehört
  ausschließlich zum Designexperiment.
- **Die Rasterbilder des Altbestands sind unwiederbringlich zerstört.** Am
  25.08.2026 an den Dateiköpfen geprüft: Statt der PNG-Signatur steht das
  Unicode-Ersatzzeichen U+FFFD — dieser Schaden entsteht, wenn eine
  Binärdatei als Text eingelesen und zurückgeschrieben wird. Betroffen sind
  32 von 33 Rasterbildern; nur `objekkt.png` ist heil. Beide ZIP-Archive
  enthalten denselben Schaden, es gibt lokal keine Rettungsquelle. Die
  SVG-Dateien und `AGB_AKRO_Sicherheit-1.pdf` sind unversehrt. Ein Neubezug
  wäre nur über die noch laufende Seite akro-sicherheit.de oder eine
  Neuproduktion möglich.
- **Schriften sind beschafft und liegen im Designsystem**, nicht hier. Siehe
  Abschnitt Designsystem.
- `packages/assets/package.json` ist angelegt, weil `packages/*` als
  npm-Workspace-Muster konfiguriert ist. **`npm install` wurde nicht
  ausgeführt**, `package-lock.json` kennt den neuen Workspace daher noch
  nicht.
- Die zugehörigen Entscheidungen stehen in `docs/DECISIONS.md` Punkte 18
  bis 25.

## Nächste Phase

Die Designgrundlage ist erledigt. Was jetzt vorn liegt, hängt überwiegend
nicht an der Technik, sondern an Angaben und Entscheidungen des
Auftraggebers.

1. **Farbfreigabe** — die Geschäftsführung bestätigt das Spartenmodell und
   die konkreten Werte oder gleicht sie an Logo und Drucksachen an. Vorlage
   dafür ist die Seite `/design-preview/marken`.
2. **Inhaltsprüfung** — Referenzfreigaben, Originalzertifikate,
   Unternehmensdaten für das Impressum sowie Rechtstexte klären; Inhaltsquelle
   für die KRITIS-Leistungsseite bestimmen.
3. **Bildmaterial** — beschaffen oder produzieren lassen. Blockiert das
   Fertigstellen der Seiten und ist wegen des zerstörten Altbestands
   unumgänglich.
4. **Abschließende URL- und SEO-Entscheidungen** — endgültige KRITIS-URL,
   kanonische Domainvariante, Umgang mit lokalen Landingpages sowie die
   belastbare Redirect-Liste auf Basis von Search-Console- und Logdaten.
5. **Hosting** — Tarif prüfen und zwischen Vercel und Cloudflare Pages
   entscheiden.

## Bekannte Hinweise

- Beim `npm install` meldet npm, dass das `postinstall`-Skript von
  `esbuild@0.28.2` nicht freigegeben ist (`npm approve-scripts`). Die vier
  Builds laufen trotzdem fehlerfrei; der Punkt ist offen, aber derzeit ohne
  Auswirkung.
- Ein erster `npm install`-Versuch scheiterte mit
  `spawnSync ... esbuild.exe UNKNOWN`; der Wiederholungsversuch war
  erfolgreich. Ursache siehe Virenscanner-Hinweis in den historischen
  Planungsständen.
- Git zeigt Dateinamen mit Umlauten standardmäßig verschlüsselt an. Wer
  Dateilisten vergleicht, sollte `git -c core.quotepath=false` verwenden —
  sonst sehen Dateien wie `Widersprüche.md` fälschlich fehlend aus.
- Unter `01-projekte/experimente/gemini-vorschlag` liegt eine lokale Vorschau
  eines externen Gestaltungsvorschlags. Sie gehört **nicht** zu diesem
  Repository und ist nicht versioniert.

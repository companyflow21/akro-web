# Status – Ist-Stand

> Geprüft am: 22.08.2026
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
- In keinem `astro.config.mjs` ist `site` gesetzt — bewusst erst im
  SEO-/Deployment-Schritt.

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
  `tokens.css` und `base.css`, exportiert über das `exports`-Feld.
- Inhalt ist bewusst **neutral und technisch**: Platzhalterwerte mit `[TODO]`,
  nur System-Font-Fallbacks. Keine echten Markenfarben, keine Fontdateien,
  kein `fonts/`-Ordner.

## Inhalte

- Alle vier Startseiten sind schlichte technische Vorschauseiten mit
  `noindex, nofollow`. Keine Unternehmensangaben, Leistungsversprechen oder
  SEO-Texte.

## Builds

- Am 22.08.2026 geprüft: `npm run build` für alle vier Workspaces
  (`@akro/sicherheit`, `@akro/fire-safety`, `@akro/service`, `@akro/group`)
  läuft fehlerfrei durch, Ausgabe jeweils als statisches HTML in
  `apps/<app>/dist`.

## Git

- Geprüft mit `git remote -v` am 22.08.2026: **kein Remote eingetragen**.
- Die Änderungen dieses Schritts sind **noch nicht committet**.

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

## Websitebau

- **Noch nicht begonnen.** Es existieren weiterhin ausschließlich die vier
  technischen Vorschauseiten mit `noindex, nofollow`. Es wurden keine
  Inhalte, Assets oder URLs aus dem Altbestand übernommen und keine
  Seitenvorlagen erstellt.

## Assets

- **Zentrale Assetstruktur angelegt** unter `packages/assets` als Workspace
  `@akro/assets`, neben `@akro/design-system`. Aufbau: `brand/` (fünf
  Markenordner), `shared/` (sieben Bereiche), sowie die vier Bildwelten
  `security/`, `fire-safety/`, `service/`, `group/`.
- **Alle Ordner sind inhaltlich leer.** Jeder Ordner enthält eine `README.md`,
  die Bedarf, Bestand, Regeln und Blockaden beschreibt — auch damit Git die
  Struktur überhaupt versioniert.
- Es wurde **kein einziges Asset übernommen, kopiert oder erzeugt**. Die
  Logokopie unter `apps/akro-sicherheit/public/design-preview/` gehört
  ausschließlich zum Designexperiment.
- `packages/assets/package.json` ist angelegt, weil `packages/*` als
  npm-Workspace-Muster konfiguriert ist. **`npm install` wurde nicht
  ausgeführt**, `package-lock.json` kennt den neuen Workspace daher noch
  nicht.
- Die zugehörigen Entscheidungen stehen in `docs/DECISIONS.md` Punkte 18
  bis 25.

## Nächste Phase

1. **Designgrundlage** — echte Markenfarben, Typografie und Design-Tokens
   festlegen und die `[TODO]`-Platzhalter in `packages/design-system`
   ersetzen; lizenzrechtlich nutzbare, lokal hostbare Schriften beschaffen.
2. **Inhaltsprüfung** — Referenzfreigaben, Originalzertifikate,
   Unternehmensdaten für das Impressum sowie Rechtstexte klären; Inhaltsquelle
   für die KRITIS-Leistungsseite bestimmen.
3. **Abschließende URL- und SEO-Entscheidungen** — endgültige KRITIS-URL,
   kanonische Domainvariante, Umgang mit lokalen Landingpages sowie die
   belastbare Redirect-Liste auf Basis von Search-Console- und Logdaten.

## Bekannte Hinweise

- Beim `npm install` meldet npm, dass das `postinstall`-Skript von
  `esbuild@0.28.2` nicht freigegeben ist (`npm approve-scripts`). Die vier
  Builds laufen trotzdem fehlerfrei; der Punkt ist offen, aber derzeit ohne
  Auswirkung.
- Ein erster `npm install`-Versuch scheiterte mit
  `spawnSync ... esbuild.exe UNKNOWN`; der Wiederholungsversuch war
  erfolgreich. Ursache siehe Virenscanner-Hinweis in den historischen
  Planungsständen.

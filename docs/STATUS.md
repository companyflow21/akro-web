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

## Bekannte Hinweise

- Beim `npm install` meldet npm, dass das `postinstall`-Skript von
  `esbuild@0.28.2` nicht freigegeben ist (`npm approve-scripts`). Die vier
  Builds laufen trotzdem fehlerfrei; der Punkt ist offen, aber derzeit ohne
  Auswirkung.
- Ein erster `npm install`-Versuch scheiterte mit
  `spawnSync ... esbuild.exe UNKNOWN`; der Wiederholungsversuch war
  erfolgreich. Ursache siehe Virenscanner-Hinweis in den historischen
  Planungsständen.

# akro-web

npm-Workspace-Monorepo der AKRO-Webseiten. Verbindliche Regeln stehen in
`CLAUDE.md`, der aktuelle Umsetzungsstand in `docs/STATUS.md`.

## Struktur

| Pfad | Workspace | Inhalt |
| --- | --- | --- |
| `apps/akro-sicherheit` | `@akro/sicherheit` | Astro-App |
| `apps/akro-fire-safety` | `@akro/fire-safety` | Astro-App |
| `apps/akro-service` | `@akro/service` | Astro-App |
| `apps/akro-group` | `@akro/group` | Astro-App |
| `packages/design-system` | `@akro/design-system` | gemeinsame CSS-Tokens und Basis-Styles |

Alle Apps sind derzeit technische Vorschauseiten ohne Inhalte und auf
`noindex, nofollow` gesetzt.

## Befehle

Abhaengigkeiten werden ausschliesslich vom Repository-Root installiert:

```
npm install
```

Einzelne App starten oder bauen:

```
npm run dev -w @akro/sicherheit
npm run build -w @akro/sicherheit
```

## Styling

Tailwind 4 wird lokal ueber `@tailwindcss/vite` eingebunden — kein CDN, kein
`tailwind.config.*`. Jede App importiert in `src/styles/global.css` Tailwind
sowie `tokens.css` und `base.css` aus `@akro/design-system`.

## Hosting

Vorgesehen sind vier getrennte Deployments, je eines pro App. Hosting, Domains
und DNS sind in diesem Stand bewusst noch nicht eingerichtet.

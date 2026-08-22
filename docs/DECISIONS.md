# Decisions – Zielentscheidungen

> Diese Punkte sind **bereits freigegebene Zielentscheidungen** für die
> künftige Architektur und Arbeitsweise. Sie beschreiben, wohin das Projekt
> gehen soll — **nicht**, was bereits technisch umgesetzt ist. Den aktuellen
> Umsetzungsstand dokumentiert `docs/STATUS.md`.

1. **Astro-Monorepo mit vier Apps.** Ziel ist ein schlankes Astro-Monorepo
   mit vier getrennt baubaren Apps (je eine pro Marke/Domain).
2. **npm Workspaces.** npm Workspaces ist die vorgesehene Workspace-Lösung
   für das Monorepo; npm, pnpm und Yarn werden nicht gemischt.
3. **Lokales Tailwind.** Tailwind wird künftig lokal im Astro-Build
   eingebunden (nicht per CDN) und dient für Layout, Responsive Design,
   Abstände und Standardzustände.
4. **Eigenes AKRO-Designsystem.** Ein gemeinsames Designsystem mit eigenen
   AKRO-Design-Tokens (Farben, Typografie, Radien, Schatten, Bewegungen) und
   gezieltem Custom CSS für markante Markenelemente ist vorgesehen.
5. **Reihenfolge: AKRO Sicherheit zuerst.** AKRO Sicherheit wird als erste
   Marke vollständig umgesetzt, bevor die übrigen Marken folgen.
6. **Freigabepflicht für Agenten.** Agenten dürfen Änderungen vorbereiten
   (recherchieren, Entwürfe erstellen, Inhalte prüfen, Änderungen
   vorschlagen), aber nichts ohne ausdrückliche menschliche Freigabe
   veröffentlichen, deployen oder an geschäftlichen, rechtlichen bzw.
   personenbezogenen Daten verändern.
7. **Domains und E-Mail bei Strato.** Domains und E-Mail-Postfächer bleiben
   bei Strato.
8. **Vercel als bevorzugte Option.** Vercel ist die bevorzugte Option, aber
   noch nicht technisch eingerichtet.
9. **Cloudflare Pages als Alternative.** Cloudflare Pages bleibt als
   Alternative offen.
10. **Freigabepflicht für DNS/Hosting/Deployment.** Änderungen an DNS,
    Hosting und Deployment erfordern in jedem Fall eine ausdrückliche
    Freigabe, bevor sie ausgeführt werden.

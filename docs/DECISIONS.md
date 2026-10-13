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
11. **Markenabgrenzung der V1-Leistungen.** Die Zuordnung der Kernleistungen
    zu den drei Geschäftsbereichen ist bestätigt: AKRO Sicherheit führt
    Objekt- und Werkschutz, Revier- und Kontrolldienst,
    Veranstaltungssicherheit, Baustellenbewachung, Empfangs- und
    Pfortendienst, Personenschutz sowie den Schutz kritischer Infrastrukturen
    (KRITIS). AKRO Fire & Safety führt Sicherungsposten, Brandwachen, Gas- und
    Atmosphärenüberwachung, Höhensicherung/PSAgA sowie HSE- und
    SGU-Dienstleistungen. AKRO Service führt Reinigung, Logistik, Hostessen
    und Servicepersonal sowie weitere personalintensive Leistungen als Werk-
    oder Dienstvertrag, ausdrücklich ohne Arbeitnehmerüberlassung. Leistungen
    werden nicht zwischen den Marken vermischt; Berührungspunkte werden
    verlinkt statt dupliziert.
12. **V1-Leistungsumfang ist erweiterbar.** Die genannten Leistungen sind der
    bestätigte Startumfang und keine dauerhafte Begrenzung. Neue Leistungen
    müssen später ohne Umbau der Grundarchitektur ergänzt werden können;
    bestehende URLs bleiben dabei unverändert.
13. **Seitenarchitektur AKRO Sicherheit V1 freigegeben.** Die in
    `docs/SITE-ARCHITECTURE.md` beschriebene Architektur ist freigegeben:
    Startseite, Leistungsübersicht, sieben Leistungsseiten, Unternehmen,
    Referenzen, Karriere, Kontakt, Anfrage sowie Impressum und Datenschutz
    als eigenständige, nur im Footer verlinkte Seiten. Einzelne URLs bleiben
    vorläufig, siehe Punkt 17.
14. **Hauptnavigation.** Die Startseite wird über das Logo erreicht und
    erhält keinen eigenen Navigationspunkt. Die Hauptnavigation besteht aus
    Leistungen, Unternehmen, Referenzen, Karriere und Kontakt sowie einem
    hervorgehobenen CTA „Anfrage stellen".
15. **`/404` ist eine erforderliche technische V1-Seite.** Sie erhält keinen
    Navigationspunkt, keinen Eintrag in der XML-Sitemap und wird auf
    `noindex` gesetzt.
16. **`/branchen` gehört nicht zum ersten Launch.** Die Seite bleibt als
    spätere Erweiterung vorgesehen und darf erst mit eigenständigen,
    belastbaren Inhalten entstehen.
17. **AGB bleiben in V1 ein PDF.** Vorgesehen ist nur die Migration des
    bestehenden PDF. Für V1 wird keine zusätzliche HTML-Seite `/agb`
    festgelegt.

## Assetentscheidungen

Grundlage ist die abgeschlossene Bestandsaufnahme in
`docs/LEGACY-INVENTORY.md`. Sie ergab, dass der gesamte Rasterbestand des
Altbestands auf Byte-Ebene zerstört ist und nur die SVG-Dateien nutzbar sind.

18. **Der Altbestand bleibt unverändertes Archiv.** Der Ordner
    `Technik\akro sicherheit webseite` wird nicht bereinigt, nicht umbenannt
    und nicht gelöscht. Er dient ausschließlich als Nachweis des früheren
    Zustands und als Fundort für Inhalte, alte URLs und intakte SVG-Dateien.
19. **Beschädigte Dateien werden nicht übernommen.** Die zerstörten PNG-,
    JPG- und PDF-Dateien werden nicht in das neue Projekt migriert — auch
    nicht als Platzhalter. Ersatz wird beschafft oder neu produziert.
20. **`akro-logo.svg` ist nur vorläufige Referenz.** Die Datei dient als
    Web- und Designreferenz, ausdrücklich **nicht** als druckfähiger
    Vektor-Master. Sie enthält eingebettete Bitmaps mit rund 1006 Pixel
    Breite. Ein echter Vektor-Master bleibt zu beschaffen.
21. **Keine Bild-KI für Logos, Zertifikate, Kundenlogos und offizielle
    Zeichen.** Diese Assets werden ausschließlich aus Originalquellen
    übernommen oder von einem Gestalter erstellt. Eine KI-Nachbildung wäre
    eine Fälschung fremder Marken und Nachweise.
22. **Bild-KI ist für fachliche Website-Fotografie zulässig.** Sie darf
    später gezielt für Leistungs-, Stimmungs- und Hintergrundmotive
    eingesetzt werden. Nicht zulässig bleibt sie für alles, was einen realen
    Sachverhalt belegt — echte Mitarbeitende, echte Objekte, echte Einsätze,
    echte Referenzen.
23. **Vier getrennte Bildwelten.** AKRO Sicherheit, Fire & Safety, Service
    und Group erhalten jeweils eine eigene Bildwelt. Motive werden nicht
    zwischen den Marken geteilt; die Trennung entspricht der Markenabgrenzung
    aus Punkt 11.
24. **Gemeinsame Assets werden zentral verwaltet.** Unternehmens-,
    Recruiting-, Zertifikats- und Referenzassets liegen einmalig an zentraler
    Stelle und werden von allen Marken verwendet, nicht je App kopiert.
25. **Zentraler Ablageort ist `packages/assets`.** Die Assets liegen als
    eigener Workspace `@akro/assets` neben `@akro/design-system` und folgen
    damit der bestehenden Monorepo-Architektur aus Punkt 1 und 2. Jede App
    greift über den Paketnamen darauf zu; eine Kopie je App ist unzulässig.

## Gestaltung und Reihenfolge (13.10.2026)

Vom Auftraggeber am 13.10.2026 freigegeben:

26. **Look 3 ist die gemeinsame Gestaltung aller vier Websites.** Gemeint ist
    der Elektroblau-Stil des Platzhalters von akro-group.de. Der helle,
    papierartige Entwurf (`tokens.css`, `base.css`) ist verworfen und bleibt
    nur bis zum Umbau von AKRO Sicherheit bestehen.
27. **Jede Marke hat eine eigene Farbwelt:** Group Elektroblau, Sicherheit
    Nachtblau und Cyan, Fire & Safety Signalrot und Glut, Service Waldgrün und
    Mint. Die Werte stehen in `packages/design-system/marken.css`; alle Text-
    und Flächenpaare erreichen mindestens WCAG AA.
28. **Jede Website bekommt ein eigenes Layout,** damit die vier Seiten nicht
    wie Kopien wirken: Group als Portal, Sicherheit als Leitstelle, Fire &
    Safety als Industrie-Signal, Service als Kachelraster. Vorlage:
    `Test-Design/2026-10-13-layouts-look3`. Gemeinsam bleiben Schrift
    (Archivo), Grundstil und die Form des Logos.
29. **Das Logo erscheint je Marke in deren Farbe.** Form der Wortmarke
    unverändert, nur der Farbverlauf wechselt.
30. **Reihenfolge geändert: AKRO Group zuerst.** AKRO tritt als
    Multiservice-Anbieter auf; die gemeinsame Seite entsteht vor den drei
    Sparten. Ersetzt die Reihenfolge in `CLAUDE.md` §4.
31. **Zertifizierungen bestätigt.** DIN 77200-1, SCC**, DIN EN ISO 9001,
    DIN ISO 45001 und DIN EN ISO 14001 sind laut Auftraggeber gültig und mit
    den Originalen abgeglichen und dürfen öffentlich dargestellt werden.
32. **Mobile Kontaktleiste.** Auf dem Handy steht am unteren Rand dauerhaft
    eine Leiste mit „Anrufen“ und einer Anfrage- beziehungsweise
    E-Mail-Schaltfläche. Damit ist der offene Punkt zur mobilen Darstellung
    von Telefonnummer und Anfrage entschieden.
33. **Layout per Komponenten-CSS.** Die markenspezifischen Layouts werden mit
    Astro-Komponentenstilen gebaut; Tailwind bleibt eingebunden und liefert
    die Grundformatierung. Gemeinsames liegt in `marken.css`.

## Offene beziehungsweise blockierte Entscheidungen

Diese Punkte sind bewusst noch **nicht** entschieden und blockieren die
jeweils genannten Arbeiten:

- **`/zertifizierungen` ist für V1 vorgesehen, aber blockiert.** Die Seite
  darf erst entstehen, wenn die Originalzertifikate geprüft, Gültigkeit und
  Geltungsbereich bestätigt und die öffentliche Darstellung freigegeben
  wurden. Sie kommt vorerst nicht in die Hauptnavigation.
- **Die URL der KRITIS-Leistung bleibt vorläufig.** Als Arbeitsvorschlag gilt
  `/leistungen/kritis-schutz`. Die endgültige URL wird vor dem Websitebau
  nach einer separaten SEO- und Begriffsprüfung beschlossen.
- ~~Mobile Darstellung von Telefonnummer und Anfrage~~ — entschieden in
  Punkt 32.
- **Endgültiger PDF-Pfad der AGB** und eventuell notwendige Redirects sind
  offen.
- Die vollständige Liste weiterer offener Punkte (Referenzfreigaben,
  Unternehmensdaten, Rechtstexte, Formulararchitektur, Design-Tokens) steht
  in `docs/SITE-ARCHITECTURE.md` §9.

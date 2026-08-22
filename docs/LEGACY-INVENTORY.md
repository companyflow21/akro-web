# Altbestand — geprüfte Bestandsaufnahme

> Geprüft am: 22.08.2026
> Quelle: `Technik\akro sicherheit webseite`
> Rein lesende Analyse. Aus dem Altbestand wurde bisher **nichts** in dieses
> Repository übernommen — weder Assets noch Inhalte noch URLs.
> Einordnung des Altbestands siehe `CLAUDE.md` §5.

## 1. Die sechs alten HTML-Seiten

Statische Seiten ohne Build-Prozess.

| Datei | KB | Title | Viewport | Canonical | H1 |
| --- | --- | --- | --- | --- | --- |
| `index.html` | 49,7 | AKRO Sicherheit und Service — Zertifizierter Sicherheitsdienst in Bonn | ja | nein | Schützen, was wirklich zählt |
| `leistungen.html` | 72,3 | Leistungen — AKRO Sicherheit und Service Bonn | nein | nein | Unsere Leistungen |
| `unternehmen.html` | 80,7 | Über uns — AKRO Sicherheit und Service Bonn – Ihr Sicherheitsdienst | nein | nein | Über AKRO Sicherheit |
| `referenzen.html` | 50,0 | Referenzen — AKRO Sicherheit und Service Bonn | nein | nein | Referenzen |
| `kontakt.html` | 75,9 | Kontakt — AKRO Sicherheit und Service Bonn | nein | nein | Direkt und verbindlich anfragen |
| `anfrage.html` | 63,5 | **fehlt vollständig** | nein | nein | Professionelle Sicherheit auf Anfrage |

Befunde:

- **Meta-Description** ist auf allen sechs Seiten vorhanden.
- **Charset** ist überall korrekt als UTF-8 deklariert.
- **Genau eine H1 je Seite** — entspricht bereits `CLAUDE.md` §9.
- **Viewport fehlt auf fünf von sechs Seiten** — Hauptursache der Mobilprobleme.
- **Kein Canonical auf keiner Seite.** Keine `sitemap.xml`, keine `robots.txt`.
- **`anfrage.html` hat keinen Title.**

### Interne Navigation

Auf allen Seiten identisch und flach: `index.html`, `leistungen.html`,
`unternehmen.html`, `referenzen.html`, `kontakt.html`, `anfrage.html`.

Zusätzlich zwei Ankerlinks auf Rechtstexte: `kontakt.html#impressum` und
`kontakt.html#legal-accordions`. Impressum und Datenschutz sind damit
Aufklapp-Elemente innerhalb von `kontakt.html` und keine eigenen Seiten.

Ein Downloadlink zeigt auf `src/assets/AGB_AKRO_Sicherheit-1.pdf`.

Links sind uneinheitlich: teils relativ (`kontakt.html`), teils absolut
(`/kontakt.html`).

## 2. sendmail.php

| Merkmal | Wert |
| --- | --- |
| Empfänger | `marketing@akro-sicherheit.de` |
| Absender | `no-reply@akro-sicherheit.de` |
| Reply-To | E-Mail-Adresse aus dem Formular |
| Versandweg | PHP `mail()` |
| Honeypot | Feld `website`; bei Inhalt stiller Abbruch |
| Pflichtfelder | `name`, gültige `email`, `nachricht` oder `description` |
| DSGVO-Prüfung | Feld `dsgvo` muss exakt den Wert `akzeptiert` haben |
| Header-Schutz | Zeilenumbrüche werden aus dem Betreff entfernt |
| Protokollierung | **IP-Adresse und User-Agent** werden in den Mailtext geschrieben |

Das Skript verarbeitet bereits beide Formulartypen (Fallback `telefon`/`phone`,
eigener Block für Angebotsanfragen), obwohl `anfrage.html` es nicht ansteuert.

## 3. Vorhandene Formulare

### kontakt.html an sendmail.php

Felder: `name`, `email`, `telefon`, `betreff`, `nachricht`, `dsgvo`,
`website` (Honeypot).

Zusätzlich die funktionslosen Formspree-Restfelder `_captcha`, `_subject`
und `_template`, die von `sendmail.php` nicht ausgewertet werden.

### anfrage.html an externen Formspree-Endpunkt

`action="https://formspree.io/f/xpzgwqjz"` — sendet an einen Drittanbieter,
**nicht** an `sendmail.php`.

Felder: `service`, `description`, `location`, `start_date`, `end_date`,
`working_hours`, `staff_count`, `company`, `additional_info`, `name`, `email`,
`phone`, `privacy_accepted`, `website` (Honeypot).

**Folge:** Es gibt derzeit keine einheitliche Lead-Erfassung — zwei Formulare
mit zwei verschiedenen Zielen.

## 4. Externe Abhängigkeiten

Alle laut `CLAUDE.md` §3 unzulässig.

| Ressource | Zweck | Vorkommen |
| --- | --- | --- |
| `cdn.tailwindcss.com` | Tailwind per CDN | 6x |
| `cdnjs.cloudflare.com` | Font Awesome 6.0.0 | 6x |
| `unpkg.com` | Framer Motion 10.16.4 | 1x |
| `fonts.googleapis.com` | Google Fonts | 1x |
| `formspree.io` | Formularversand | 1x |

Weitere externe Verweise ohne Ressourcenladung: `www.instagram.com`,
`de.linkedin.com`, `www.strato.de`, `www.w3.org` (SVG-Namespaces).

**Schriften:** Montserrat, Poppins und Inter — ausschließlich extern geladen.
Es existiert **keine einzige lokale Fontdatei** (`.woff`, `.woff2`, `.ttf`,
`.otf`).

## 5. Assets und Duplikate

59 Mediendateien, **64,12 MB** gesamt, durchgehend unoptimiert.

| Format | Anzahl | MB |
| --- | --- | --- |
| `.png` | 25 | 51,96 |
| `.jpg` | 8 | 11,15 |
| `.svg` | 24 | 0,46 |
| `.pdf` | 1 | 0,32 |
| `.zip` | 1 | 0,23 |

Kein WebP, kein AVIF.

Größte Einzeldateien: `event.png` (4,42 MB), `serv.jpg` (4,37 MB),
`kritis (2).png` (4,31 MB), `obb.png` (4,19 MB), `service.png` (4,13 MB),
`gewerbe.png` (4,12 MB), `industrie.png` (3,85 MB), `art_cologne.jpg` (3,82 MB).

### Byte-identische Duplikate (per SHA256 verifiziert)

Neun Paare, rund 13 MB vermeidbar. Jeweils Original plus `(1)`-Kopie:
`din77200.png`, `ISO 9001.png`, `ISo14001.png`, `ISO45001.png`, `scc.png`,
`unfallversicherung_vbg.png`, `ihk.jpg`, `koelnmesse_logo_claim.svg`.

Sonderfall: `service.svg` und `vertrieb.svg` sind inhaltlich identisch bei
unterschiedlichem Dateinamen.

### Problematische Dateinamen

17 Dateien verstoßen gegen `CLAUDE.md` §3 (Umlaute, Leerzeichen, Klammern):
`geschäftsführer.svg`, `maßgeschneiderte konzepte.svg`,
`repräsentatives peersonal.svg` (enthält zusätzlich einen Tippfehler),
`zuverläßigkeit.svg`, `ISO 9001.png`, `ISO 9001.svg`, `kritis (2).png`,
`Foto 19.08.25, 23 17 39 (2).jpg` sowie sämtliche `(1)`-Kopien.

## 6. React-Abbruchbestand — nicht produktiv

Der Ordner `src/` enthält einen **abgebrochenen React-Rewrite**. Er ist
**kein produktiver Code** und wird nicht migriert (siehe `CLAUDE.md` §5).

- 17 Dateien: `App.tsx`, `main.tsx`, `Header.tsx`, `Footer.tsx`,
  `homeContent.ts`, `index.css` sowie Seitenkomponenten `HomePage`,
  `ServicesPage`, `AboutPage`, `ContactPage`, `PortfolioPage`, `BlogPage`,
  `PricingPage`, `CareersPage`, `SupportPage`, `NotFoundPage`.
- **Keine package.json, keine Build-Konfiguration** — nicht lauffähig.
- `NotFoundPage.tsx` ist 0 Bytes, daneben liegt eine gefüllte
  `NotFoundPage(1).tsx` — ungelöster Dateikonflikt.
- Enthält Seitentypen, die nie live waren: Preise, Blog, Karriere, Support,
  Portfolio.

**Einziger Nutzen:** Der Ordner enthält die Originalassets (Logos,
Zertifikatsgrafiken, Fotos, AGB-PDF). Nur als Assetquelle verwendbar, der
Code selbst wird verworfen.

## 7. Technische Migrationsrisiken

1. **Externe Ressourcen** (Tailwind-CDN, Font Awesome, Framer Motion, Google
   Fonts) sind DSGVO-relevant und laut `CLAUDE.md` §3 verboten.
2. **Formspree** in `anfrage.html` ist ausdrücklich unzulässig und muss
   entfallen.
3. **PHP `mail()` läuft auf Vercel nicht.** Ohne SPF/DKIM ist die
   Zustellbarkeit ohnehin fraglich. Zielarchitektur laut `CLAUDE.md` §14
   bewusst noch offen.
4. **Zwei getrennte Formularziele** — keine einheitliche Lead-Erfassung.
5. **Viewport fehlt auf fünf von sechs Seiten.**
6. **`anfrage.html` ohne Title** — SEO-kritisch.
7. **Keine Canonicals, keine Sitemap, keine robots.txt.**
8. **64 MB Assets** mit Einzelbildern über 4 MB — LCP ohne Konvertierung und
   Komprimierung nicht haltbar.
9. **Dateinamen mit Umlauten und Leerzeichen** brechen auf Linux-Servern.
10. **Rechtstexte als Aufklapp-Element** statt eigener Seiten.
11. **Gemischte relative und absolute interne Links.**
12. **React-Rewrite unbrauchbar**, enthält aber die einzigen Originalassets.

## 8. Korrekturen zu Technik\CLAUDE.md §7 „Kritische Altlasten"

Zwei dort gelistete Punkte halten der Prüfung **nicht** stand. Die Datei
`Technik\CLAUDE.md` liegt außerhalb dieses Projektordners und wurde bewusst
nicht geändert; die Befunde stehen hier zur späteren Übernahme.

| Aussage in `Technik\CLAUDE.md` §7 | Prüfergebnis |
| --- | --- |
| `tel:+15551234567` — US-Platzhalternummer im Altcode | **Nicht gefunden.** In allen sechs HTML-Seiten ist die einzige Telefonnummer `+49 228 18456685` (`tel:+4922818456685`). Diese stimmt mit `CLAUDE.md` §3 überein. |
| Pascalstraße 10, 10587 Berlin — fremde Adresse im Altcode | **Kein Fehler.** Die Adresse steht im Datenschutztext als Anschrift des **Hosters STRATO** und ist dort sachlich korrekt. Sie ist nicht als AKRO-Unternehmensadresse ausgewiesen. |

Unverändert bestätigt bleiben:

- Impressum unvollständig: „Vertreten durch: Geschäftsführung" ohne Namen,
  „USt-IdNr.: auf Anfrage", kein Registergericht, keine HRB-Nummer.
- Impressum und Datenschutz liegen als Aufklapp-Element in `kontakt.html` und
  müssen eigenständige, im Footer verlinkte Seiten werden.

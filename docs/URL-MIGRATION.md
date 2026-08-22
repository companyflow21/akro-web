# URL-Migration AKRO Sicherheit

> Stand: 22.08.2026
> **Vorläufiger Arbeitsstand — keine Zuordnung ist bestätigt.**
> Grundlage ist ausschließlich die lesende Bestandsaufnahme der lokalen
> Dateien (siehe `docs/LEGACY-INVENTORY.md`). Es wurden keine URLs, Rankings
> oder Search-Console-Daten erfunden oder angenommen.

## Wichtige Einschränkung

`CLAUDE.md` §12 Schritt 1 verlangt, **alle tatsächlich erreichbaren URLs** zu
erfassen, bevor umgestellt wird. Diese Tabelle beruht ausschließlich auf den
lokal vorliegenden Dateien und ist daher **nachweislich unvollständig**.
Historische Seiten, Kampagnen-Landingpages, Parameter-URLs oder alte
Verzeichnisstrukturen sind hier nicht enthalten, weil dafür keine Datenquelle
vorliegt.

Die Spalte „neu" leitet sich aus der Regel in `CLAUDE.md` §9 ab (lesbare,
kleingeschriebene, extensionlose URLs). Diese Zielstruktur ist eine
**Ableitung aus dem Regelwerk, keine getroffene Entscheidung** — solange sie
nicht bestätigt ist, ändert sich jede bestehende URL und benötigt eine
301-Weiterleitung.

## Vorläufige Mapping-Tabelle

| alt | neu (Vorschlag) | Status | Anmerkung |
| --- | --- | --- | --- |
| `/index.html` | `/` | noch zu klären | |
| `/leistungen.html` | `/leistungen` | noch zu klären | Aufteilung in Einzelseiten nicht entschieden |
| `/unternehmen.html` | `/unternehmen` | noch zu klären | |
| `/referenzen.html` | `/referenzen` | noch zu klären | Freigabe der Kundennamen erforderlich |
| `/kontakt.html` | `/kontakt` | noch zu klären | |
| `/anfrage.html` | `/anfrage` | noch zu klären | |
| `/kontakt.html#impressum` | `/impressum` | noch zu klären | Anker wird eigene Seite; Anker vererben keine eigenständigen Rankings, Weiterleitung optional |
| `/kontakt.html#legal-accordions` | `/datenschutz` | noch zu klären | Zuordnung des Ankers zum Datenschutztext ist unbestätigt |
| `/sendmail.php` | entfällt | noch zu klären | Kein Ersatz-Endpunkt festgelegt, siehe `CLAUDE.md` §14 |
| `/src/assets/AGB_AKRO_Sicherheit-1.pdf` | noch zu klären | noch zu klären | Zielpfad für Dokumente nicht festgelegt |

## Offene Punkte

### Search-Console-URLs

- Vollständige Liste der indexierten URLs aus der Google Search Console:
  **noch zu klären**
- Seiten mit eingehenden Links (Bericht „Verweisende Domains"): **noch zu klären**
- Seiten mit Impressionen und Klicks der letzten 12 Monate: **noch zu klären**

### Serverlog-URLs

- Auswertung der STRATO-Zugriffslogs auf tatsächlich abgerufene Pfade:
  **noch zu klären**
- Häufige 404-Aufrufe als Hinweis auf frühere URLs: **noch zu klären**

### www- und non-www-Variante

- Welche Variante ist die kanonische — `akro-sicherheit.de` oder
  `www.akro-sicherheit.de`? **noch zu klären**
- Ist aktuell eine Weiterleitung zwischen beiden Varianten aktiv?
  **noch zu klären**
- Verhalten bei `http` gegenüber `https`: **noch zu klären**

### Alte PDF- und Dokument-URLs

- `AGB_AKRO_Sicherheit-1.pdf`: bisheriger öffentlicher Pfad und künftiger
  Zielpfad **noch zu klären**
- Weitere öffentlich verlinkte Dokumente außerhalb des lokalen Bestands:
  **noch zu klären**

### Spätere 301-Weiterleitungen

- Endgültige Redirect-Liste kann erst erstellt werden, wenn Search-Console-
  und Logdaten vorliegen: **noch zu klären**
- Technischer Ort der Weiterleitungen (Hosting-Konfiguration) hängt von der
  Hosting-Entscheidung ab, siehe `docs/DECISIONS.md`: **noch zu klären**
- Prüfung der Redirects im Vorschau-Deployment vor der DNS-Umstellung ist
  laut `CLAUDE.md` §12 verpflichtend.
- MX-Einträge der STRATO-Postfächer bleiben unangetastet (`CLAUDE.md` §15).

## Nächster Schritt

Vor jeder weiteren Arbeit an der URL-Struktur müssen die Search-Console- und
Logdaten beschafft werden. Ohne sie ist keine belastbare Redirect-Liste
möglich, und eine Umstellung würde gegen `CLAUDE.md` §12 verstoßen.

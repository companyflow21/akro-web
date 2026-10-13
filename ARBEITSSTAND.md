# Arbeitsstand — 05.09.2026

Kurznotiz zum Wiedereinstieg. Der ausführliche Stand des Gesamtprojekts steht
in `docs/STATUS.md` und in der Obsidian-Wissensbasis; hier steht nur, wo die
Arbeit an Platzhalter und Präsentation unterbrochen wurde.

## Fertig und eingecheckt

**Platzhalter** — `platzhalter/`
Drei Seiten, uploadfertig, keine offene Angabe mehr. Details und
Upload-Anleitung in `platzhalter/LIESMICH.md`.

**Präsentation** — `praesentation/`
15 Folien als HTML-Vorlage plus gebautes PDF. Details in
`praesentation/LIESMICH.md`, Anschreiben in `anschreiben-wellnest.md`.

## Als Nächstes

Die **Präsentation wird überarbeitet.** Der Auftraggeber hat den ersten
Platzhalterentwurf verworfen und die Richtung korrigiert; dieselbe Kritik
trifft die Präsentation noch:

- **Sicherheit ist zu dominant.** Die Folien 5 bis 7 behandeln AKRO Sicherheit
  auf drei Seiten, Fire & Safety und Service bekommen je eine. Das Verhältnis
  muss ausgeglichen werden — AKRO tritt als Multiservice-Anbieter auf.
- **Zu viel Inhalt.** Vollständige Leistungslisten sind für den Zweck zu
  detailliert.
- **Gestaltung.** Der helle, papierartige Entwurf wurde beim Platzhalter durch
  eine Fassung ersetzt, die zum Elektroblau des Logos passt und den drei
  Sparten gleich viel Fläche gibt. Die Präsentation folgt noch dem alten
  Entwurf und sollte angeglichen werden.

Für die Gestaltung sind die unter `.agents/skills/` installierten Skills
heranzuziehen, insbesondere `emil-design-eng`, dazu `frontend-design`.

## Was noch vom Auftraggeber fehlt

Für die Präsentation, sichtbar auf den Folien markiert:

| Angabe | Folie |
|---|---|
| Objekt, Zeitraum, Art des Einsatzes und Ansprechpartner bei Wellnest | 13 |
| Bewacherregister-ID | 07 |
| Deckungssumme der Betriebshaftpflicht (Versicherer: Allianz) | 11 |
| Saubere Logodateien für Evonik, REWE und Kötter | 12 |
| Eigene Fotos, abzulegen unter `praesentation/bilder/` | 13 und Titel |

Freizugeben ist außerdem, ob „über 5 Jahre am Markt", „über 8 Jahre
Berufserfahrung" und „3 Stunden bis Einsatzbeginn" verwendet werden dürfen.
Sie stehen in `AGENTS.md`, gelten nach `CLAUDE.md` §13 aber als
bestätigungspflichtig und sind deshalb bisher nirgends verwendet.

## Offene Punkte außerhalb dieser Arbeit

- **SSL für `akro-group.de`** ist im Strato-Kundenbereich noch nicht
  freigeschaltet. Ohne Zertifikat zeigt Chrome „Nicht sicher".
- **`akro-sicherheit.de` und `akro-service.de`** hängen an den Nameservern von
  landingsite.ai, nicht bei Strato. Dort liegt eine unveröffentlichte
  Baukastenseite; deshalb liefern beide Domains einen 404. Die MX-Einträge
  zeigen korrekt auf `smtpin.rzone.de`, die E-Mail läuft.
- **`akro-fire-safety.de` existiert nicht** — NXDOMAIN, keine Nameserver.
  Nicht registriert oder abgelaufen.
- **Alle Rasterbilder des Altbestands sind zerstört.** Jede JPG und PNG unter
  `akro sicherheit webseite/src/` beginnt mit `EF BF BD` statt einem gültigen
  Bild-Header. Nur die SVG-Dateien sind intakt.

## Hinweis zum Repository

Der Commit liegt lokal auf `master` und ist **noch nicht gepusht**. Das
Uploadpaket `platzhalter/akro-platzhalter.zip` wird nicht versioniert; es
entsteht neu über `platzhalter/paketieren.ps1` und muss nach jeder Änderung
an den HTML- oder CSS-Dateien neu erzeugt werden.

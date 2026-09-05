# Platzhalterseite für akro-group.de

**Status: fertig zum Hochladen.** Drei statische HTML-Seiten im AKRO-Design,
rund 230 KB. Keine Datenbank, kein Build, keine Ressource von einem fremden
Server. Keine offene Stelle mehr.

## Warum akro-group.de und nicht akro-sicherheit.de

`akro-sicherheit.de` und `akro-service.de` hängen an den Nameservern von
**landingsite.ai**, nicht mehr bei Strato. Dort liegt eine unveröffentlichte
Baukastenseite, der Server antwortet mit `X-Landingsite-Status: not-published`
und einem 404. Ohne Zugang bei landingsite.ai lässt sich daran nichts ändern.

`akro-group.de` dagegen liegt vollständig bei Strato (Nameserver
`docks11.rzone.de` und `shades11.rzone.de`), der Webspace ist aktiv und
liefert derzeit die STRATO-Parkseite aus. Ein Upload dorthin ist **kein
DNS-Eingriff** und kann die MX-Einträge der E-Mail-Postfächer nicht gefährden.

`akro-fire-safety.de` existiert derzeit nicht — die Domain hat keine
Nameserver (NXDOMAIN). Das ist getrennt zu klären.

---

## Schritt 1: SSL freischalten

Auf `akro-group.de` ist **kein HTTPS aktiv**. Ohne Zertifikat zeigt Chrome dem
Besucher „Nicht sicher" — genau der Eindruck, den die Seite verhindern soll.

Im Strato-Kundenbereich unter der Domain die **SSL-Verschlüsselung
(Let's Encrypt)** aktivieren. Die Ausstellung dauert 10 bis 20 Minuten und
kann parallel zum Upload laufen.

## Schritt 2: Hochladen

1. Strato-Kundenbereich öffnen, zum **Dateimanager** der Domain
   `akro-group.de` wechseln
2. In das Wurzelverzeichnis der Domain gehen (meist `/` oder `htdocs`)
3. Die vorhandene `index.html` der STRATO-Parkseite **löschen oder umbenennen**
4. Entweder `akro-platzhalter.zip` hochladen und dort entpacken, oder einzeln:
   `index.html`, `impressum.html`, `datenschutz.html` und den kompletten
   Ordner `assets/` mit allen Unterordnern

Die Ordnerstruktur muss erhalten bleiben, sonst finden die Seiten weder das
CSS noch die Schriften.

## Schritt 3: Prüfen

- `https://akro-group.de` aufrufen — Schloss-Symbol vorhanden, Seite lädt
- Beide Fußzeilenlinks öffnen: Impressum und Datenschutz
- Auf dem Handy die Telefonnummer antippen und prüfen, dass sie richtig wählt

---

## Was bewusst nicht auf der Seite steht

**Berufshaftpflichtversicherung.** Die Angabe zu Versicherer, Deckungssumme
und räumlichem Geltungsbereich folgt aus § 2 DL-InfoV und ist erst fällig,
wenn Leistungen tatsächlich angeboten werden. Ein Platzhalter ohne
Leistungsseiten, ohne Formular und ohne Preise löst diese Pflicht nicht aus.
**Beim Livegang der richtigen Website muss der Block wieder hinein** — die
Angaben liegen dann vor: Allianz, dazu Deckungssumme und Geltungsbereich aus
dem Versicherungsschein.

**Datenschutzbeauftragter.** Es ist keiner benannt, deshalb wird auch keiner
genannt. Sollte später einer bestellt werden, verlangt Art. 13 DSGVO die
Nennung in der Datenschutzerklärung — dann kommt der Abschnitt zurück.

## Angaben, die recherchiert und nicht aus deinen Unterlagen sind

Sie stehen ohne Markierung auf der Seite, weil sie belastbar sind. Prüfe sie
bei Gelegenheit trotzdem gegen deine Papiere:

| Angabe | Quelle | Gegenprüfen an |
|---|---|---|
| Amtsgericht Saarbrücken als Registergericht | Das Saarland führt sein Handelsregister zentral dort | Registerauszug |
| Landkreis Saarlouis, Amt für öffentliche Sicherheit und Ordnung, Kaiser-Wilhelm-Straße 4 | Zuständig ist die Kreisordnungsbehörde am Betriebssitz | Erlaubnisbescheid § 34a |
| Unabhängiges Datenschutzzentrum Saarland, Fritz-Dobisch-Straße 12, 66111 Saarbrücken | Landesbehörde für Verantwortliche mit Sitz im Saarland | — |
| Logfile-Fristen: sieben Tage IP, sechs Wochen Protokolle | Datenschutzdokumentation von Strato | Auftragsverarbeitungsvertrag |

Von dir bestätigt und eingetragen: **HRB 112267**, **DE463797867**.

Beide Rechtstexte sind Entwürfe und gehören vor dem Livegang der richtigen
Website anwaltlich geprüft. Für einen Platzhalter mit vollständigen
Pflichtangaben nach § 5 DDG ist das Risiko gering.

---

## Was nach dem Livegang zu tun bleibt

- **`noindex` entfernen**, sobald die richtige Website steht. Die Zeile
  `<meta name="robots" content="noindex, nofollow" />` steht in allen drei
  Dateien. Solange die Seite ein Platzhalter ist, soll sie **nicht** als
  dauerhaftes Google-Ergebnis für die Firma festgeschrieben werden.
- **`akro-sicherheit.de` zurückholen.** Prüfen, ob die Domain im
  Strato-Vertrag geführt wird. Falls ja, lassen sich die Nameserver dort auf
  `docks11.rzone.de` und `shades11.rzone.de` zurückstellen — dieselben, die
  `akro-group.de` nutzt. Vorher kontrollieren, dass die Strato-Zone
  `smtpin.rzone.de` als MX führt, sonst fällt die Unternehmens-E-Mail aus.
  Die Umstellung braucht bis zu 48 Stunden.
- **`akro-fire-safety.de` klären** — nicht registriert oder abgelaufen.

---

## Technisches

Farben und Schriften stammen aus `packages/design-system/tokens.css`. Die
Dachmarke `group` bleibt unbunt — dort steht ausdrücklich, sie sei „bewusst
unbunt, damit die drei Sparten die Farbe tragen". Genau so ist die Seite
gebaut: Graphit als Grund, und darunter drei randlose Flächen in den
`--color-deep`-Werten der Sparten, jede exakt gleich breit und gleich hoch.
Die Gleichrangigkeit der drei Bereiche ist damit nicht behauptet, sondern
gebaut — Sicherheit hat keinen Vorrang vor Fire & Safety oder Service.

Der Aufbau beim Laden ist gestaffelt (40 bis 340 ms Versatz, kräftiges
ease-out). Schaltflächen geben beim Druck mit `scale(0.97)` Rückmeldung,
Hover-Effekte sind hinter `@media (hover: hover)` gekapselt, damit sie auf
Touchgeräten nicht fälschlich auslösen. Bei `prefers-reduced-motion` bleibt
die Einblendung, die Bewegung entfällt.

Die Wortmarke `assets/img/akro-wortmarke.svg` wurde aus dem alten
`akro-logo.svg` herausgelöst: dort steckte „AKRO" als eingebettetes
1006 × 259-Bild mit separater Maske, zusammen mit dem Zusatz „SECURITY" als
Vektorpfaden. Die neue Datei enthält nur noch „AKRO" mit Transparenz und
funktioniert dadurch auf hellem wie auf dunklem Grund.

Alle Rasterbilder des Altbestands (`akro sicherheit webseite/src/*.jpg|png`)
sind unbrauchbar — jede Datei beginnt mit `EF BF BD` statt mit einem gültigen
Bild-Header. Sie wurden irgendwann durch eine Textkonvertierung geschickt.
Intakt sind nur die SVG-Dateien.

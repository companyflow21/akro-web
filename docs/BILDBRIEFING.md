# Bildbriefing – AKRO Sicherheit, Fire & Safety, Service

> Stand: 23.09.2026 · Arbeitsentwurf, noch nicht freigegeben.
> Grundlage: `docs/DECISIONS.md` Punkte 21 bis 23 und die Bedarfslisten in
> `packages/assets/<bildwelt>/README.md`.

Dieses Dokument enthält alle Motive, die für die drei Spartenseiten mit
Bild-KI erzeugt werden dürfen, jeweils mit fertigem Prompt zum Kopieren,
Dateinamen, Format und Alt-Text. Logos, Zertifikate, Kundenlogos und
offizielle Zeichen stehen bewusst **nicht** darin (Punkt 21).

## 1. Ablauf

1. Prompt kopieren und im Bildwerkzeug einfügen. Das Format (zum Beispiel
   3:2 quer) im Werkzeug einstellen.
2. Dasselbe Motiv in zwei bis drei Werkzeugen erzeugen, das beste Ergebnis
   wählen.
3. Das Bild anhand der Prüfliste in Abschnitt 4 kontrollieren. Bei
   Fire & Safety zusätzlich durch eine fachkundige Person (PSA, Abläufe).
4. Datei unter dem angegebenen Namen in den genannten Ordner legen und in
   der `QUELLEN.md` des Ordners eintragen (Abschnitt 5).
5. Einbindung in die Seiten (Formate, Zuschnitte, Ladeverhalten) übernimmt
   der Websitebau.

Die Prompts sind englisch, weil Bildmodelle damit zuverlässiger arbeiten.
Jeder Prompt ist vollständig: Stil und Ausschlüsse der Bildwelt sind bereits
enthalten.

## 2. Werkzeuge und Nutzungsrechte

- Die Prompts funktionieren in jedem gängigen Bildwerkzeug, zum Beispiel
  ChatGPT, Google Gemini, Midjourney oder Adobe Firefly.
- Vor der Nutzung die Lizenzbedingungen des jeweiligen Werkzeugs für
  **kommerzielle Nutzung** prüfen und das Ergebnis in `QUELLEN.md`
  festhalten. Adobe Firefly wirbt ausdrücklich mit kommerzieller
  Nutzbarkeit.
- **Kennzeichnung:** Seit August 2026 gelten die Transparenzpflichten der
  EU-KI-Verordnung (Art. 50). Ob sie für allgemeine Symbolbilder greifen,
  ist rechtlich zu prüfen. Empfehlung unabhängig davon: dezenter Hinweis
  „Symbolbild (KI-generiert)“ am Bild oder im Impressum. Das kostet nichts
  und schützt die Glaubwürdigkeit.

## 3. Harte Regeln für jedes Motiv

- **Keine Schrift, keine Logos**, keine Namensschilder und keine
  Aufdrucke auf Kleidung, Fahrzeugen, Schildern oder Kartons.
- **Keine erkennbaren Gesichter.** Personen von hinten, von der Seite, aus
  Distanz oder unscharf. KI-Personen dürfen nicht als echte AKRO-Mitarbeitende
  erscheinen (Punkt 22).
- **Keine realen, erkennbaren Orte**, Anlagen oder Firmengelände.
- **AKRO Sicherheit:** keine Waffen, keine Polizei- oder Militäroptik,
  kein Blaulicht. Dienstkleidung darf nach der Bewachungsverordnung nicht
  mit Uniformen von Polizei oder Bundeswehr verwechselbar sein.
- **AKRO Fire & Safety:** Schutzausrüstung muss fachlich korrekt sein.
  Falsch angelegte PSA ist in dieser Branche ein Glaubwürdigkeitsschaden.
- **AKRO Service:** AKRO arbeitet als eigenes Team mit eigener Teamleitung
  und eigenem Arbeitsmittel. Keine Szenen, in denen AKRO-Kräfte in einen
  fremden Betriebsablauf eingegliedert wirken oder Weisungen des Kunden
  entgegennehmen (`CLAUDE.md` §13).
- Keine Bilder aus dem Altbestand verwenden (Punkt 19).

## 4. Prüfliste je Bild

- [ ] Hände, Finger, Gesichter und Körperproportionen natürlich
- [ ] Kein Schriftzeichen-Brei auf Schildern, Kleidung, Displays
- [ ] Keine Logos oder Markenzeichen, auch nicht angedeutet
- [ ] Ausrüstung und Ablauf fachlich plausibel (Fire & Safety: Fachprüfung)
- [ ] Stimmung und Farbwelt passen zur Bildwelt der Marke
- [ ] Hauptmotiv liegt in der mittleren Bildfläche (siehe Abschnitt 5)
- [ ] Lizenz des Werkzeugs erlaubt kommerzielle Nutzung

## 5. Technische Vorgaben

| Einsatz | Format | Mindestgröße |
| --- | --- | --- |
| Hero (Startseite) | 16:9 quer | 2400 × 1350 px |
| Leistungsbild | 3:2 quer | 2000 × 1333 px |
| Karriere | 3:2 quer | 2000 × 1333 px |

- Immer in der **höchsten verfügbaren Auflösung** erzeugen und als PNG oder
  JPEG in bester Qualität speichern. Die Umwandlung in WebP/AVIF und die
  Zuschnitte erledigt der Websitebau.
- Das Hauptmotiv in den mittleren 60 % der Fläche halten, damit das Bild
  auch als 4:3- oder quadratische Karte funktioniert.
- Hero-Motive lassen das linke Drittel ruhig, damit dort Text stehen kann.
- OG-Bilder (Vorschaubild beim Teilen) werden nicht eigens erzeugt, sondern
  später aus dem Hero-Motiv plus echtem Logo zusammengesetzt.
- Dateinamen: klein, Bindestriche, keine Umlaute, laufende Nummer am Ende.
  Mehrere gute Varianten als `-01`, `-02` ablegen.
- Ablage: `packages/assets/<ordner>/`. Zu jedem Ordner gehört eine
  `QUELLEN.md` mit dieser Tabelle:

```text
| Datei | Werkzeug | Datum | Motiv-Nr. | geprüft von | freigegeben von |
```

## 6. AKRO Sicherheit — Bildwelt Blau/Cyan

Blaue Stunde oder Nacht, kühle Blau- und Cyantöne, tiefes Marineblau in den
Schatten. Ruhig, kontrolliert, vertrauenswürdig — keine Dramatik.
Ordner: `packages/assets/security/`

### S-00 · Hero Startseite · 16:9

Datei: `hero-werksgelaende-nacht-01`
Alt-Text: „Sicherheitskraft bei einem abendlichen Kontrollgang entlang des
Zauns eines Werksgeländes“

```text
Wide shot of a modern industrial site in Germany at blue hour. A security officer in plain dark navy workwear, seen from behind, walks along a lit perimeter fence holding a flashlight. Factory halls with warm window light in the background, wet asphalt reflecting the lights. The left third of the image is calm and dark, suitable for text. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, natural available light, cool blue and cyan color grade with deep navy shadows, calm, controlled and trustworthy mood, no dramatization. Avoid: any text, letters, numbers or logos on clothing, vehicles, signs or buildings; badges with writing; weapons; police or military look; blue emergency lights; recognizable faces; famous landmarks; watermark.
```

### S-01 · Objekt- und Werkschutz · 3:2

Datei: `objekt-und-werkschutz-01`
Alt-Text: „Zufahrtskontrolle an der Pforte eines Werksgeländes in der
Abenddämmerung“

```text
Factory entrance in Germany at dusk: a gatehouse with a lit window, a lowered barrier and an unmarked delivery truck waiting. A security officer in plain dark navy workwear stands beside the truck cab, seen from the side at a distance, checking delivery papers on a clipboard. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, natural available light, cool blue and cyan color grade with deep navy shadows, calm, controlled and trustworthy mood, no dramatization. Avoid: any text, letters, numbers or logos on clothing, vehicles, signs or buildings; badges with writing; weapons; police or military look; blue emergency lights; recognizable faces; famous landmarks; watermark.
```

### S-02 · Revier- und Kontrolldienst · 3:2

Datei: `revier-und-kontrolldienst-01`
Alt-Text: „Nächtlicher Kontrollgang: Sicherheitskraft prüft die verschlossene
Tür eines Gewerbegebäudes“

```text
Night patrol at a commercial building in Germany: a security officer in plain dark navy workwear, seen from behind, checks a locked steel door with a flashlight. An unmarked dark car without any markings or light bar is parked in the background. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, natural available light, cool blue and cyan color grade with deep navy shadows, calm, controlled and trustworthy mood, no dramatization. Avoid: any text, letters, numbers or logos on clothing, vehicles, signs or buildings; badges with writing; weapons; police or military look; blue emergency lights; recognizable faces; famous landmarks; watermark.
```

### S-03 · Veranstaltungssicherheit · 3:2

Datei: `veranstaltungssicherheit-01`
Alt-Text: „Geordneter Einlass mit Absperrgittern bei einer
Abendveranstaltung“

```text
Entrance area of an outdoor event in Germany in the early evening: metal crowd barriers form an orderly entry lane, visitors queue out of focus, two staff members in plain dark vests without any lettering guide the flow. String lights and a soft stage glow in the background. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, natural available light, cool blue and cyan color grade with deep navy shadows, calm, controlled and trustworthy mood, no dramatization. Avoid: any text, letters, numbers or logos on clothing, vehicles, signs or buildings; badges with writing; weapons; police or military look; blue emergency lights; recognizable faces; famous landmarks; watermark.
```

### S-04 · Baustellenbewachung · 3:2

Datei: `baustellenbewachung-01`
Alt-Text: „Gesicherte Baustelle bei Nacht mit Sicherheitskraft am Bauzaun“

```text
Construction site in Germany at night after working hours: construction fence, a tower crane silhouette against the dark blue sky, parked excavators and site containers. A security officer in plain dark navy workwear checks the fence gate with a flashlight, seen from behind at a distance. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, natural available light, cool blue and cyan color grade with deep navy shadows, calm, controlled and trustworthy mood, no dramatization. Avoid: any text, letters, numbers or logos on clothing, vehicles, signs or buildings; badges with writing; weapons; police or military look; blue emergency lights; recognizable faces; famous landmarks; watermark.
```

### S-05 · Empfangs- und Pfortendienst · 3:2

Datei: `empfangs-und-pfortendienst-01`
Alt-Text: „Besetzter Empfang in einem Bürogebäude bei der Übergabe eines
Besucherausweises“

Hinweis: einziges Tageslichtmotiv dieser Bildwelt, daher mit angepasstem
Stil.

```text
Bright modern corporate lobby in Germany in daylight: a reception desk staffed by an employee in a dark navy blazer, seen from the side, handing a blank visitor card to a visitor whose face is turned away. Glass facade in the background. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, soft daylight, cool blue-grey color grade with navy accents, calm and professional mood. Avoid: any text, letters, numbers or logos on clothing, cards, signs or walls; badges with writing; weapons; police or military look; recognizable faces; watermark.
```

### S-06 · Personenschutz · 3:2

Datei: `personenschutz-01`
Alt-Text: „Diskrete Begleitung einer Person auf dem Weg zum Fahrzeug“

```text
Early evening in front of a modern office building in Germany: a businessperson walks towards a dark unmarked sedan, accompanied at a respectful distance by a plainclothes protection officer in a dark suit. Both seen from far behind, understated and discreet, no sunglasses, no earpiece, nothing dramatic. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, natural available light, cool blue and cyan color grade with deep navy shadows, calm, controlled and trustworthy mood, no dramatization. Avoid: any text, letters, numbers or logos on clothing, vehicles, signs or buildings; weapons; police or military look; bodyguard clichés; blue emergency lights; recognizable faces; famous landmarks; watermark.
```

### S-07 · Schutz kritischer Infrastrukturen · 3:2

Datei: `kritis-schutz-01`
Alt-Text: „Zugangskontrolle an einer technischen Anlage mit erhöhter
Zutrittssicherung“

```text
Generic electrical substation in Germany behind a high security fence, an access gate with a card reader and a camera mast, dusk. A security officer in plain dark navy workwear checks the gate, seen from behind at a distance. Not a real or recognizable facility. Style: realistic editorial documentary photography, full-frame camera, 35mm lens, natural available light, cool blue and cyan color grade with deep navy shadows, calm, controlled and trustworthy mood, no dramatization. Avoid: any text, letters, numbers or logos on clothing, vehicles, signs or buildings; badges with writing; weapons; police or military look; blue emergency lights; recognizable faces; watermark.
```

## 7. AKRO Fire & Safety — Bildwelt Ziegelrot/Orange

Industrieanlagen bei bedecktem Tageslicht oder Dämmerung, warme Töne mit
Ziegelrot und Signalorange, ernst und präzise. Jede Person trägt korrekte
PSA. Ordner: `packages/assets/fire-safety/`

**Rückfrage vor F-01:** Ist mit „Sicherungsposten“ der Posten an Behältern
und engen Räumen in der Industrie gemeint (so in
`packages/assets/fire-safety/README.md`) oder der Sicherungsposten im
Gleisbau? Der Prompt F-01 geht von der Industrie aus.

### F-00 · Hero Startseite · 16:9

Datei: `hero-industrieanlage-01`
Alt-Text: „Zwei Fachkräfte in Schutzausrüstung auf einem Laufsteg einer
Industrieanlage“

```text
Wide shot of a chemical plant in Germany with pipe racks and steel structures at dusk. Two workers walk along an elevated steel walkway, one with a portable gas detector clipped to the chest. The left third of the frame is calm, suitable for text. All workers wear correct PPE: hard hat with chin strap, safety glasses, flame-retardant coverall with reflective stripes, gloves, safety boots. Style: realistic industrial documentary photography, full-frame camera, 35mm lens, overcast light, warm color grade with brick red and safety orange accents and deep red-brown shadows, serious and precise mood. Avoid: any text, letters or logos; recognizable faces; incorrect or missing PPE; open flames without safety measures; explosions or dramatic smoke; real company names; watermark.
```

### F-01 · Sicherungsposten · 3:2

Datei: `sicherungsposten-01`
Alt-Text: „Sicherungsposten an einem geöffneten Behältereinstieg mit
Rettungsdreibock“

```text
A safety attendant stands at the open manhole of an industrial vessel in a German plant, holding a radio and watching the entry. A rescue tripod with winch is set up above the manhole. All workers wear correct PPE: hard hat with chin strap, safety glasses, flame-retardant coverall with reflective stripes, gloves, safety boots. Style: realistic industrial documentary photography, full-frame camera, 35mm lens, overcast daylight, warm color grade with brick red and safety orange accents and deep red-brown shadows, serious and precise mood. Avoid: any text, letters or logos; recognizable faces; incorrect or missing PPE; open flames; explosions or dramatic smoke; real company names; watermark.
```

### F-02 · Brandwachen · 3:2

Datei: `brandwache-01`
Alt-Text: „Brandwache mit Feuerlöscher sichert Schweißarbeiten an einer
Stahlkonstruktion“

```text
Hot work on a steel structure in an industrial plant: a welder in full welding protection creates sparks, a fire blanket covers nearby equipment. A few meters away a fire watch stands ready with a fire extinguisher, attentively watching the work area. The fire watch wears correct PPE: hard hat with chin strap, safety glasses, flame-retardant coverall with reflective stripes, gloves, safety boots. Style: realistic industrial documentary photography, full-frame camera, 35mm lens, overcast daylight, warm color grade with brick red and safety orange accents and deep red-brown shadows, serious and precise mood. Avoid: any text, letters or logos; recognizable faces; incorrect or missing PPE; uncontrolled fire; explosions or dramatic smoke; real company names; watermark.
```

### F-03 · Gas- und Atmosphärenüberwachung · 3:2

Datei: `gasmessung-01`
Alt-Text: „Freimessung mit einem Mehrgasmessgerät vor dem Einstieg in einen
Behälter“

```text
Close-up at an industrial vessel: a worker's gloved hand holds a portable multi-gas detector, its sampling hose lowered into an open manhole before entry. The device display is not readable. The worker wears correct PPE: hard hat with chin strap, safety glasses, flame-retardant coverall with reflective stripes, gloves. Style: realistic industrial documentary photography, full-frame camera, 50mm lens, overcast daylight, shallow depth of field, warm color grade with brick red and safety orange accents and deep red-brown shadows, serious and precise mood. Avoid: any text, letters, numbers or logos, including on the device; recognizable faces; incorrect PPE; open flames; real brand names; watermark.
```

### F-04 · Höhensicherung / PSAgA · 3:2

Datei: `hoehensicherung-psaga-01`
Alt-Text: „Arbeiten in der Höhe mit Auffanggurt und Verbindungsmittel am
Anschlagpunkt“

```text
A worker on a steel structure at height in an industrial plant, wearing a correctly fitted full-body harness with a double energy-absorbing lanyard attached to a solid anchor point above shoulder height, hard hat with chin strap, safety glasses, gloves. Low angle, overcast sky and plant structures in the background. Style: realistic industrial documentary photography, full-frame camera, 35mm lens, overcast daylight, warm color grade with brick red and safety orange accents and deep red-brown shadows, serious and precise mood. Avoid: any text, letters or logos; recognizable faces; loose or incorrectly attached harness; unsecured worker; dramatic stunts; real company names; watermark.
```

### F-05 · HSE- und SGU-Dienstleistungen · 3:2

Datei: `hse-unterweisung-01`
Alt-Text: „Sicherheitsunterweisung vor Schichtbeginn auf einem
Industriegelände“

```text
Safety briefing on an industrial site before a shift: a small group of workers stands in a half circle while a safety specialist with a tablet explains. Seen from behind the group, faces not identifiable. All workers wear correct PPE: hard hat with chin strap, safety glasses, flame-retardant coverall with reflective stripes, gloves, safety boots. Style: realistic industrial documentary photography, full-frame camera, 35mm lens, morning overcast light, warm color grade with brick red and safety orange accents and deep red-brown shadows, serious and precise mood. Avoid: any text, letters or logos, including on the tablet screen; recognizable faces; incorrect or missing PPE; real company names; watermark.
```

### F-06 · Turnaround- und Stillstandsbegleitung · 3:2

Datei: `turnaround-stillstand-01`
Alt-Text: „Anlagenstillstand mit Gerüsten und Kran an einer Kolonne“

```text
Plant shutdown and turnaround in a German refinery: scaffolding around a tall distillation column, a mobile crane, many workers small in the frame, an organised material staging area. Wide shot. All workers wear correct PPE: hard hats, safety glasses, flame-retardant coveralls with reflective stripes. Style: realistic industrial documentary photography, full-frame camera, 24mm lens, overcast daylight, warm color grade with brick red and safety orange accents and deep red-brown shadows, serious and precise mood. Avoid: any text, letters or logos; recognizable faces; open flames; explosions or dramatic smoke; real company names; watermark.
```

## 8. AKRO Service — Bildwelt Grün

Hell, freundlich, sauber, weiches Tageslicht, frische Töne mit Petrol- und
Grünakzenten. Arbeitskleidung schlicht petrolgrün ohne Aufdruck. Immer als
eigenes Team mit eigener Teamleitung. Ordner: `packages/assets/service/`

**Hinweis:** Für AKRO Service gibt es noch keine Seitenplanung. Die
Motivliste folgt `packages/assets/service/README.md` und ist vorläufig.

### V-00 · Hero Startseite · 16:9

Datei: `hero-team-buero-01`
Alt-Text: „Reinigungsteam mit Teamleitung bei der Abnahme einer Büroetage am
Morgen“

```text
Early morning on a bright modern office floor in Germany: a cleaning team in plain teal-green workwear finishes its round, a cleaning trolley in the foreground, the team lead in the same workwear checks a checklist on a tablet. Large windows with soft daylight. The left third of the image is calm and bright, suitable for text. Style: bright, friendly, realistic documentary photography, full-frame camera, 35mm lens, soft natural daylight, clean fresh color grade with teal-green accents and soft whites, professional and calm, not a staged stock-photo look. Avoid: any text, letters or logos on clothing, equipment or screens; recognizable faces; people smiling into the camera; watermark.
```

### V-01 · Reinigung · 3:2

Datei: `reinigung-01`
Alt-Text: „Maschinelle Bodenreinigung in einem hellen Foyer“

```text
A service employee in plain teal-green workwear operates a ride-on floor scrubber in a large bright lobby in Germany, seen from the side, the floor glossy and clean behind the machine. Style: bright, friendly, realistic documentary photography, full-frame camera, 35mm lens, soft natural daylight, clean fresh color grade with teal-green accents and soft whites, professional and calm, not a staged stock-photo look. Avoid: any text, letters or logos on clothing, machines or walls; recognizable faces; people smiling into the camera; watermark.
```

### V-02 · Logistik · 3:2

Datei: `logistik-01`
Alt-Text: „Kommissionierung im Lager mit Handscanner“

```text
Warehouse in Germany with high shelving: an employee in plain teal-green workwear picks plain brown boxes using a handheld scanner, a colleague in the same workwear moves a pallet truck in the background. Style: bright, friendly, realistic documentary photography, full-frame camera, 35mm lens, soft even light, clean fresh color grade with teal-green accents and soft whites, professional and calm, not a staged stock-photo look. Avoid: any text, letters, barcodes or logos on clothing, boxes, shelves or the scanner display; recognizable faces; people smiling into the camera; watermark.
```

### V-03 · Transport · 3:2

Datei: `transport-01`
Alt-Text: „Verladung von Waren in einen Transporter an einer Laderampe“

```text
Loading dock in Germany in daylight: two employees in plain teal-green workwear load plain boxes into a white unmarked van using a hand truck. Style: bright, friendly, realistic documentary photography, full-frame camera, 35mm lens, soft natural daylight, clean fresh color grade with teal-green accents and soft whites, professional and calm, not a staged stock-photo look. Avoid: any text, letters, license plates or logos on clothing, vehicles or boxes; recognizable faces; people smiling into the camera; watermark.
```

### V-04 · Hostessen und Servicepersonal · 3:2

Datei: `hostessen-servicepersonal-01`
Alt-Text: „Servicepersonal am Empfang einer Veranstaltung“

```text
Conference foyer in Germany: service staff in dark teal blazers welcome guests at a registration desk with blank name badges laid out, guests out of focus in the foreground. Warm event lighting mixed with daylight. Style: bright, friendly, realistic documentary photography, full-frame camera, 35mm lens, clean fresh color grade with teal-green accents and soft whites, professional and calm, not a staged stock-photo look. Avoid: any text, letters or logos on clothing, badges, banners or walls; recognizable faces; people smiling into the camera; watermark.
```

### V-05 · Betriebsunterstützung · 3:2 · vorläufig

Datei: `betriebsunterstuetzung-01`
Alt-Text: „Serviceteam bereitet einen Konferenzraum vor“

```text
A service team in plain teal-green workwear sets up a bright conference room in Germany: arranging chairs and tables, one team member with a checklist coordinates the team. Style: bright, friendly, realistic documentary photography, full-frame camera, 35mm lens, soft natural daylight, clean fresh color grade with teal-green accents and soft whites, professional and calm, not a staged stock-photo look. Avoid: any text, letters or logos on clothing, screens or walls; recognizable faces; people smiling into the camera; watermark.
```

## 9. Karriere — markenübergreifend

Wärmer und heller als die Kundenbereiche (`packages/assets/shared/recruiting/README.md`).
Neutrale dunkle Arbeitskleidung, damit die Bilder für alle Marken passen.
Ordner: `packages/assets/shared/recruiting/`

Für echte Nähe braucht der Karrierebereich später ein Fotoshooting mit
echten Mitarbeitenden und schriftlicher Einverständniserklärung. Die
KI-Motive sind Übergangslösung und Stimmungsbild.

### K-01 · Schulung · 3:2

Datei: `schulung-01`
Alt-Text: „Schulung neuer Mitarbeitender in einem hellen Seminarraum“

```text
Bright training room in Germany: a trainer explains at a whiteboard with abstract diagrams and no readable text, four trainees in plain dark workwear seen from behind and from the side, relaxed and attentive. Style: warm, bright, inviting documentary photography, full-frame camera, 35mm lens, soft warm daylight, warm neutral tones, authentic, not a stock-photo look. Avoid: any text, letters or logos on clothing, whiteboard or walls; recognizable faces; people smiling into the camera; watermark.
```

### K-02 · Einarbeitung · 3:2

Datei: `einarbeitung-01`
Alt-Text: „Übergabe der Arbeitskleidung am ersten Arbeitstag“

```text
First working day: in a bright, tidy locker room a team lead hands a folded new work jacket to a new colleague, a friendly moment, both in plain dark workwear, faces in soft profile or slightly out of focus. Style: warm, bright, inviting documentary photography, full-frame camera, 50mm lens, soft warm daylight, warm neutral tones, authentic, not a stock-photo look. Avoid: any text, letters or logos on clothing, lockers or walls; recognizable faces; people smiling into the camera; watermark.
```

## 10. Offene Punkte

- Rückfrage zum Begriff „Sicherungsposten“ (Abschnitt 7).
- Seitenplanung AKRO Fire & Safety und AKRO Service fehlt; die Motivlisten
  können sich danach ändern.
- Rechtliche Prüfung der KI-Kennzeichnung (Abschnitt 2).
- Fachprüfung aller Fire-&-Safety-Motive durch eine fachkundige Person.
- Bildplätze in den Seiten: Die heutigen Seiten von AKRO Sicherheit haben
  noch keine Bildflächen. Wo Bilder erscheinen, wird beim Einbau festgelegt.

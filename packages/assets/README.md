# @akro/assets

Zentrale Assetablage der AKRO-Unternehmensgruppe. Alle Marken greifen auf
dieses eine Paket zu — Assets werden **nicht** je App kopiert
(`docs/DECISIONS.md` Punkt 24 und 25).

## Aufbau

| Ordner | Inhalt |
| --- | --- |
| `brand/` | Logos und Markenzeichen je Marke |
| `shared/` | Assets, die alle Marken gemeinsam nutzen |
| `security/` | Bildwelt AKRO Sicherheit |
| `fire-safety/` | Bildwelt AKRO Fire & Safety |
| `service/` | Bildwelt AKRO Service |
| `group/` | Bildwelt AKRO Group |

Die vier Bildwelten sind getrennt. Motive werden nicht zwischen Marken
geteilt (Punkt 23). Was wirklich für alle gilt, gehört nach `shared/`.

## Namensregeln

- klein geschrieben, Bindestriche, keine Umlaute, keine Leerzeichen
- sprechender Name, kein `final`, `neu`, `Kopie` oder `(1)`
- Beispiel: `objektschutz-nacht-01.webp`, nicht `Objektschutz Nacht (1).JPG`

## Formate

| Zweck | Format |
| --- | --- |
| Logos, Zeichen, Icons | SVG |
| Fotos | WebP oder AVIF, JPEG nur als Rückfallebene |
| Grafiken mit Transparenz | SVG, sonst PNG |

## Harte Regeln

- **Keine Bild-KI** für Logos, Zertifikate, Kundenlogos und offizielle
  Zeichen (Punkt 21).
- **Keine beschädigten Dateien** aus dem Altbestand übernehmen (Punkt 19).
- **Keine Datei ohne geklärtes Nutzungsrecht** ablegen.
- Zu jedem Fremdasset gehört ein Nachweis, woher es stammt und wer die
  Veröffentlichung freigegeben hat.

## Stand

Die Struktur ist angelegt, aber **leer**. Der gesamte Rasterbestand des
Altbestands ist zerstört (`docs/LEGACY-INVENTORY.md`); Ersatz wird beschafft
oder neu produziert.

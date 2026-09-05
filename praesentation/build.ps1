# Erzeugt das PDF aus der HTML-Vorlage.
# Aufruf im PowerShell-Fenster:  .\build.ps1
#
# Chrome rendert die Seite und druckt sie ohne Kopf- und Fusszeile.
# Jede .folie ist exakt so gross wie eine PDF-Seite, deshalb entsteht
# pro Folie genau eine Seite ohne Skalierung.

$ordner = Split-Path -Parent $MyInvocation.MyCommand.Path
$quelle = Join-Path $ordner 'unternehmenspraesentation.html'
$ziel   = Join-Path $ordner 'AKRO-Unternehmenspraesentation.pdf'

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
if (-not (Test-Path $chrome)) {
  $chrome = 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
}
if (-not (Test-Path $chrome)) {
  Write-Error 'Chrome nicht gefunden. Pfad in dieser Datei anpassen.'
  exit 1
}

& $chrome --headless --disable-gpu --no-pdf-header-footer `
  --virtual-time-budget=8000 `
  "--print-to-pdf=$ziel" "file:///$($quelle -replace '\','/' -replace ' ','%20')"

if (Test-Path $ziel) {
  $kb = [math]::Round((Get-Item $ziel).Length / 1KB)
  Write-Host "Fertig: $ziel ($kb KB)"
} else {
  Write-Error 'PDF wurde nicht erzeugt.'
}

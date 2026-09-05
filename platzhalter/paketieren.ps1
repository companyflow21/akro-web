# Packt die Platzhalterseite als ZIP fuer den Upload im Strato-Dateimanager.
# Aufruf im PowerShell-Fenster:  .\paketieren.ps1
#
# Immer nach einer Aenderung an den HTML- oder CSS-Dateien neu ausfuehren,
# sonst laedt man einen veralteten Stand hoch.

$ordner = Split-Path -Parent $MyInvocation.MyCommand.Path
$ziel = Join-Path $ordner 'akro-platzhalter.zip'

$dateien = @(
  'index.html', 'impressum.html', 'datenschutz.html',
  'assets\akro.css',
  'assets\fonts\archivo-latin-var.woff2',
  'assets\fonts\source-serif-4-latin-var.woff2',
  'assets\img\akro-wortmarke.svg',
  'assets\img\favicon.svg'
)

foreach ($d in $dateien) {
  if (-not (Test-Path (Join-Path $ordner $d))) {
    Write-Error "Fehlt: $d"
    exit 1
  }
}

if (Test-Path $ziel) { Remove-Item $ziel -Force }

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::Open($ziel, 'Create')
try {
  foreach ($d in $dateien) {
    $voll = Join-Path $ordner $d
    $eintrag = $d -replace '\', '/'
    [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $voll, $eintrag)
  }
} finally {
  $zip.Dispose()
}

$kb = [math]::Round((Get-Item $ziel).Length / 1KB)
Write-Host "Fertig: akro-platzhalter.zip ($kb KB, $($dateien.Count) Dateien)"

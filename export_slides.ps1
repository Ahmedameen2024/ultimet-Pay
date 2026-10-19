param(
    [string]$pptxPath = "Ultimate_Pay_Presentation.pptx",
    [string]$outDir = "exported_slides"
)

$resolvedPptx = (Resolve-Path $pptxPath).Path
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
}
$resolvedOut = (Resolve-Path $outDir).Path

$ppt = New-Object -ComObject PowerPoint.Application
try {
    $pres = $ppt.Presentations.Open($resolvedPptx, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoFalse)
    $count = $pres.Slides.Count
    Write-Host "Total slides in presentation: $count"
    for ($i = 1; $i -le $count; $i++) {
        $slide = $pres.Slides.Item($i)
        $outName = [string]::Format("{0}\slide_{1:D2}.png", $resolvedOut, $i)
        $slide.Export($outName, "PNG", 1920, 1080)
        Write-Host "Exported slide $i to $outName"
    }
    $pres.Close()
}
finally {
    $ppt.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt) | Out-Null
}
Write-Host "Slide export complete!"

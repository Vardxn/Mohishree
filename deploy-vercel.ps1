Param(
    [switch]$Prod,
    [switch]$Push
)

Write-Host "=== MohishreeFacilityServices Vercel Deployment ===" -ForegroundColor Cyan

if (-not $Env:VERCEL_TOKEN) {
    Write-Error "Environment variable VERCEL_TOKEN is not set. Obtain a token from https://vercel.com/account/tokens and set it with: $Env:VERCEL_TOKEN='your_token'"
    exit 1
}

# Ensure we are in the project directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

# Install dependencies if node_modules missing
if (-not (Test-Path (Join-Path $scriptDir 'node_modules'))) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) { Write-Error "npm install failed"; exit 1 }
}

Write-Host "Building Next.js app..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed"; exit 1 }

$deployArgs = @('--confirm','--prebuilt','--token', $Env:VERCEL_TOKEN)
if ($Prod) { $deployArgs += '--prod' }

$targetEnv = if ($Prod) { 'production' } else { 'preview' }
Write-Host "Deploying to Vercel ($targetEnv)..." -ForegroundColor Yellow
vercel @deployArgs
if ($LASTEXITCODE -ne 0) { Write-Error "Vercel deployment failed"; exit 1 }

if ($Prod -and $Push) {
    Write-Host "Committing & pushing changes to origin main..." -ForegroundColor Yellow
    git add .
    git commit -m "Production deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" 2>$null
    git push origin main
}

Write-Host "Deployment script finished." -ForegroundColor Green

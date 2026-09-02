# Portfolio Quick Start Script
Write-Host "🚀 Starting Harichandru's Portfolio..." -ForegroundColor Green

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies (first time only)..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ npm install failed" -ForegroundColor Red
        exit 1
    }
}

Write-Host "✅ Dependencies ready!" -ForegroundColor Green
Write-Host "🌐 Starting dev server..." -ForegroundColor Cyan
Write-Host "📍 Opening at http://localhost:5173" -ForegroundColor Cyan

npm run dev

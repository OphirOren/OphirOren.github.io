@echo off
cd /d "%~dp0"

netstat -ano | findstr ":8765" | findstr "LISTENING" >nul
if not errorlevel 1 goto :open

start "PQC-8765" /min powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
powershell -NoProfile -Command "Start-Sleep -Seconds 2" >nul

netstat -ano | findstr ":8765" | findstr "LISTENING" >nul
if errorlevel 1 (
  powershell -NoProfile -Command "Start-Sleep -Seconds 2" >nul
  netstat -ano | findstr ":8765" | findstr "LISTENING" >nul
  if errorlevel 1 (
    echo Server did not start on port 8765.
    echo Tip: if Windows asks for network permission, allow it for PowerShell.
    echo You can still open index.html directly in your browser.
    pause
    exit /b 1
  )
)

:open
start "" "http://localhost:8765/"

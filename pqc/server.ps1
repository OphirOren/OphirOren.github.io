$ErrorActionPreference = 'Stop'
$Port = 8765
$Root = [IO.Path]::GetFullPath((Split-Path -Parent $MyInvocation.MyCommand.Path))

$allowedExt = @{
  '.html' = 'text/html; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.md'   = 'text/markdown; charset=utf-8'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.png'  = 'image/png'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
  '.webp' = 'image/webp'
}

$securityHeaders = @{
  'Content-Security-Policy' = "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'"
  'X-Content-Type-Options' = 'nosniff'
  'X-Frame-Options' = 'DENY'
  'Referrer-Policy' = 'no-referrer'
  'Cross-Origin-Resource-Policy' = 'same-origin'
  'Cache-Control' = 'no-store'
}

function Set-SecurityHeaders([System.Net.HttpListenerResponse]$response) {
  foreach ($key in $securityHeaders.Keys) {
    $response.Headers[$key] = $securityHeaders[$key]
  }
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://127.0.0.1:$Port/"
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "PQC Practice: http://localhost:$Port"

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    Set-SecurityHeaders $response

    try {
      if ($request.HttpMethod -ne 'GET' -and $request.HttpMethod -ne 'HEAD') {
        $response.StatusCode = 405
        $bytes = [Text.Encoding]::UTF8.GetBytes('Method Not Allowed')
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
        continue
      }

      $rel = [Uri]::UnescapeDataString($request.Url.AbsolutePath)
      if ([string]::IsNullOrWhiteSpace($rel) -or $rel -eq '/') {
        $rel = '/index.html'
      }

      # Reject encoded traversal and odd path tricks early.
      if ($rel -match '\.\.|\\|%00|%2e%2e') {
        $response.StatusCode = 400
        $bytes = [Text.Encoding]::UTF8.GetBytes('Bad Request')
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
        continue
      }

      $rel = $rel.TrimStart('/').Replace('/', [IO.Path]::DirectorySeparatorChar)
      $filePath = [IO.Path]::GetFullPath((Join-Path $Root $rel))
      $rootPrefix = if ($Root.EndsWith([IO.Path]::DirectorySeparatorChar)) { $Root } else { $Root + [IO.Path]::DirectorySeparatorChar }

      if (-not ($filePath.Equals($Root, [StringComparison]::OrdinalIgnoreCase) -or $filePath.StartsWith($rootPrefix, [StringComparison]::OrdinalIgnoreCase))) {
        $response.StatusCode = 403
        $bytes = [Text.Encoding]::UTF8.GetBytes('Forbidden')
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
      }
      elseif (-not (Test-Path -LiteralPath $filePath -PathType Leaf)) {
        $response.StatusCode = 404
        $bytes = [Text.Encoding]::UTF8.GetBytes('Not found')
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
      }
      else {
        $ext = [IO.Path]::GetExtension($filePath).ToLowerInvariant()
        if (-not $allowedExt.ContainsKey($ext)) {
          $response.StatusCode = 403
          $bytes = [Text.Encoding]::UTF8.GetBytes('Forbidden')
          $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        else {
          $bytes = [IO.File]::ReadAllBytes($filePath)
          $response.StatusCode = 200
          $response.ContentType = $allowedExt[$ext]
          $response.ContentLength64 = $bytes.Length
          if ($request.HttpMethod -ne 'HEAD') {
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
          }
        }
      }
    }
    catch {
      $response.StatusCode = 500
      $bytes = [Text.Encoding]::UTF8.GetBytes('Server error')
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    finally {
      $response.OutputStream.Close()
    }
  }
}
finally {
  $listener.Stop()
  $listener.Close()
}

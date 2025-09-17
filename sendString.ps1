$json = @{
    text = "Hello from PowerShelll"
    timestamp = (Get-Date).ToString("u")
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://johannessch-freshstart-66.deno.dev/api/post_message" -Method POST -Body $json -ContentType "application/json"

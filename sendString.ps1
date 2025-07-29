$json = @{
    text = "Hello from PowerShelll"
    timestamp = (Get-Date).ToString("u")
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8000/api/post_message" -Method POST -Body $json -ContentType "application/json"

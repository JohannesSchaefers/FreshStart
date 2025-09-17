// Define the payload interface for type safety (optional)
interface MessagePayload {
  text: string;
  timestamp: string;
}

// Construct the payload
const payload: MessagePayload = {
  text: "Hello from TypeScript",
  timestamp: new Date().toISOString() // Equivalent to PowerShell's (Get-Date).ToString("u")
};

// Send the POST request
fetch("https://johannessch-freshstart-66.deno.dev/api/post_message", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(response => response.json())
  .then(data => {
    console.log("Response:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

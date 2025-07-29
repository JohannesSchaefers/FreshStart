import { Handlers } from "$fresh/server.ts";
import { broadcast } from "./sse.ts";

export const handler: Handlers = {
  async POST(req) {
    try {
      const data = await req.json();

      // Broadcast incoming JSON message to SSE clients immediately
      broadcast(data);

      return new Response(JSON.stringify({ status: "ok" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ status: "error", message: String(error) }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};

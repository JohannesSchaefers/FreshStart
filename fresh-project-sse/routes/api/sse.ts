import { Handlers } from "$fresh/server.ts";

const clients = new Set<ReadableStreamDefaultController<Uint8Array>>();

// Removed createSSETransformer, not needed anymore.

export const handler: Handlers = {
  GET(_req) {
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        clients.add(controller);
        controller.enqueue(new TextEncoder().encode("data: connected\n\n"));
      },
      cancel(controller) {
        clients.delete(controller);
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/event-stream" },
    });
  },
};

// Function to broadcast JSON messages to all clients
export function broadcast(data: object) {
  const json = JSON.stringify(data);
  for (const client of clients) {
    try {
      // Format as SSE event
      client.enqueue(new TextEncoder().encode(`data: ${json}\n\n`));
    } catch {
      clients.delete(client);
    }
  }
}

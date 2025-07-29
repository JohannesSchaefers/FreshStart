"use client";
import { useState, useEffect } from "preact/hooks";

export default function Messages() {
  const [messages, setMessages] = useState<object[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/sse");

    eventSource.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        setMessages((msgs) => [...msgs, parsed]);
      } catch {
        // ignore invalid JSON
      }
    };

    eventSource.onerror = () => eventSource.close();

    return () => eventSource.close();
  }, []);

  return (
    <ul>
      {messages.map((msg, i) => (
        <li key={i}>
          <pre>{JSON.stringify(msg, null, 2)}</pre>
        </li>
      ))}
    </ul>
  );
}

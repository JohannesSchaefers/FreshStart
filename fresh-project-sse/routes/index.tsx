// routes/index.tsx

import Messages from "../islands/Messages.tsx";

export default function Home() {
  return (
    <main style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Live Messages Live Messages</h1>
      <Messages />
    </main>
  );
}

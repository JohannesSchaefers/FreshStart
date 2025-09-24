// routes/index.tsx

import Messages from "../islands/Messages.tsx";

export default function Home() {
  return (
  //  <main style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>

<main className="p-4 font-sans">

      
      <h1>Live Messages</h1>
      <Messages />
    </main>
  );
}


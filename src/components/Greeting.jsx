import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        onClick={() => setGreeting(randomMessage())}
        style={{ padding: "0.5rem", marginTop: "0.5rem" }}
      >
        New Greeting
      </button>
    </div>
  );
}
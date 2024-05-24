import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Chat | Siperfume" },
    { name: "description", content: "Chat with AI" },
  ];
};

export default function ChatPage() {
  const { user } = useParams();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{user}의 채팅</h1>
    </div>
  );
}

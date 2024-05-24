import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/Button";
import { Answer } from "~/feature/Answer";
import { Chat } from "~/feature/Chat";

export const meta: MetaFunction = () => {
  return [
    { title: "Siperfume" },
    { name: "description", content: "Welcome to Siperfume" },
  ];
};

export default function IndexPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Siperfume</h1>
      <Button>안녕하세요</Button>
    </div>
  );
}

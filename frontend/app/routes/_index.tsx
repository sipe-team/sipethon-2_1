import type { MetaFunction } from "@remix-run/node";

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
    </div>
  );
}

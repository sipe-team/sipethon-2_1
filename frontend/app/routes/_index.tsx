import type { MetaFunction } from "@remix-run/node";
import { useBearStore } from "../stores/useBearStore";
import { Button } from "../components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Siperfume" },
    { name: "description", content: "Welcome to Siperfume" },
  ];
};

export default function Index() {
  const { bears, increase } = useBearStore();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Siperfume</h1>
      <p>{bears}</p>
      <Button onClick={() => increase(1)}>INCREASE</Button>
    </div>
  );
}

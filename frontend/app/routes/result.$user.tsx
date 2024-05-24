import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Result | Siperfume" },
    { name: "description", content: "perfume recommendation by AI" },
  ];
};

export default function ResultPage() {
  const { user } = useParams();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{user}를 위한 향수 추천</h1>
    </div>
  );
}

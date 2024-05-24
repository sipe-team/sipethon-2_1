import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { Block } from "~/components/Block";

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
      <Block>당신은 이런 재료를 아마 좋아할겁니다</Block>
    </div>
  );
}

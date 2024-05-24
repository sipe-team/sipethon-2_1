import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { MainContents } from "~/feature/MainContents";

export const meta: MetaFunction = () => {
  return [
    { title: "Siperfume" },
    { name: "description", content: "Welcome to Siperfume" },
  ];
};

export default function IndexPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <MainContents />
    </div>
  );
}

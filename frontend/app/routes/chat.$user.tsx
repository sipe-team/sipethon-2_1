import type { MetaFunction } from "@remix-run/node";
import { useNavigate, useParams } from "@remix-run/react";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Answer } from "~/feature/Answer";
import { Chat } from "~/feature/Chat";
import { answerContainer, chatContainer, layout } from "~/styles/chat-page.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Chat | Siperfume" },
    { name: "description", content: "Chat with AI" },
  ];
};

export default function ChatPage() {
  const { user } = useParams();
  const [value, setValue] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "안녕하세요, 저는 고향이에요! 당신께 5가지 질문을 드려서 취향과 선호도를 파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해 드리도록 할게요!",
    },
  ]);
  const [answerCount, setAnswerCount] = useState(0);

  const navigate = useNavigate();

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async (message: string) => {
      flushSync(() => {
        setMessages([...messages, { role: "user", content: message }]);
      });

      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
      });

      const res = await fetch("https://api.siperfume.p-e.kr/chat", {
        method: "post",
        headers: {
          Authorization: user!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: message }]),
      });

      return await res.json();
    },
    onSuccess: (data) => {
      flushSync(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: data }]);
        setAnswerCount((prev) => prev + 1);
      });
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    },
  });

  return (
    <div className={layout}>
      <Header />
      <div className={chatContainer} ref={containerRef}>
        {messages.map((message, index) => {
          if (message.role === "assistant") {
            return <Chat key={message.content + index}>{message.content}</Chat>;
          }
          return (
            <Chat isMe key={message.content + index}>
              {message.content}
            </Chat>
          );
        })}
      </div>
      <div className={answerContainer}>
        {answerCount >= 5 ? (
          <Button
            onClick={() => {
              localStorage.setItem("perfume-result", JSON.stringify(messages));
              navigate("/result/user");
            }}
          >
            결과보기
          </Button>
        ) : (
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              const message = new FormData(ev.currentTarget).get("input");
              if (!message || isPending) return;
              setValue("");
              sendMessage(message as string);
            }}
          >
            <Answer
              name="input"
              value={value}
              onChange={(ev) => setValue(ev.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
}

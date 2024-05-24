import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
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

  return (
    <div className={layout}>
      <Header />
      <div className={chatContainer}>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
        <Chat isMe>난 나무와 숲, 그리고 은은한 머스크향을 좋아해.</Chat>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
        <Chat isMe>난 나무와 숲, 그리고 은은한 머스크향을 좋아해.</Chat>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
        <Chat>
          안녕하세요, 저는 향고에요! 당신께 5가지 질문을 드려서 취향과 선호도를
          파악할 거에요! 그럼 지금부터 당신이 좋아할 것 같은 향수를 추천해
          드리도록 할게요!
        </Chat>
      </div>
      <div className={answerContainer}>
        <Answer />
      </div>
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { ImageContainer } from "~/components/ImageContainer";
import { ResultMainBlock } from "~/feature/ResultMainBlock";
import { ResultSubBlock } from "~/feature/ResultSubBlock";
import * as style from "../styles/common.css";
import { ResultText } from "~/feature/ResultText";
import { useQuery } from "@tanstack/react-query";
import { LoadingPage } from "~/feature/LoadingPage";

const API_URL = "https://api.siperfume.p-e.kr";
const temp = [{ role: "user", content: "향수 좀 추천해줘" }];
const temp2 = [
  {
    role: "user",
    content: "나는 시트러스 좋아해",
  },
  {
    role: "assistant",
    content:
      "알겠어냥! 향수 전문가가 되어 귀여운 질문을 할게냥! 너에게 맞는 향수를 찾기 위해 몇 가지 물어볼게냥~\n\n1. 어떤 향기를 좋아하냥? (꽃, 과일, 나무, 향신료 등)\n2. 언제 주로 향수를 쓰고 싶냥? (일상, 특별한 날, 데이트 등)\n3. 향기가 얼마나 지속되길 바라냥? (짧게, 중간, 오래도록)\n\n너의 답변을 기다리고 있을게냥!",
  },
  {
    role: "user",
    content: "나무향 좋아해",
  },
  {
    role: "assistant",
    content:
      "알겠어냥! 시트러스와 나무향을 좋아하는구나. 냥냥, 계속 질문할게냥~\n\n1. 언제 주로 향수를 쓰고 싶냥? (일상, 특별한 날, 데이트 등)\n2. 향기가 얼마나 지속되길 바라냥? (짧게, 중간, 오래도록)\n\n나에게 답해줘서 너에게 딱 맞는 향수를 추천해줄게냥!",
  },
  {
    role: "user",
    content: "향기가 오래 갔으면 좋겠다.",
  },
  {
    role: "assistant",
    content:
      "알겠어냥! 향기가 오래가는 걸 좋아하네, 냥냥~\n\n남은 두 가지 질문도 할게냥~\n\n1. 어느 계절에 주로 쓰고 싶냥? (봄, 여름, 가을, 겨울)\n2. 너가 좋아하는 유명 향수 브랜드가 있냥? (있다면 말해주면 좋겠어냥)\n\n알려주면 더 잘 맞는 향수를 추천할 수 있을 것 같아냥!답변 기다릴게냥~",
  },
  {
    role: "user",
    content: "나는 겨울에 쓰고 싶어",
  },
  {
    role: "assistant",
    content:
      "알겠어냥! 겨울에 쓰고 싶구나, 우리 귀염둥이! 마지막 질문이야냥~\n\n1. 너가 좋아하는 유명 향수 브랜드가 있냥? (있다면 말해주면 좋겠어냥)\n\n냠냠, 이제 거의 다 왔어냥! 답변해주면 너에게 딱 맞는 향수를 알려줄 수 있을 거야냥!",
  },
];

const request = {
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(temp2),
  method: "POST",
};

export const meta: MetaFunction = () => {
  return [
    { title: "Result | Siperfume" },
    { name: "description", content: "perfume recommendation by AI" },
  ];
};

export default function ResultPage() {
  const { status, data } = useQuery({
    enabled: true,
    queryKey: ["result"],
    queryFn: async () => {
      const search = await fetch(`${API_URL}/chat/search`, request).then(
        (res) => res.json()
      );
      const image = await fetch(`${API_URL}/chat/generate-image`, request).then(
        (res) => res.json()
      );
      const summary = await fetch(`${API_URL}/chat/summary`, request).then(
        (res) => res.json()
      );
      console.log(image.image_url, search, summary);

      return {
        imageUrl: image.image_url,
        search,
        summary,
      };
    },
  });

  if (status !== "success") {
    return <LoadingPage />;
  }

  return (
    <div className={style.container}>
      <Header />
      <ResultText message={data.summary.atmosphere} />
      <ImageContainer src={data.imageUrl} alt="result" />
      <ResultMainBlock ingredients={data.summary.ingredients} />
      <ResultSubBlock
        brand={data.search.brand}
        name={data.search.name}
        description={data.search.description}
        notes={data.search.notes}
        imageUrl={data.search.imageUrl}
      />
      <Button
        style={{ margin: "30px auto 42px" }}
        onClick={() => window.location.assign("/")}
      >
        향고와 새로 대화하기
      </Button>
    </div>
  );
}

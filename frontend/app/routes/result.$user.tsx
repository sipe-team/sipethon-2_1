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
import { useEffect, useState } from "react";

const API_URL = "https://api.siperfume.p-e.kr";

export const meta: MetaFunction = () => {
  return [
    { title: "Result | Siperfume" },
    { name: "description", content: "perfume recommendation by AI" },
  ];
};

export default function ResultPage() {
  const [inputs, setInputs] = useState(null);
  useEffect(() => {
    const temp = localStorage.getItem("perfume-result");
    if (temp) {
      setInputs(JSON.parse(temp));
      localStorage.removeItem("perfume-result");
    }
  }, []);

  const request = {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
    method: "POST",
  };

  const { status, data } = useQuery({
    enabled: !!inputs,
    queryKey: ["result", request],
    queryFn: async () => {
      const req = [
        fetch(`${API_URL}/chat/search`, request).then((res) => res.json()),
        fetch(`${API_URL}/chat/generate-image`, request).then((res) =>
          res.json()
        ),
        fetch(`${API_URL}/chat/summary`, request).then((res) => res.json()),
      ];

      const [search, image, summary] = await Promise.all(req);

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
        고향이와 새로 대화하기
      </Button>
    </div>
  );
}

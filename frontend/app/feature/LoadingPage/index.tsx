import { ImageContainer } from "~/components/ImageContainer";
import * as style from "~/styles/common.css";
import LoadingImage from "~/assets/loading.png";
import { useEffect, useState } from "react";

const MAIN_MESSGAE = `좋아할 것 같은 향수
열심히 가져오는 중`;

export const LoadingPage = () => {
  const [dot, setDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const dots = ".".repeat(dot);

  return (
    <div className={style.container}>
      <ImageContainer src={LoadingImage} alt="thinking" m="150px auto 20px" />
      <h2 className={style.mainText}>
        {MAIN_MESSGAE}
        {dots}
      </h2>
    </div>
  );
};

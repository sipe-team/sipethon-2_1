import { ImageContainer } from "~/components/ImageContainer";
import { container, mainText, subText } from "./style.css";
import { Button } from "~/components/Button";
import MainImage from "~/assets/main.png";

const MAIN_TITLE = `취향에 맞는 향수를
찾기 위한 5번의 대화`;

const SUB_TEXT = `환영합니다! 저는 향수 고양이 향고입니다.
당신이 좋아할 만한 향수를 추천해주고
그 향수를 뿌린 당신의 모습을 그림으로 그려줄게요!`;

export const MainContents = () => {
  const handleClick = () => {
    window.location.assign("/chat/123");
  };
  return (
    <div className={container}>
      <h1 className={mainText}>{MAIN_TITLE}</h1>
      <h3 className={subText}>{SUB_TEXT}</h3>
      <ImageContainer src={MainImage} m={"0 auto 60px"} />
      <Button onClick={handleClick}>향고와 대화하기</Button>
    </div>
  );
};

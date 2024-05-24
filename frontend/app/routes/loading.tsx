import { ImageContainer } from "~/components/ImageContainer";
import * as style from "../styles/common.css";
import LoadingImage from "~/assets/loading.png";

const MAIN_MESSGAE = `좋아할 것 같은 향수
열심히 가져오는 중`;

const LoadingPage = () => {
  return (
    <div className={style.container}>
      <ImageContainer src={LoadingImage} alt="thinking" m="150px auto 20px" />
      <h2 className={style.mainText}>{MAIN_MESSGAE}</h2>
    </div>
  );
};

export default LoadingPage;

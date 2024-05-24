import { ImageContainer } from "~/components/ImageContainer";
import * as style from "../styles/common.css";

const tempImage =
  "https://media.istockphoto.com/id/619079366/photo/let-me-think.jpg?s=612x612&w=0&k=20&c=EC1bomKg5sfnbUdrI1T15k34BHDZvZQwkCPZophe8zw=";

const MAIN_MESSGAE = `좋아할 것 같은 향수
열심히 가져오는 중`;

const LoadingPage = () => {
  return (
    <>
      <ImageContainer src={tempImage} alt="thinking" m="150px auto 20px" />
      <h2 className={style.mainText}>{MAIN_MESSGAE}</h2>
    </>
  );
};

export default LoadingPage;

import * as style from "./style.css";

interface ResultTextProps {
  message: string;
}

export const ResultText = (props: ResultTextProps) => {
  return (
    <>
      <div className={style.firstText}>당신이 좋아할 것 같은 향수를 뿌리면</div>
      <div className={style.secondText}>{props.message}</div>
    </>
  );
};

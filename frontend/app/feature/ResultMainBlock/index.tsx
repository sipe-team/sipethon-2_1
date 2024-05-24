import { Block } from "~/components/Block";
import * as style from "./style.css";

const SUB_TEXT = `당신은 이런 재료를 아마 좋아할겁니다`;

interface ResultMainBlockProps {
  ingredients: string[];
}

export const ResultMainBlock = (props: ResultMainBlockProps) => {
  return (
    <Block>
      <div className={style.subText}>{SUB_TEXT}</div>
      <div className={style.noteWrapper}>
        {props.ingredients.map((result, index) => (
          <div key={index} className={style.noteItem}>
            {result}
          </div>
        ))}
      </div>
    </Block>
  );
};

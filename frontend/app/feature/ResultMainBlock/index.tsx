import { Block } from "~/components/Block";
import * as style from "./style.css";

const SUB_TEXT = `당신은 이런 재료를 아마 좋아할겁니다`;
const TEMP_RESULT = ["머스크", "샌달우드", "시더우드"];

export const ResultMainBlock = () => {
  return (
    <Block>
      <div className={style.subText}>{SUB_TEXT}</div>
      <div className={style.noteWrapper}>
        {TEMP_RESULT.map((result, index) => (
          <div key={index} className={style.noteItem}>
            {result}
          </div>
        ))}
      </div>
    </Block>
  );
};

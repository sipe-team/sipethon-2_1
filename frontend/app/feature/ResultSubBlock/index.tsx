import { Block } from "~/components/Block";
import { ImageContainer } from "~/components/ImageContainer";
import * as style from "./style.css";

const FIRST_TEXT = `그렇다면 당신이 좋아할 것 같은 향수는`;

interface ResultSubBlockProps {
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  notes: string[];
}

export const ResultSubBlock = (props: ResultSubBlockProps) => {
  return (
    <Block>
      <div className={style.firstText}>{FIRST_TEXT}</div>
      <ImageContainer src={props.imageUrl} alt="perfume" m="30px auto" />
      <div>
        <p className={style.brandText}>{props.brand}</p>
        <p className={style.nameText}>{props.name}</p>
        {/* <p>{props.description}</p> */}
        <p className={style.notesWrapper}>{props.notes.join(", ")}</p>
      </div>
    </Block>
  );
};

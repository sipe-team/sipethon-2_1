import { ComponentPropsWithoutRef } from "react";
import { TextInput } from "~/components/TextInput";
import { SendButton } from "~/components/SendButton";
import * as styles from "./style.css";

type AnswerProps = ComponentPropsWithoutRef<"div">;
export const Answer = (props: AnswerProps) => {
  return (
    <div {...props} className={[styles.container, props.className].join(" ")}>
      <TextInput />
      <SendButton />
    </div>
  );
};

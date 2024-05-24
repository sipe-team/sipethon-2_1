import { ComponentPropsWithoutRef, useRef } from "react";
import { TextInput } from "~/components/TextInput";
import { SendButton } from "~/components/SendButton";
import * as styles from "./style.css";

type AnswerProps = ComponentPropsWithoutRef<"input">;
export const Answer = (props: AnswerProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div className={styles.container}>
      <TextInput {...props} ref={ref} />
      <SendButton />
    </div>
  );
};

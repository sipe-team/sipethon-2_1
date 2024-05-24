import { ComponentPropsWithoutRef, useRef } from "react";
import { TextInput } from "~/components/TextInput";
import { SendButton } from "~/components/SendButton";
import * as styles from "./style.css";
import { Spinner } from "~/components/Spinner";

type AnswerProps = ComponentPropsWithoutRef<"input"> & { isPending?: boolean };
export const Answer = (props: AnswerProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { isPending = false, ...rest } = props;

  return (
    <div className={styles.container}>
      <TextInput {...rest} ref={ref} />
      {isPending ? <Spinner /> : <SendButton />}
    </div>
  );
};

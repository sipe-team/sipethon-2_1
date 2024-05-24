import { ComponentPropsWithoutRef } from "react";
import * as styles from "./style.css";

type TextInputProps = ComponentPropsWithoutRef<"input">;
export const TextInput = (props: TextInputProps) => {
  return (
    <input {...props} className={[styles.input, props.className].join(" ")} />
  );
};

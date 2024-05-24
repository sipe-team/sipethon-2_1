import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as styles from "./style.css";

type TextInputProps = ComponentPropsWithoutRef<"input">;
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        className={[styles.input, props.className].join(" ")}
        ref={ref}
      />
    );
  }
);

TextInput.displayName = "TextInput";

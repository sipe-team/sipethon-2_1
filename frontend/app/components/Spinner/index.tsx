import { ComponentPropsWithoutRef } from "react";
import * as styles from "./style.css";

type SpinnerProps = ComponentPropsWithoutRef<"span">;
export const Spinner = (props: SpinnerProps) => {
  return (
    <span {...props} className={[styles.spinner, props.className].join(" ")} />
  );
};

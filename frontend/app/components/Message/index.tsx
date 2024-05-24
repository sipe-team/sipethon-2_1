import { ComponentPropsWithoutRef } from "react";
import * as styles from "./style.css";

type MessageProps = ComponentPropsWithoutRef<"p"> & styles.MessageVariants;
export const Message = (props: MessageProps) => {
  const { direction, ...rest } = props;

  return (
    <p
      {...rest}
      className={[styles.message({ direction }), props.className].join(" ")}
    />
  );
};

import { ComponentPropsWithoutRef } from "react";
import * as styles from "./style.css";

type AvatarProps = ComponentPropsWithoutRef<"img">;
export const Avatar = (props: AvatarProps) => {
  return (
    <img
      {...props}
      alt={props.alt}
      className={[styles.avatar, props.className].join(" ")}
    />
  );
};

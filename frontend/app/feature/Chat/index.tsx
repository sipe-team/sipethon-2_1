import { ComponentPropsWithoutRef } from "react";
import * as styles from "./style.css";
import { Avatar } from "~/components/Avatar";
import { Message } from "~/components/Message";

type ChatProps = ComponentPropsWithoutRef<"div"> & styles.ChatVariants;
export const Chat = (props: ChatProps) => {
  const { isMe = false, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={[styles.container({ isMe }), props.className].join(" ")}
    >
      <Avatar />
      <Message direction={isMe ? "right" : "left"}>{children}</Message>
    </div>
  );
};

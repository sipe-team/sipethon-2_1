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
      <Avatar
        src={isMe ? "/images/user.png" : "/images/assistant.png"}
        alt={isMe ? "사용자 이미지" : "AI 이미지"}
      />
      <Message direction={isMe ? "right" : "left"}>{children}</Message>
    </div>
  );
};

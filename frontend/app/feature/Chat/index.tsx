import { ComponentPropsWithoutRef } from "react";
import * as styles from "./style.css";
import { Avatar } from "~/components/Avatar";
import { Message } from "~/components/Message";

type ChatProps = ComponentPropsWithoutRef<"div"> &
  styles.ChatVariants & { userType: number; catType: number };
export const Chat = (props: ChatProps) => {
  const { isMe = false, userType, catType, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={[styles.container({ isMe }), props.className].join(" ")}
    >
      <Avatar
        src={isMe ? `/images/user${userType}.png` : `/images/cat${catType}.png`}
        alt={isMe ? "사용자 이미지" : "AI 이미지"}
      />
      <Message direction={isMe ? "right" : "left"}>{children}</Message>
    </div>
  );
};

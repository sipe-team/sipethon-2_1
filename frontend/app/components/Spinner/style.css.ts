import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";
import * as answerStyles from "../../feature/Answer/style.css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinner = style({
  width: "24px",
  height: "24px",
  border: "2px solid",
  borderColor: vars.colors.main1,
  borderBottomColor: "transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: "rotation 1s linear infinite",
  animationName: rotate,
  animationDuration: "3s",

  selectors: {
    [`${answerStyles.container} &`]: {
      position: "absolute",
      top: "15px",
      right: "20px",
    },
  },
});

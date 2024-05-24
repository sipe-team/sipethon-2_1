import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";
import * as answerStyles from "../../feature/Answer/style.css";

export const input = style({
  boxSizing: "border-box",
  padding: "15px 20px",
  borderRadius: "25px",
  borderColor: "transparent",
  fontSize: "14px",
  lineHeight: 1.4,
  background: vars.colors.yy1,
  margin: 0,
  "::placeholder": {
    color: vars.colors.gray350,
  },

  selectors: {
    [`${answerStyles.container} &`]: {
      width: "100%",
      paddingRight: "45px",
    },
  },
});

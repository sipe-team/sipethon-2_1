import { style } from "@vanilla-extract/css";
import * as answerStyles from "../../feature/Answer/style.css";

export const button = style({
  border: "none",
  display: "grid",
  placeContent: "center",
  background: "transparent",
  padding: 0,
  cursor: "pointer",

  selectors: {
    [`${answerStyles.container} &`]: {
      position: "absolute",
      top: "15px",
      right: "20px",
    },
  },
});

import { style } from "@vanilla-extract/css";
import * as chatStyles from "../../feature/Chat/style.css";

export const avatar = style({
  width: "40px",
  height: "40px",
  borderRadius: "14px",
  overflow: "hidden",

  selectors: {
    [`${chatStyles.container.classNames.base} &`]: {
      minWidth: "40px",
    },
  },
});

import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const input = style({
  padding: "15px 20px",
  borderRadius: "25px",
  borderColor: "transparent",
  fontSize: "14px",
  lineHeight: 1.4,
  background: vars.colors.yy1,
  "::placeholder": {
    color: vars.colors.gray350,
  },
});

import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const mainText = style({
  fontSize: 20,
  color: vars.colors.main1,
  fontWeight: "semibold",
  textAlign: "center",
  whiteSpace: "pre",
  display: "block",
  margin: "0 auto",
});
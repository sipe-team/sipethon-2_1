import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  padding: "0 35px 125px",
  boxSizing: "border-box",
});

export const mainText = style({
  fontSize: 20,
  color: vars.colors.gray100,
  fontWeight: 600,
  textAlign: "center",
  whiteSpace: "pre",
  margin: "44px 0 12px",
  lineHeight: 1.4,
});

export const subText = style({
  fontSize: 13,
  color: vars.colors.gray400,
  textAlign: "center",
  whiteSpace: "pre",
  marginBottom: 30,
  lineHeight: 1.4,
});

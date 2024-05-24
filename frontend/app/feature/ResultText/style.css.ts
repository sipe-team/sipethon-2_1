import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const firstText = style({
  margin: "10px auto 4px",
  fontSize: 14,
  color: vars.colors.gray400,
  textAlign: "center",
});

export const secondText = style({
  margin: "0 auto",
  fontSize: 20,
  color: vars.colors.gray100,
  fontWeight: 600,
  textAlign: "center",
  marginBottom: 22,
  lineHeight: 1.4,
});

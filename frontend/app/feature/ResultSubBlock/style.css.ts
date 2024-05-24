import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const firstText = style({
  fontSize: 14,
  color: vars.colors.gray400,
  textAlign: "center",
  margin: "10px auto 0",
});

export const brandText = style({
  fontSize: 14,
  color: vars.colors.gray350,
  textAlign: "center",
  fontWeight: "semibold",
  margin: "0 auto",
});

export const nameText = style({
  fontSize: 18,
  color: vars.colors.gray150,
  textAlign: "center",
  fontWeight: "semibold",
  margin: "0 auto 16px",
});

export const notesWrapper = style({
  fontSize: 14,
  textAlign: "center",
  color: vars.colors.gray250,
  whiteSpace: "pre",
  textWrap: "wrap",
  maxWidth: 350,
  margin: "0 auto 10px",
});

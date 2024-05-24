import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const firstText = style({
  fontSize: 14,
  color: vars.colors.gray400,
  textAlign: "center",
  margin: "10px auto 0",
  lineHeight: 1.4,
});

export const brandText = style({
  fontSize: 14,
  color: vars.colors.gray350,
  textAlign: "center",
  fontWeight: 600,
  margin: "0 auto",
  lineHeight: 1.4,
});

export const nameText = style({
  fontSize: 18,
  color: vars.colors.gray150,
  textAlign: "center",
  fontWeight: 600,
  margin: "0 auto 16px",
  lineHeight: 1.4,
});

export const notesWrapper = style({
  fontSize: 14,
  textAlign: "center",
  color: vars.colors.gray250,
  whiteSpace: "pre",
  textWrap: "wrap",
  wordBreak: "break-word",
  maxWidth: 350,
  margin: "0 auto 10px",
  lineHeight: 1.4,
});

export const divider = style({
  width: "100%",
  height: 1,
  backgroundColor: vars.colors.gray600,
  margin: "24px 0",
  border: "none",
});

export const description = style({
  fontSize: 14,
  color: vars.colors.gray150,
  textAlign: "center",
  whiteSpace: "pre",
  textWrap: "wrap",
  wordBreak: "break-word",
  margin: "0 auto 14px",
  padding: "0 20px",
  boxSizing: "border-box",
  lineHeight: 1.4,
});

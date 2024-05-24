import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const button = style({
  backgroundColor: vars.colors.main1,
  fontSize: 18,
  borderRadius: 32,
  fontWeight: 600,
  textAlign: "center",
  color: "white",
  height: 45,
  padding: "12px 0",
  boxSizing: "border-box",
  border: "none",
  width: "100%",
  maxWidth: 500,
  margin: "0 auto",
  display: "block",
  cursor: "pointer",
});

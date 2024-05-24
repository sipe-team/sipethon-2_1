import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const button = style({
  padding: "32px",
  backgroundColor: vars.colors.main2,
  fontSize: "24px",
  borderRadius: "4px",
  fontWeight: "bold",
});

import { style } from "@vanilla-extract/css";

export const container = style({
  height: 50,
  textAlign: "center",
  color: "#8522B1",
  fontSize: 20,
  lineHeight: 1.4,
  padding: "12px 0",
  boxSizing: "border-box",
});

export const logo = style({
  display: "inline-block",
  verticalAlign: "middle",
  width: 100,
  height: "auto",
});

import { style } from "@vanilla-extract/css";

export const imgContainer = style({
  width: "100%",
  maxWidth: 500,
  margin: "0 auto",
  overflow: "hidden",
  display: "block",
  objectFit: "cover",
  borderRadius: 20,
});

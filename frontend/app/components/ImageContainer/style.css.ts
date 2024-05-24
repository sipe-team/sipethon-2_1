import { style } from "@vanilla-extract/css";

export const imgContainer = style({
  aspectRatio: "1/1",
  maxWidth: 500,
  margin: "0 auto",
  overflow: "hidden",
  display: "block",
  objectFit: "cover",
});

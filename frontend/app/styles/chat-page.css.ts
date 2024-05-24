import { style } from "@vanilla-extract/css";

export const layout = style({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  height: "100dvh",
});

export const chatContainer = style({
  padding: "12px",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const answerContainer = style({
  padding: "10px 20px",
  overflow: "auto",
});

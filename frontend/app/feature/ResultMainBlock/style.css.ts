import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const subText = style({
  color: vars.colors.gray400,
  fontSize: 14,
  textAlign: "center",
  marginBottom: 4,
});

export const noteWrapper = style({
  fontSize: 18,
  fontWeight: 600,
  color: vars.colors.main2,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const noteItem = style({
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
  lineHeight: 1.4,

  ":after": {
    content: "''",
    display: "block",
    width: 2,
    height: 16,
    backgroundColor: vars.colors.gray200,
    margin: "0 10px",
  },

  selectors: {
    "&:last-child:after": {
      display: "none",
    },
  },
});

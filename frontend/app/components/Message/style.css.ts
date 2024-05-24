import { vars } from "~/styles/theme.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const message = recipe({
  base: {
    padding: "10px 14px",
    fontSize: "14px",
    lineHeight: 1.4,
  },

  variants: {
    direction: {
      left: {
        borderRadius: "0 8px 8px 8px",
        background: vars.colors.pp1,
      },
      right: {
        borderRadius: "8px 0 8px 8px",
        background: vars.colors.yy1,
      },
    },
  },

  defaultVariants: {
    direction: "left",
  },
});

export type MessageVariants = RecipeVariants<typeof message>;

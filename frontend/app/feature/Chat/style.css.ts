import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
  },

  variants: {
    isMe: {
      true: {
        flexDirection: "row-reverse",
      },
      false: {},
    },
  },

  defaultVariants: {
    isMe: false,
  },
});

export type ChatVariants = RecipeVariants<typeof container>;

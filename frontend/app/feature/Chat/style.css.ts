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
        marginLeft: "20%",
      },
      false: {
        marginRight: "20%",
      },
    },
  },

  defaultVariants: {
    isMe: false,
  },
});

export type ChatVariants = RecipeVariants<typeof container>;

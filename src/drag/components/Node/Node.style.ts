import { RecipeVariantProps, sva } from "@styled-system/css";

export const NodeStyle = sva({
  slots: ["root", "block", "content"],
  base: {
    root: {
      position: "absolute",
      borderRadius: "50%",
      padding: "8px",
      backgroundColor: "#fff",
    },
    block: {
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      transition: "outline 0.2s ease-in-out, outlineColor 0.2s ease-in-out",
      "&:hover": {
        outlineWidth: "8px",
      },
    },
    content: {
      pointerEvents: "none",
      userSelect: "none",
      borderRadius: "50%",
      backgroundColor: "#fff",
      width: "75%",
      height: "75%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  // variants: {
  //   color: {
  //     none: {
  //       root: {
  //         bg: '#fff',
  //       },
  //     },
  //     hover: {
  //       root: {
  //         bg: '#f3f3f3',
  //       },
  //     },
  //   },
  // },
  // defaultVariants: {
  //   color: 'none',
  // },
});
export type TableVariants = RecipeVariantProps<typeof NodeStyle>;

import { RecipeVariantProps, sva } from "@styled-system/css";

export const NodeStyle = sva({
  slots: ["root", "node", "item", "content", "handleRight", "handleBottom"],
  base: {
    root: {
      position: "absolute",
    },
    node: {
      position: "relative",
      borderRadius: "50%",
      backgroundColor: "#fff",
    },
    item: {
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      transition: "outline 0.1s ease-in-out, outlineColor 0.1s ease-in-out",
      "&:hover": {
        outlineWidth: `6px`,
      },
    },
    content: {
      pointerEvents: "none",
      userSelect: "none",
      borderRadius: "50%",
      width: "80%",
      height: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    handleRight: {
      position: "absolute",
      borderRadius: "50%",
      padding: "0px 4px",
      color: "#fff",
      opacity: "0.7",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "1rem",
      transformOrigin: "left",
      transition: "transform 0.1s ease-in-out, padding 0.1s ease-in-out",
      userSelect: "none",
      "&:hover": {
        opacity: "1",
        transform: "scale(1.2) translateX(2px)",
        padding: "0px 6px",
      },
    },
    handleBottom: {
      position: "absolute",
      borderRadius: "50%",
      padding: "4px 0px",
      color: "#fff",
      opacity: "0.7",
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      fontWeight: "bold",
      fontSize: "1rem",
      transformOrigin: "top",
      transition: "transform 0.1s ease-in-out, padding 0.1s ease-in-out",
      userSelect: "none",
      "&:hover": {
        opacity: "1",
        transform: "scale(1.2) translateY(2px)",
        padding: "6px 0px",
      },
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

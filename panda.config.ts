import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
// import { preset } from "./src/preset";

const globalCss = defineGlobalStyles({
  "html, body": {
    display: "flex",
    flexDirection: "column",
    letterSpacing: "-0.02em",
  },
  body: {
    flexGrow: 1,
    fontFamily:
      '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  },
});

export default defineConfig({
  // Whether to use css reset
  // presets: [preset],
  importMap: "@styled-system",
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
  globalCss,
});

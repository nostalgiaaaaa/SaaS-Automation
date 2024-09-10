import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@preset": path.resolve(__dirname, "./src/preset"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@styled-system": path.resolve(__dirname, "./styled-system"),
    },
  },
});

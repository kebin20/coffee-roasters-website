import reactRefresh from "@vitejs/plugin-react-refresh";

// vite.config.js
import checker from "vite-plugin-checker";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
    reactRefresh(),
  ],
  // esbuild: {
  //   jsxFactory: "React.createElement",
  //   jsxFragment: "React.Fragment",
  // },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});

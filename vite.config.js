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
  ],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});

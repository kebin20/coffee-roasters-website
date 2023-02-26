// vite.config.js
// import checker from "vite-plugin-checker";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // checker({
    //   // e.g. use TypeScript check
    //   typescript: true,
    // }),
  ],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});

// FOR TS SETUP
// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "useDefineForClassFields": true,
//     "lib": ["DOM", "DOM.Iterable", "ESNext"],
//     "allowJs": false,
//     "skipLibCheck": true,
//     "esModuleInterop": false,
//     "allowSyntheticDefaultImports": true,
//     "strict": true,
//     "forceConsistentCasingInFileNames": true,
//     "module": "ESNext",
//     "moduleResolution": "Node",
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": true,
//     "jsx": "react-jsx"
//   },
//   "include": ["src"],
//   "references": [{ "path": "./tsconfig.node.json" }]
// }



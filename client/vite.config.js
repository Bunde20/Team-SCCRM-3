import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
    proxy: {
      "/api": {
        // target: "https://programon-palace.onrender.com/",
        target: "http://localhost:3000/",
        secure: false,
        changeOrigin: true,
      },
    },
  },
});

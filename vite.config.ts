import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The local API serves projects, model settings and generation tasks.
const api = {
  "/api": {
    target: process.env.MUSESHOW_API_URL ?? "http://127.0.0.1:8000",
    changeOrigin: true,
  },
};

export default defineConfig({
  plugins: [react()],
  server: { host: "127.0.0.1", port: 5173, proxy: api },
  preview: { host: "127.0.0.1", proxy: api },
});

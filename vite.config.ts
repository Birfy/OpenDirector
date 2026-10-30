import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ProxyOptions } from "vite";

// The local API serves projects, model settings and generation tasks.
const api: Record<string, ProxyOptions> = {
  "/api": {
    target: process.env.MUSESHOW_API_URL ?? "http://127.0.0.1:8000",
    changeOrigin: true,
    configure(proxy) {
      proxy.on("proxyReq", (upstream, _request, response) => {
        // Forward browser cancellation too: transient SAM previews should stop
        // inference when their editor closes, including behind the dev proxy.
        response.on("close", () => {
          if (!response.writableEnded) upstream.destroy();
        });
      });
    },
  },
};

export default defineConfig({
  plugins: [react()],
  server: { host: "127.0.0.1", port: 5173, proxy: api },
  preview: { host: "127.0.0.1", proxy: api },
});

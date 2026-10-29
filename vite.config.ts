import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Dev-only: serve Lovable CDN assets (/__l5e/assets-v1/...) through the
    // Lovable preview origin, since the local server has no asset middleware.
    ...(mode === "development"
      ? {
          proxy: {
            "/__l5e/assets-v1": {
              target: "https://id-preview--6fa73495-69a6-4729-8ab2-97a38a3a4fc5.lovable.app",
              changeOrigin: true,
            },
          },
        }
      : {}),
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

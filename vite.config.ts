import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "/fabicons/favicon.ico",
        "/fabicons/apple-touch-icon.png",
      ],
      manifest: {
        name: "Pop Balloons",
        short_name: "Pop Ballons",
        description: "Pop Balloons App for coffee bet",
        icons: [
          {
            src: "/fabicons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/fabicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/fabicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/fabicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        theme_color: "hsl(68, 100%, 91%)",
        background_color: "hsl(68, 100%, 91%)",
        display: "standalone",
      },
    }),
  ],
});

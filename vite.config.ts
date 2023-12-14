import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // devOptions: { enabled: true },
      manifest: {
        id: "oa-pwa-wallet-2024",
        name: "OpenAttestation",
        short_name: "OA Wallet",
        description:
          "OpenAttestation wallet built with Progressive Web Application (PWA)",
        display: "fullscreen",
        theme_color: "#5bbad5",
        background_color: "#ffffff",
        icons: [
          {
            src: "oa-wallet-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "oa-wallet-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "oa-wallet-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "oa-wallet-ios-screenshot.png",
            sizes: "948x648",
            type: "image/png",
            form_factor: "wide",
            label: "OA Wallet (iOS) Screenshot",
          },
          {
            src: "oa-wallet-ios-screenshot.png",
            sizes: "948x648",
            type: "image/png",
            form_factor: "narrow",
            label: "OA Wallet (iOS) Screenshot",
          },
        ],
        file_handlers: [
          {
            action: "./",
            accept: {
              "text/*": [".opencert", ".oa", ".trustdoc"],
            },
          },
        ],
      },
    }),
  ],
});

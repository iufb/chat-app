import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePluginFonts } from "vite-plugin-fonts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
        typescript: true,
      },
    }),
    VitePluginFonts({
      google: {
        families: [
          { name: "Source Sans Pro", styles: "ital,wght@0,400;1,200" },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});

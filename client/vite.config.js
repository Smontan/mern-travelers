import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5174,
    allowedHosts: [
      "dfccb71c-c74b-4526-9e12-6075dbe4a721-00-sl1aq9z8vekq.sisko.replit.dev",
      ".replit.dev"
    ],
  },
});

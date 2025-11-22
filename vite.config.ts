import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// REQUIRED for GitHub Pages
export default defineConfig({
  base: "/genai-apps/",
  plugins: [react()]
});

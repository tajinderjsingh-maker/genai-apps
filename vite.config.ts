import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/genai-apps/",
  plugins: [react()],
});

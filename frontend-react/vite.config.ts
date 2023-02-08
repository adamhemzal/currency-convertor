/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases"; // allows aliases

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  }
});

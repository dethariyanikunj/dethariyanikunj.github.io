import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function copyStaticAssets() {
  return {
    name: "copy-static-assets",
    closeBundle() {
      const distDir = resolve("dist");
      const assets = [
        "img",
        "favicon.svg",
        "Nikunj-Dethariya-Resume.pdf",
      ];

      for (const asset of assets) {
        const source = resolve(asset);
        if (!existsSync(source)) continue;
        cpSync(source, resolve(distDir, asset), { recursive: true });
      }

      // Create .nojekyll in dist folder to prevent GitHub Pages Jekyll processing
      writeFileSync(resolve(distDir, ".nojekyll"), "");
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  base: process.env.GITHUB_PAGES ? "/" : "./",
});

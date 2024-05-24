import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

installGlobals();

export default defineConfig({
  plugins: [
    remix({ presets: [vercelPreset()] }),
    vanillaExtractPlugin(),
    tsconfigPaths(),
  ],
});

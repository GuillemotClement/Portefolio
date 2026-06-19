// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      GITHUB_KEY: envField.string({ context: "server", access: "secret" }),
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});

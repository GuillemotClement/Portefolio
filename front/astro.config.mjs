// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  env: {
    schema: {
      MAILER_URL: envField.string({ context: "server", access: "secret" }),
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});

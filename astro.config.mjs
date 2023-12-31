import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
dotenv.config();
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
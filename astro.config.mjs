// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://EWappes11.github.io/portfolio", // 👈 change this
  base: "/portfolio/", // 👈 only needed for project repos
  vite: {
    plugins: [tailwindcss()],
  },
});

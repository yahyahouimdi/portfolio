// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://yahyahouimdi.github.io/portfolio/",
    base: "/portfolio",
    build: {
        assets: "assets",
    },
});

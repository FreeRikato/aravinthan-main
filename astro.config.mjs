// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
   site: "https://aravinthan.space",
   vite: {
       plugins: [tailwindcss()],
       build: {
           cssCodeSplit: true,
           minify: "terser",
           terserOptions: {
               compress: {
                   drop_console: true,
                   drop_debugger: true,
                   unused: true,
               },
               format: {
                   comments: false,
               },
           },
       },
   },

   experimental: {
       fonts: [{
           provider: fontProviders.google(),
           name: "Geist Mono",
           cssVariable: "--font-geist-mono"
       }]
   },

   image: {
       service: {
           entrypoint: "astro/assets/services/sharp",
       },
       remotePatterns: [],
   },

   prefetch: {
       defaultStrategy: "viewport",
       prefetchAll: true,
   },

   build: {
       format: "file",
   },

   integrations: [sitemap()],
});

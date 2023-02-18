import { fileURLToPath, URL } from "node:url";
import path from "path";

console.log("4")

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const PORT = 3000;
// https://vitejs.dev/config/
export default defineConfig({
  //root: path.resolve(__dirname, 'src'),
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: PORT,
  }, 
}); 

/*
import path from "path"
import vue from "@vitejs/plugin-vue";
//const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  //plugins: [vue()],
  server: {
    port: 8080,
    hot: true
  }
}
*/

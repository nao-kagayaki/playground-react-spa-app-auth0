import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src/client",
  // TIP MEMO
  // .envは共通でルートディレクトリに配置したい場合にはenvDirを指定する
  // https://vite.dev/config/shared-options.html#envdir
  envDir: "../..",
  build: { 
    outDir: "../../dist/client",
  },
});

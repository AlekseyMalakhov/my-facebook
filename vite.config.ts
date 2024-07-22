import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import viteCompression from "vite-plugin-compression";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), viteCompression({ algorithm: "brotliCompress" }), vanillaExtractPlugin()],
});

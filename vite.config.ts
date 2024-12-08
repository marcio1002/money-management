/* --- vite --- */
import { defineConfig } from "vite";

/* --- node --- */
import path from "node:path";

/* --- plugins --- */
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import electron from "vite-plugin-electron/simple";
import { visualizer } from "rollup-plugin-visualizer";
import inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        electron({
            main: {
                // Shortcut of `build.lib.entry`.
                entry: "electron/main.ts",
            },
            preload: {
                // Shortcut of `build.rollupOptions.input`.
                // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
                input: path.join(__dirname, "electron/preload.ts"),
            },
            // Ployfill the Electron and Node.js built-in modules for Renderer process.
            // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
            renderer: {},
        }),
        tsconfigPaths(),
        visualizer({
            title: "Build Size",
            filename: "./.inspect/size.html",
            template: "sunburst",
            gzipSize: true,
        }),
        inspect({
            build: true,
            outputDir: ".inspect",
        }),
    ],
});

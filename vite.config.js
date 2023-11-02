import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        open: true,
        fs: {
            // Allow serving files from one level up to the project root
            allow: [".."],
        },
    },
    build: {
        outDir: "build",
        minify: "esbuild",
        manifest: false,
        chunkSizeWarningLimit: 1000,
        polyfillModulePreload: true,
        assetsInlineLimit: 4096,
        cssCodeSplit: true,
        cssMinify: true,
        dynamicImportVarsOptions: {
            includeNodeModules: true,
            warnOnError: true,
        },
        modulePreload: {
            polyfill: true,
        },
        target: "esnext",
        commonjsOptions: {
            requireReturnsDefault: "auto",
        },
    },
    // mode: "production",
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
        jsx: "automatic",
    },
});

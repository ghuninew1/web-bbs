import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        open: true,
    },

    // build: {
    //     outDir: "build",
    //     minify: "esbuild",
    //     manifest: false,
    //     chunkSizeWarningLimit: 1000,
    //     assetsInlineLimit: 4096,
    //     cssCodeSplit: true,
    //     cssMinify: true,
    //     dynamicImportVarsOptions: {
    //         includeNodeModules: true,
    //         warnOnError: true,
    //     },
    //     modulePreload: {
    //         polyfill: true,
    //     },
    //     target: "esnext",
    //     commonjsOptions: {
    //         requireReturnsDefault: "auto",
    //     },
    // },
    // // mode: "production",
    // resolve: {
    //     alias: {
    //         "@": "/src",
    //     },
    // },
    // esbuild: {
    //     jsxInject: `import React from 'react'`,
    //     jsx: "automatic",
    // },
});

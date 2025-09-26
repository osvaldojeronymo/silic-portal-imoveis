import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portal-imoveis/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`
      }
    }
  }
})
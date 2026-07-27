/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-dom/client', 'react-router', 'react-router-dom'],
          'vendor-gsap':   ['gsap', '@gsap/react', 'gsap/SplitText', 'gsap/ScrollToPlugin', 'gsap/ScrollTrigger'],
          'vendor-swiper': ['swiper'],
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
});

/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-router', 'react-router-dom'],
          'vendor-gsap':   ['gsap', '@gsap/react'],
          'vendor-swiper': ['swiper'],
          'vendor-lottie': ['lottie-web'],
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

// SVG coordinate system, paths, viewBox, transforms
// Animate SVG manually (stroke-dasharray, morphs)

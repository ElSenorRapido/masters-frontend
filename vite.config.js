
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for static assets
    assetsDir: 'assets',  // Assets directory inside dist
    rollupOptions: {
      input: '/vercel/path0/index.html',
    },
  }
});
    
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // The directory where the build files will go
    assetsDir: 'assets', // Assets like JS, CSS, etc.
    rollupOptions: {
      input: '/index.html',
      output: {
        // Set up output directory structure
        dir: 'dist',
        format: 'es',
      }
    }
  }
})

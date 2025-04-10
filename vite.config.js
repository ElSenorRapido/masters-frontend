import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vite outputs to the correct directory
    rollupOptions: {
      input: '/index.html', // Set input to the right location for the entry HTML file
    }
  }
})

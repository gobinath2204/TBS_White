// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,  // Clears the dist folder before building
    sourcemap: true,    // Helps with debugging
    rollupOptions: {
      // make sure Rollup doesn’t choke on GSAP deep imports
      external: []
    }
  },
  server: {
    port: 3000
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})

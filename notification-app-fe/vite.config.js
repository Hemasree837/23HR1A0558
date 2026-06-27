import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'affordmed-logging-middleware': path.resolve(__dirname, '../logging-middleware/index.js')
    }
  },
  server: {
    port: 3000,
    strictPort: true,
  },
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
})

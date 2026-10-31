import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/SaipavankrishnaResume2026/',
  plugins: [react()],
  server: {
    host: true,
    port: 9999,
    strictPort: true,
    open: true,
  },
  preview: {
    host: true,
    port: 9999,
    strictPort: true,
    open: true,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access
    port: 3000, // Ensure it's running on the correct port
    strictPort: true,
    allowedHosts: ['vendor-portal.8848digitalcloud.com'], // Allow your domain
  },
})


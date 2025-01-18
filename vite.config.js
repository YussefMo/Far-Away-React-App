import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Far-Away-React-App/",
  build: {
    outDir: "dist",
  },
})

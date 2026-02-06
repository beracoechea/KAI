import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Cambia 'KAI' por './' para que las rutas sean relativas
  // Esto es lo más compatible con Firebase Hosting
  base: './' 
})
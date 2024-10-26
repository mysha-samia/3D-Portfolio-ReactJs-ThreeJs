import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  optimizeDeps: {
    // include: ['@react-three/drei'],
    // force: true,  // Forces Vite to optimize dependencies again
    // exclude: [],  
  },
})

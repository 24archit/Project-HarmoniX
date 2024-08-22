import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,  
    rollupOptions: {
      input: {
        main: './index.html',  // Ensure Vite is using the right entry point
      },
    },
  },
})

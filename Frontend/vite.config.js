import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../Backend/public/dist'), // output directory
    emptyOutDir: true, // ensure the directory is emptied before building
  },
})

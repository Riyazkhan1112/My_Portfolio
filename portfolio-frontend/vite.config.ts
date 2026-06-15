import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
          router: ['react-router-dom'],
        },
      },
    },
    sourcemap: false,
    minify: 'esbuild',
  },
  optimizeDeps: {
    include: ['framer-motion', 'react-icons'],
  },
})

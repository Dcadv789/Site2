import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/loops': {
        target: 'https://app.loops.so',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/loops/, ''),
        secure: false
      },
    },
  },
});
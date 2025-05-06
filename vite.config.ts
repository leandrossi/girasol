import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Pull env vars for the current mode into process.env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    // Modificación clave aquí:
    base: mode === 'production' ? '/girasol/' : '/',
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]'
        }
      }
    },
    server: {
      host: '0.0.0.0',
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
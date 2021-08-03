import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: '/',
  server: {
    port: 8081,
    open: false,
    cors: true

    // proxy: {
    //   '/api': {
    //     target: '127.0.0.1:7001',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path)=> path.replace('/api', '/')
    //   }
    // }
  }
});

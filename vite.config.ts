
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteImagemin from 'vite-plugin-imagemin';

  export default defineConfig({
    base: '/gabrielmartinez.github.io/',
    plugins: [
      react(),
      viteImagemin({
        pngquant: {
          quality: [0.7, 0.9],
          speed: 3,
        },
        optipng: {
          optimizationLevel: 5,
        },
        gifsicle: false,
        svgo: false,
        mozjpeg: false,
        webp: false,
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });
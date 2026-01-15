import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagetools from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      // Configure the image pipeline
      defaultDirectives: {
        // Automatically generate .webp format
        background: true,
        resize: {
          width: [320, 640, 960, 1280],
          format: ['webp'],
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Ensure .webp files are outputted correctly
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.webp')) {
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build', // Outputs compiled static files to 'build' directory, just like React
    emptyOutDir: true
  }
});

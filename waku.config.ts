import { defineConfig } from 'waku/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  basePath: process.env.BUILD_GITHUB ? "/waku-example-github-pages/" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});

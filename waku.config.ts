import { defineConfig } from 'waku/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  basePath: "/waku-example-github-pages/",
  vite: {
    plugins: [tailwindcss()],
  },
});

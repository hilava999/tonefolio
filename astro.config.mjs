// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  // output: 'server' を削除（デフォルトが静的ビルドになります）
});
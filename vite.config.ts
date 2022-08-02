import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { createStyleImportPlugin } from 'vite-plugin-style-import'
import vitePluginForArco from '@arco-plugins/vite-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueJsx(),
    vitePluginForArco({
      style: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
})

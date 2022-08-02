import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { createStyleImportPlugin } from 'vite-plugin-style-import'
import vitePluginForArco from '@arco-plugins/vite-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueJsx(),
    vitePluginForArco({
      style: true,
    }),
  ],
})

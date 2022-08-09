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
      style: false,
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
  build: {
    lib: {
      entry: resolve(__dirname, './src/components/index.ts'),
      name: 'arco-vue-pro-components',
      fileName: (format) => `arco-vue-pro-components.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

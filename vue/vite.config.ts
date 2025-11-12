import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [vue({ 
      template: {
          transformAssetUrls: {
              base: null,
              includeAbsolute: false,
          },
        },
    })],
    build: {
      outDir: "../",
    },    
    resolve: { 
      alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
  }
})

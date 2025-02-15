import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ 
    template: {
        transformAssetUrls: {
            base: null,
            includeAbsolute: false,
        },
    },
})],
  build: {
    outDir: "../laravel/public",
  },    
  resolve: { 
    alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
    },
},
})

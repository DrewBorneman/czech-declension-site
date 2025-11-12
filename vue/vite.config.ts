import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  console.log('✅ Loaded Vite Proxy Config');
  return {
    plugins: [vue({ 
      template: {
          transformAssetUrls: {
              base: null,
              includeAbsolute: false,
          },
        },
    })],
    // build: {
    //   outDir: "../",
    // },    
    resolve: { 
      alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    server: {
      host: 'localhost',
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8000/api',
          changeOrigin: true,
          secure: false,
        },
      },
    }
  }
})

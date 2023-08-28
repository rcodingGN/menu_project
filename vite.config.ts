import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

// const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, './src/components'),
      '@api': resolve(__dirname, './src/api')
    },
  },
  server: {
    port: 3001, // 端口号
    open: true, // 项目启动后自动打开浏览器
    host: 'localhost', // 本地域名
    https: false,
    hmr: true, // 热更新
    // overlay: { // 让浏览器同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    cors: true,
    proxy: { // 配置代理
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }

  }
})

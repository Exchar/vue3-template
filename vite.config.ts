import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    resolve: {
      alias: [
          {
              find: '@', //指向的是src目录
              replacement:resolve(__dirname,'src')
          }
      ]
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            scss: {
                charset: false,
                //需要在assets下创建对应的文件global.scss
                additionalData: '@import "./src/assets/style/global.scss";',
            },
        },
    },
  // 自动打开浏览器
  server: {
    host: '0.0.0.0', //通过ip的形式访问
    port: 8080, //端口号
    open:true, //自动打开浏览器
    //配置代理，但是我步推荐前端去代理，
    //因为打包后便不会在有代理，上线后是个坑
    proxy: {
      '/api': {
          target: 'musicapi.atian.work',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
})
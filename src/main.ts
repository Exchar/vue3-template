import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import store from "./store";

// 拆分配置
const app = createApp(App);

// 注册路由和vuex
app.use(router).use(store);

// 挂载到节点
app.mount('#app');

import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes : Array <RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect:'/home',
    },
    {
        path: '/home',
        name: 'Home',
        component:()=>import('../views/home/index.vue'),
    },
    {
        path: '/playing',
        name: 'Playing',
        component:()=>import('../views/playing/index.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(), //哈希值模式
    routes
})

// 暴露出去
export default router
import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
const routes=[
    {
        path: '/',
        name:'index',//首页
        component: () => import("@/views/index")

    },
    {
        path: '/anchor',
        name:'anchor',//主播
        component: () => import("@/views/anchor")

    },
    {
        path: '/store',
        name:'store',//商品
        component: () => import("@/views/store")

    },
    {
        path: '/online',
        name:'online',//直播
        component: () => import("@/views/online")

    },{
        path: '/user',
        name:'user',//个人中心
        component: () => import("@/views/user")

    },

]
const router =new vueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes,


})
export default router
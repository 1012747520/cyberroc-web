import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';  

import Register from '@/view/Register.vue';  
import Login from '@/view/Login.vue';
import Layout from '@/view/Layout.vue';
import Table from '@/view/StatisticsTable.vue';
import Center from '@/view/Center.vue';

const routes = [  
  { path: '/', component: Login }, // 登录页面
  { path: '/login', component: Login}, // 登录页面 
  { path: '/register', component: Register}, // 注册页面
  { 
    path: '/layout',   //大屏
    component: Layout, 
    children: [
      {path: '/statisticstable', component: Table} ,
      {path: '/center', component: Center} ,
    ]
  }, // 对应 Contact 组件的路由配置   
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
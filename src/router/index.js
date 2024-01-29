import { createRouter, createWebHistory } from 'vue-router';  
import AppTemplate from '@/view/AppTemplate.vue';  
import Register from '@/components/Register.vue';  
import Login from '@/components/Login.vue';
import ChangePw from '@/components/ChangePw.vue';

const routes = [  
  { path: '/', component: AppTemplate, name: '首页' }, // 对应 Home 组件的路由配置  
  { path: '/login', component: Login, name: '登录' }, // 对应 About 组件的路由配置  
  { path: '/register', component: Register, name: '注册' }, // 对应 Contact 组件的路由配置 
  { path: '/ChangePw', component: ChangePw, name: '修改密码' }, // 对应 Contact 组件的路由配置   
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router
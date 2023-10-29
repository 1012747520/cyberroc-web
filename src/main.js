import {createApp} from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import router from './router/route'

const app = createApp(App)
//axios.defaults.baseURL = 'http://1.tcp.vip.cpolar.cn:23446'  //家里服务器后端
axios.defaults.baseURL = 'http://localhost:8443'           //本机后端
//axios.defaults.baseURL = 'http://3.tcp.vip.cpolar.cn:10909'  //要公网访问本机后端



app.use(router)
app.mount('#app')
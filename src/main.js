import {createApp} from 'vue';
import Home from '@/view/home.vue';
import 'ant-design-vue/dist/antd.css'
import router from './router'

const app = createApp(Home)


app.use(router)
app.mount('#app')
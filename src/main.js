
import {createApp} from 'vue';
import App from '@/App.vue';
import 'ant-design-vue/dist/antd.css'
import router from './router'
import './input.css'
import messagePlugin from '@/utils/message'

const app = createApp(App)


app.use(router)
app.use(messagePlugin)

app.mount('#app')
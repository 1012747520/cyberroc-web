import {message} from 'ant-design-vue';

export default {
    install(app) {
        app.config.globalProperties.$message = message;
    }
}
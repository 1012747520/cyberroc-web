<!-- Login.vue -->
<template>
    <div style="height: 600px;">
      <h2 style="color: black; ">登录</h2>
      <form @submit.prevent="loginmethod">
        <label for="username" style="color: black;">账号:</label>
        <input type="text" v-model="username" required />
  
        <label for="password" style="color: black;">密码:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit" style="color: rgb(24, 1, 1);">登录</button>
      </form>
        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>
  
<script>
import { Modal } from 'ant-design-vue';
import {login} from '@/api/api';
export default {
    name: "Login",
    components: {login} ,
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      loginmethod() {
        // 实际项目中需要调用后端接口进行登录验证
        const req = {
            useraccount: this.username,
            password: this.password
          }
        login(req).then((res) => {
          console.log(res)
          if (res.data==="登录成功！"){
            Modal.info({
            title: "登录成功",
            content: "校验通过",
            okText: "知道了"
            })
          }else {
            Modal.info({
            title: "登录失败",
            content: res.data,
            okText: "知道了"
            })
          }
        })
        }
      }
    }
</script>
  
<style scoped>
  /* 添加一些样式，可以根据实际需要进行调整 */
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  button {
    margin-top: 16px;
    cursor: pointer;
  }
  
  .error {
    color: red;
    margin-top: 16px;
  }
</style>
  
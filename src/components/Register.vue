<!-- Register.vue -->
<template>
    <div style="height: 600px;">
      <h2 style="color: black;">注册</h2>
      <form @submit.prevent="register">
        <label for="username" style="color: black;">账号:</label>
        <input type="text" v-model="username" required />
  
        <label for="password" style="color: black;">密码:</label>
        <input type="password" v-model="password" required />
  
        <label for="confirmPassword" style="color: black;">确认密码:</label>
        <input type="password" v-model="confirmPassword" required />
  
        <button type="submit" style="color: rgb(24, 1, 1);">注册</button>
      </form>
  
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import { Modal } from 'ant-design-vue';
  import {signup} from '@/api/api';
  export default {
    components:{signup},
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
        error: ''
      };
    },
    methods: {
      register() {
        // 实际项目中需要调用后端接口进行用户注册
        if (this.password !== this.confirmPassword) {
            Modal.info({
            title: "错误信息",
            content: "两次密码不一致",
            okText: "知道了"
            })
        } else {
          // 注册成功的处理
          const param = {
            useraccount: this.username,
            password: this.password
          }
          console.log("密码符合规范")
          signup(param).then((res)=>{
            console.log(res)
            if (res.data == '账号注册成功！'){
              Modal.info({
                title: "注册成功",
               content: "注册成功，即将为您跳转至登陆页面",
                okText: "知道了"
            })
              this.$router.push('/login')
            }else {
            Modal.info({
            title: "注册失败",
            content: res.data,
            okText: "知道了"
            })
          }
          })
        }
      }
    }
  };
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
  
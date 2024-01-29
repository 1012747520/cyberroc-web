<!-- Login.vue -->
<template>
    <div style="height: 600px;">
      <h2 style="color: black;">修改密码</h2>
      <form @submit.prevent="loginmethod">
        <label for="username" style="color: black;">账号:</label>
        <input type="text" v-model="username" required />
  
        <label for="password" style="color: black;">原密码:</label>
        <input type="password" v-model="password" required />

        <label for="password" style="color: black;">新密码:</label>
        <input type="password" v-model="passwordNew" required />
  
        <button type="submit" style="color: rgb(24, 1, 1);">修改</button>
      </form>
        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>
  
<script>
import { Modal } from 'ant-design-vue';
import {changepassword} from '@/api/api';
export default {
    name: "ChangePw",
    components: {changepassword} ,
    data() {
      return {
        username: '',
        password: '',
        passwordNew: ''
      };
    },
    methods: {
      loginmethod() {
        // 实际项目中需要调用后端接口进行登录验证
        const req = {
            useraccount: this.username,
            oldpassword: this.password,
            newpassword: this.passwordNew
          }
          changepassword(req).then((res) => {
          console.log(res)
          if (res.data==="修改密码成功！"){
            Modal.info({
            title: "修改成功",
            content: "密码修改成功",
            okText: "关闭"
            })
          }else {
            Modal.info({
            title: "密码修改失败",
            content: res.data,
            okText: "关闭"
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
  
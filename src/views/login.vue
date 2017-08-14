<template>
  <div class="login_div">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <h1>登录</h1>
      <div class="login_content">
        <Form-item label="用户名" prop="userName">
          <Input placeholder="请输入用户名" v-model="formValidate.userName"></Input>
        </Form-item>
        <Form-item label="密码" prop="password">
          <Input placeholder="请输入密码" v-model="formValidate.password"></Input>
        </Form-item>
      </div>
      <Button type="primary" class="loginBtn" @click="loginSuccess">登录</Button>
    </Form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formValidate: {
          userName: '',
          password: ''
        },
        ruleValidate: {
          userName: [
            {required: true, message: '用户名不能为空', trriger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      loginSuccess () {
        this.$router.push('/manage')
      }
    }
  }
</script>

<style>
  h1{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .login_div{
    height: 400px;
    width: 400px;
    border: 1px solid #ccc;
    margin: 200px auto;
    border-radius: 10px;
    box-shadow: 0 0 10px #999;
  }
  .login_content{
    padding: 40px 30px;
    padding-left: 0;
  }
  .loginBtn{
    width: 320px;
    height: 40px;
    font-size: 14px;
    color: #fff;
  }
</style>

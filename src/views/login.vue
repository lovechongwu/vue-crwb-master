<template>
  <div class="login_div">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <h1 class="text-center">登录</h1>
      <div class="login_content">
        <Form-item label="用户名" prop="username">
          <Input type="text" placeholder="请输入用户名" v-model="formValidate.username"></Input>
        </Form-item>
        <Form-item label="密码" prop="password">
          <Input type="password" placeholder="请输入密码" v-model="formValidate.password"></Input>
        </Form-item>
        <div style="margin: 20px 0px 20px 30px;">
          <Checkbox v-model="formValidate.remember"></Checkbox>
          <span>记住密码</span>
          <a class="pull-right">忘记密码?</a>
        </div>
      </div>
      <div class="text-center">
        <Button type="primary" class="loginBtn" @click="isLogin">登录</Button>
      </div>
      <div class="text-center">
        <span>暂无账号?</span><a>立即注册</a>
      </div>
    </Form>
  </div>
</template>

<script>
  /* eslint-disable arrow-spacing,space-before-blocks,no-unused-vars */
  import axios from 'axios'
  import * as ac from '../data'
//  import qs from 'qs'
  export default {
    data () {
      return {
        formValidate: {
          username: '',
          password: '',
          remember: false
        },
        ruleValidate: {
          username: [
            {required: true, message: '用户名不能为空', trriger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    mounted () {
      this.rememberPwd()
    },
    methods: {
      rememberPwd () {
        if (ac.getCookie('loginName') || ac.getCookie('loginPwd')) {
          this.formValidate.username = (ac.getCookie('loginName') !== null) ? ac.getCookie('loginName') : ''
          this.formValidate.password = (ac.getCookie('loginPwd') !== null) ? ac.getCookie('loginPwd') : ''
        }
        if (ac.getCookie('loginPwd') !== '' && ac.getCookie('loginPwd') !== null) {
          this.formValidate.remember = true
        } else {
          this.formValidate.remember = false
        }
      },
      isLogin () {
        let that = this
        if (!that.formValidate.username) {
          this.$Notice.error({
            title: '请填写用户名'
          })
          return
        }
        if (!that.formValidate.password) {
          this.$Notice.error({
            title: '请填写密码'
          })
          return
        }
        axios.post('api/login?username=' + that.formValidate.username.trim('') + '&password=' + that.formValidate.password.trim('') + '')
          .then(function (res) {
            that.$store.commit('saveAdminInfo', res.data.objCollection[0])
            if (res.data.error && res.data.error.code === 200) {
              ac.deleteCookie('loginName')
              ac.deleteCookie('loginPwd')
              if (that.formValidate.remember === true) {
                ac.setCookie('loginName', that.formValidate.username, {expires: 7 * 24 * 60 * 60})
                ac.setCookie('loginPwd', that.formValidate.password, {expires: 7 * 24 * 60 * 60})
              }
              that.$router.push('/manage')
            } else {
              that.$Notice.error({
                title: '用户名或密码错误！'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    watch: {
      'formValidate.username' (newValue, oldValue) {
        this.rememberPwd()
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
    height: 380px;
    width: 400px;
    border: 1px solid #ccc;
    margin: 200px auto;
    border-radius: 10px;
    box-shadow: 0 0 10px #999;
  }
  .login_content{
    padding: 40px 30px 10px;
    padding-left: 0;
  }
  .loginBtn{
    width: 340px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    margin-bottom:10px;
  }
</style>

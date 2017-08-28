// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'babel-polyfill'
import store from './store/store'

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  watch: {
    '$route': 'checkLogin'
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      // 检查是否存在session
      // if (!this.getCookie('session')) {
      //   this.$router.push('/login')
      // } else {
      //   this.$router.push('/manage')
      // }
    }
  }
})

Vue.prototype.setCookie = (name, value, expiredays) => {
  var nowDate = new Date()
  nowDate.setDate(nowDate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + nowDate.toGMTString())
}

/* 获取cookie */
Vue.prototype.getCookie = (name) => {
  var arr = ''
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr === document.cookie.match(reg)) { return (arr[2]) } else { return null }
}

Vue.prototype.deleteCookie = (name, value, expiredays) => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = Vue.prototype.getCookie(name)
  if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() }
}

import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import manage from '@/views/manage'
import home from '@/views/home'
import variable from '@/views/variable'
import model from '@/views/model'
import maintainRules from '@/views/maintainRules'
import faultRules from '@/views/faultRules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      children: [
        {
          path: '/',
          name: 'home',
          component: home,
          meta: ['首页']
        },
        {
          path: 'variable',
          name: 'variable',
          component: variable,
          meta: ['基础数据', '变量模板']
        },
        {
          path: 'model',
          name: 'model',
          component: model,
          meta: ['基础数据', '型号管理']
        },
        {
          path: 'maintainRules',
          name: 'maintainRules',
          component: maintainRules,
          meta: ['基础数据', '保养规范']
        },
        {
          path: 'faultRules',
          name: 'faultRules',
          component: faultRules,
          meta: ['基础数据', '故障规范']
        }
      ]
    }
  ]
})


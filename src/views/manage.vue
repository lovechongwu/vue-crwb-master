<template>
  <div style="height: 100%;">
    <head-top></head-top>
    <Menu theme="dark" :active-name="activeName" class="left_menu menu">
      <Menu-item name="home">
        <router-link to="/">
          <i class="fa fa-dashboard"></i>
          首页
        </router-link>
      </Menu-item>
      <Submenu name="data">
        <template slot="title">
          基础数据
        </template>
        <Menu-item name="variable">
          <router-link to="/variable">变量模板</router-link>
        </Menu-item>
        <Menu-item name="model">
          <router-link to="/model">型号管理</router-link>
        </Menu-item>
        <Menu-item name="maintainRules">
          <router-link to="/maintainRules">保养规范</router-link>
        </Menu-item>
        <Menu-item name="faultRules">
          <router-link to="/faultRules">故障规范</router-link>
        </Menu-item>
      </Submenu>
    </Menu>
    <div class="rightContent">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import headTop from '../components/headTop'
  export default{
    data () {
      return {
        activeName: ''
      }
    },
    mounted: function () {
      this.activeName = this.$route.name
    },
    components: {
      headTop
    },
    methods: {
    }
  }
</script>

<style>
  .left_menu{
    min-height: calc(100% - 90px);
    width: 200px!important;
    text-align: left;
    float: left;
  }
  .left_menu a{
    color: inherit;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
    color: #41b883!important;
    background: none !important;
  }
  .rightContent{
    width: calc(100% - 200px);
    min-height: calc(100% - 90px);
    float: left;
  }
</style>

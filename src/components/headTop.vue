<template>
  <div class="headTop">
    <Row>
      <Col :span="24" class="headTip">
        <div class="pull-left">
          <a>从容设备智能运维平台</a>
        </div>
        <div class="pull-right">
          <span>系统通知</span>
          <span>意见反馈</span>
          <span>从容手机端</span>
          <span>关注从容</span>
        </div>
      </Col>
      <Col :span="24" class="headLogo">
        <span class="pull-left logoTitle">南京从容信息科技有限公司</span>
        <div class="pull-right">管理员</div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default{
    data () {
      return {
      }
    }
  }
</script>

<style>
  .headTop{
    height: 90px;
    border-bottom: 1px solid #ccc;
  }
  .headTip{
    height: 30px;
    background: #495060;
    line-height: 30px;
    padding: 0 20px;
  }
  .headTip a{
    color: #fff;
  }
  .headTip a:hover{
    text-decoration: underline;
  }
  .headTip span{
    width: 80px;
    text-align: center;
    display: inline-block;
    color: #fff;
    cursor: pointer;
  }
  .headTip span:hover{
    color: #41b883;
  }
  .headLogo{
    padding: 0 20px;
    line-height: 60px;
  }
  .logoTitle{
    font-size: 18px;
  }
</style>

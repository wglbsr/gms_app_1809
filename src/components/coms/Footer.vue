<template>
  <div class="foot-div">
    <tabbar class="footer-tabbar">
      <tabbar-item :link="{path:'/Content'}" selected>
        <img slot="icon" src="../../assets/img/home.png">
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/img/dev.png">
        <span slot="label">产品</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/img/dev.png">
        <span slot="label">待定</span>
      </tabbar-item>
      <tabbar-item badge="2" :link="{path:'/myInfo'}">
        <img slot="icon" src="../../assets/img/user-pic.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

  export default {
    name: "Footer",
  }
</script>

<style scoped>
  .footer-tabbar {
    /*position: absolute;*/
    position: fixed;
    /*background-color: #0bb20c;*/
  }
  .foot-div{
    z-index: 999;
  }
</style>

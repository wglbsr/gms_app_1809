<template>
  <div class="foot-div">
    <tabbar class="footer-tabbar">
      <tabbar-item :link="{path:'/Content'}">
        <img slot="icon" src="../../assets/img/dev.png">
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/img/dev.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../../assets/img/dev.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/img/dev.png">
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

  }
</style>

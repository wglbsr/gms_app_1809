<template>
  <div>
    <tabbar>
      <tabbar-item>
        <icon class="iconfont icon-chanpin"></icon>
        <span slot="label" >Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    name: "Footer",
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>

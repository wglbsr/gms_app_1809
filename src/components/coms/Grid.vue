<template>
  <div>
    <grid :cols="3" :show-vertical-dividers="false" :show-lr-borders="false">
      <grid-item label="全站地图" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="油机列表" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="基站列表" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="联系人列表" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="单位列表" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="用户列表" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="客户列表" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="发电记录" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
      <grid-item label="告警记录" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle} from 'vux'

  export default {
    name: "Grid",
    components: {
      Grid,
      GridItem,
      GroupTitle,
    },
  }
</script>

<style scoped>

</style>

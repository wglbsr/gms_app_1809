<template>
  <div class="content-div">
    <div>
      <grid :cols="3" :show-vertical-dividers="false">
        <grid-item label="全站地图" :link="{ path: '/generatorLocations'}" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/map.png">
        </grid-item>
        <grid-item label="油机列表" :link="{ path: '/generatorTable'}" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/generator.png">
        </grid-item>
        <grid-item label="基站列表" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
        </grid-item>
        <grid-item label="联系人列表" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
        </grid-item>
        <grid-item label="单位列表" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
        </grid-item>
        <grid-item label="用户列表" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
        </grid-item>
        <grid-item label="客户列表" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
        </grid-item>
        <grid-item label="发电记录" :link="{ path: '/generateTable'}" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/table.png">
        </grid-item>
        <grid-item label="告警记录" :link="{ path: '/alarmTable'}" class="grid-item">
          <img slot="icon" class="grid-item-img" src="../../assets/img/table.png">
        </grid-item>
      </grid>
      <scroller lock-x height="200px" ref="scrollerBottom" :scroll-bottom-offset="200"></scroller>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Content",
    methods: {
      showDevelopingTip: function () {
        this.$vux.toast.show({
          text: '正在开发中!'
        });

      }
    }
  }
</script>

<style scoped>
  .content-div {
    padding: 10px;
    height: auto;
    /*background-color: #1aad19;*/
  }

  .grid-item-img {
  }

  .grid-item {
    padding: 15px;
  }
</style>

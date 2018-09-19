<template>
  <div class="content-div">
    <grid :cols="3" :show-vertical-dividers="false">
      <grid-item label="全站地图" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
      </grid-item>
      <grid-item label="油机列表" :link="{ path: '/generatorTable'}" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png">
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
      <grid-item label="发电记录" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
      </grid-item>
      <grid-item label="告警记录" class="grid-item">
        <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="showDevelopingTip">
      </grid-item>
    </grid>
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
  }

  .grid-item-img {
  }

  .grid-item {
    padding: 15px;
  }
</style>

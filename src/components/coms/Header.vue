<template>
  <div class="header-div">
    <x-header :right-options="{showMore: true}" :left-options="{showBack: true}" @on-click-more="showMenus = true" style="">
      <div class="overwrite-title-demo" slot="overwrite-title">
        <x-input title="" placeholder="搜索" class="search-input"></x-input>
      </div>
    </x-header>
  </div>
</template>

<script>

  export default {
    name: "Header",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .search-input {
    background-color: white;
    font-size: 18px;
  }

  .overwrite-title-demo {
    height: 100%;
  }

  .header-div {
    top: 0px;
  }
</style>

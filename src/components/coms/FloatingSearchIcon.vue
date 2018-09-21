<template>
  <div>
    <img slot="icon" src="../../assets/img/search.png" class="search-img" @click="openSearchPage">
    <x-dialog v-model="showSearchDialog" class="search-dialog" @dialog-max-width="dialogMaxWidth" @dialog-width="dialogWidth">
        <group class="search-group" title="搜索条件">
          <x-input title="搜索内容"></x-input>
          <between-dates-picker @dateChange="dateChange"></between-dates-picker>
          <x-button type="primary" @click.native="closeSearchDialog">关闭</x-button>
        </group>
    </x-dialog>
  </div>
</template>

<script>
  import BetweenDatesPicker from './BetweenDatesPicker'

  export default {
    name: "FloatingSearchIcon",
    data() {
      return {
        dialogMaxWidth:"700px",
        showSearchDialog: false,
        dialogWidth:"90%",
        args: {test1: 1, test2: 2},
      }
    },
    components: {
      BetweenDatesPicker
    },
    methods: {
      openSearchPage: function () {
        this.showSearchDialog = true;
        this.$emit("clickFloat", this.args);
      },
      closeSearchDialog: function () {
        this.showSearchDialog = false;
      },
      dateChange: function (dateObj) {
        console.log(dateObj);
      }
    }
  }
</script>

<style scoped>
  .search-group{
    padding:15px 15px 50px 15px;
  }
  .search-img {
    float: right;
    z-index: 9999;
    background-color: #10aeff;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    position: fixed;
    right: 15px;
    bottom: 70px;
    padding: 10px;
  }
  .search-dialog{
  }
</style>

<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <c-header></c-header>
      <router-view class="content-div"></router-view>
      <c-footer></c-footer>
    </view-box>
  </div>
</template>
<script>
  import CFooter from '../components/coms/Footer.vue'
  import CHeader from '../components/coms/Header.vue'
  import CContent from '../components/coms/Content.vue'

  export default {
    name: "Home",
    components: {
      CFooter,
      CHeader,
      CContent,
    },
    data() {
      return {}
    },
    mounted: function () {
      this.$router.push({path: '/Content'});
    },
    methods: {},

  }
</script>

<style scoped>
  .content-div {
    margin-top: 50px;
    height: 100%;
  }
</style>

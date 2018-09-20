<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <div>
        <router-view></router-view>
      </div>
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

</style>

<template>
  <div>
    <c-header></c-header>
    <c-content></c-content>
    <c-footer></c-footer>
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
    }
  }
</script>

<style scoped>

</style>

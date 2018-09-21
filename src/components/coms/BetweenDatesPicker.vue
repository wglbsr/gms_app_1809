<template>
  <div>
    <datetime v-model="startTime" format="YYYY-MM-DD" @on-change="change" title="开始时间"></datetime>
    <datetime v-model="endTime" format="YYYY-MM-DD" @on-change="change" title="结束时间"></datetime>
  </div>
</template>

<script>
  export default {
    name: "BetweenDatesPicker",
    data() {
      return {
        startTime: "2018-08-01",
        endTime: "2018-10-01",
      }
    },
    methods: {
      change: function () {
        console.log("awdawdawd");
        this.$emit("dateChange", {startTime: this.startTime, endTime: this.endTime});
      },
    }
  }
</script>

<style scoped>

</style>

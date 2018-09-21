<template>
  <div id="map" :style="mapSize">
    <div class="showboard">
    </div>
  </div>
</template>

<script>
  import AMap from 'AMap'

  export default {
    name: 'generatorLocations',
    data() {
      return {
        makers: [],
        mapSize: {
          width: "100%",
          height: window.innerHeight - 100 + "px",
        },
        a: 6378245.0,
        ee: 0.00669342162296594323,
        customerNo: "",//sessionStorage.getItem("usercus"),
      }
    },
    created() {

    },

    methods: {},
    mounted: function () {
      let that = this;
      let map = new AMap.Map('map', {
        resizeEnable: true,
        zoom: 9
      });

      this.$http.post(this.API_DYNY.GMS.getGeneratorLocation, {user_cus: this.customerNo}, {emulateJSON: true}).then(res1 => {
        let data1 = [];
        if (res1.body.result && res1.body && res1.body.data.length > 0) {
          data1 = res1.body.data;
        }
        this.$http.post(this.API_DYNY.GMS.getWithoutGeneratorStationList, {customerNo: this.customerNo}, {emulateJSON: true}).then(res2 => {
          let stationData = res2.body.data;
          let data2 = [];
          for (let index in stationData) {
            data2.push({
              stationPosition: stationData[index].stationLongitude + "," + stationData[index].stationLatitude,
              mach_no: "暂无",
              stationId: stationData[index].stationNo,
              stationConnnectState: "暂无",
              stationState: "暂无",
              stationName: stationData[index].stationName
            });
          }
          let totalData = data1.concat(data2);
          if (!totalData || totalData.length == 0) {
            this.$message.info("暂时没有数据");
          } else {
            this.API_DYNY.utils.initMarkers(totalData, map, that.$router);
          }
        });
      });

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #map {
    /*height: 600px;*/
    /*width: 100%;*/
  }

  .tool-bar {
    z-index: 9999;
  }

</style>

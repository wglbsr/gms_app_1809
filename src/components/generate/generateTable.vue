<template>
  <div style="height: 100%;">
    <div class="generate-log-div">
      <divider>总数:{{totalNum}}</divider>
      <group>
        <div v-for="(item, index) in generateLogData">
          <cell :title="item.mach_name" :inline-desc="'发电时长:'+item.num_time+'min'" class="group-data-cell">
            市电停电:{{item.e_start_time|translateTime}}<br>
            市电恢复:{{item.e_end_time|translateTime}}<br>
            开始发电:{{item.start_time|translateTime}}<br>
            结束发电:{{item.end_time|translateTime}}
          </cell>
        </div>
      </group>
      <scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
                :scroll-bottom-offset="200">
        <div>
          <load-more :show-loading="onFetching"></load-more>
        </div>
      </scroller>
    </div>
    <search-icon @clickFloat="openSearchDiaglog"></search-icon>
  </div>
</template>
<script>
  import SearchIcon from '../coms/FloatingSearchIcon'

  export default {
    name: "generateTable",
    data() {
      return {
        scrollTop: 0,
        showSearchDialog: false,
        onFetching: false,
        allLoaded: false,
        generateLogData: [],
        customerNo: "",
        onlineLabel: "",
        totalNum: 0,
        pageNum: 1,
        generatorNoOrName: "",
        pageSize: 20,

      }
    },
    components: {
      SearchIcon,
    },
    mounted: function () {
      this.getGenerateLogData();
    },
    filters: {
      translateText: function (value) {
        if (!value) {
          return "暂无";
        } else {
          return value;
        }
      },
      translateTime: function (cellValue) {
        return cellValue ? cellValue.substring(2, 16) : "暂无";
      },
      showStationName: function (cellValue) {

      }
    },
    methods: {
      openSearchDiaglog: function () {
        this.showSearchDialog = true;
      },
      onScrollBottom: function () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.pageNum++;
          this.getGenerateLogData();
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset();
          });
        }
      },
      getGenerateLogData() {
        if (this.allLoaded) {
          this.$vux.toast.show({
            text: '已全部加载!'
          });
          return;
        }
        if (this.onFetching) {
          return;
        }
        this.onFetching = true;
        let params = {user_cus: this.customerNo, pageSize: this.pageSize, pageNum: this.pageNum};
        this.$http.post(this.API_DYNY.GMS.getGenerateLog, params, {emulateJSON: true}).then(res => {
          this.generateLogData = this.generateLogData.concat(res.body.data);
          this.totalNum = res.body.total_num;
          if (this.generateLogData.length == this.totalNum) {
            this.allLoaded = true;
          }
          this.onFetching = false;
        }).catch(function (error) {
          this.onFetching = false;
        });
      }
    }
  }
</script>

<style scoped>


</style>

<template>
  <div style="height: 100%;">
    <div class="generate-log-div">
      <divider>总数:{{totalNum}},当前:{{this.generateLogData.length}}</divider>
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
    <search-icon @doSearch="doSearch"></search-icon>
  </div>
</template>
<script>
  import SearchIcon from '../coms/FloatingSearchIcon'

  export default {
    name: "generateTable",
    data() {
      return {
        scrollTop: 0,
        onFetching: false,
        allLoaded: false,
        generateLogData: [],
        totalPageNum: 0,
        customerNo: sessionStorage.getItem("usercus"),
        onlineLabel: "",
        totalNum: 0,
        pageNum: 1,
        generatorNoOrName: "",
        pageSize: 20,
        condition: {},

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
      doSearch: function (params) {
        this.condition = params;
        if (params.keyWord) {
          this.condition.mach_no = params.keyWord;
        } else {
          delete this.condition.mach_no;
        }
        this.getGenerateLogData(true);
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
      getGenerateLogData(refresh) {
        if (this.onFetching) {
          return;
        }
        let params = {user_cus: this.customerNo, pageSize: this.pageSize, pageNum: this.pageNum};
        if (this.condition) {
          params = Object.assign(params, this.condition);
        }
        this.onFetching = true;
        this.$http.post(this.API_DYNY.GMS.getGenerateLog, params, {emulateJSON: true}).then(res => {
          this.totalNum = res.body.total_num;
          if (!refresh) {
            this.generateLogData = this.generateLogData.concat(res.body.data);
          } else {
            this.generateLogData = res.body.data;
          }
          if(this.pageNum>=res.body.total_page_num){
            this.$vux.toast.show({
              text: '已全部加载!'
            });
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

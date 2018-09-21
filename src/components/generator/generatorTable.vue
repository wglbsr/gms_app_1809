<template>
  <div>
    <div class="generator-table-div">

      <divider>总数:{{statisticInfo.totalGeneratorsNum}}</divider>
      <grid :cols="2" :show-lr-borders="false" class="statisticInfo-grid" :show-vertical-dividers="false">
        <grid-item class="status-grid-item" :label="onlineLabel">
          <div style="width:80px;height:80px;margin: auto;">
            <x-circle :percent="statisticInfo.onlinePercent" :stroke-width="10">
              <span>{{statisticInfo.onlineNum}}</span>
            </x-circle>
          </div>
        </grid-item>
        <!--      <grid-item class="status-grid-item" label="在线率">
                <div style="width:80px;height:80px;margin: auto;">
                  <x-circle :percent="statisticInfo.offlinePercent" :stroke-width="5">
                    <span>{{statisticInfo.offlineNum}}({{statisticInfo.offlinePercent|keepHowManyNum(1)}}%)</span>
                  </x-circle>
                </div>
              </grid-item>-->
        <grid-item class="status-grid-item" :label="generatingLabel">
          <div style="width:80px;height:80px;margin: auto;">
            <x-circle :percent="statisticInfo.generatingPercent" :stroke-width="10">
              <span>{{statisticInfo.generatingNum}}</span>
            </x-circle>
          </div>
        </grid-item>
        <!--      <grid-item class="status-grid-item" label="在线率">
                <div style="width:80px;height:80px;margin: auto;">
                  <x-circle :percent="statisticInfo.onlinePercent" :stroke-width="5">
                    <span>{{statisticInfo.onlineNum}}({{statisticInfo.onlinePercent|keepHowManyNum(1)}}%)</span>
                  </x-circle>
                </div>
              </grid-item>-->
      </grid>
      <group>
        <div v-for="(item, index) in generatorData">
          <cell @click.native="gotoGeneratorDetail(item.mach_no,item.mach_type)"
                is-link="true"
                :title="item.mach_name" :inline-desc="item.mach_no" class="group-data-cell" @cell-value-color="cellValColor">

            <strong>{{item.st_state}}，{{item.state1}}，{{item.load_mode|translateMode}}</strong><br>

            输出 : {{item.st_current|translateCurrent|keepHowManyNum(1)}}A，
            {{item.output_voltage|keepHowManyNum(1)}}V
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
  </div>
</template>
<script>
  export default {
    name: "generatorTable",
    data() {
      return {
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        allLoaded: false,
        generatorData: [],
        customerNo: "",
        cellValColor:"#27b151",
        onlineLabel: "",
        generatingLabel: "",
        statisticInfo: {
          totalGeneratorsNum: 0,
          onlineNum: 0,
          onlinePercent: 0,
          offlineNum: 0,
          offlinePercent: 0,
          generatingNum: 0,
          generatingPercent: 0,
          interruptionNum: 0,
          interruptionPercent: 0,
        },
        pageNum:
          1,
        pageSize:
          20,
      }
    },
    mounted: function () {
      this.getGeneratorData();
      this.initCircle();
    },
    filters: {
      showStationName: function (value) {
        if (!value) {
          return "暂无";
        } else {
          return value;
        }
      },
      translateMode:function(val){
        return !val?"空载":"带载";
      },
    },
    methods: {
      gotoGeneratorDetail: function (machNo, machType) {
        this.$router.push({path: '/generatorDetail', query: {machNo: machNo}});
      },
      onScrollBottom: function () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.pageNum++;
          this.getGeneratorData();
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset();
          });
        }
      },
      initCircle: function () {
        this.$http.post(this.API_DYNY.GMS.getMachineNumByStatus, {"user_cus": this.customerNo}, {emulateJSON: true}).then(function (res) {
          if (res.body.result) {
            if (res.body.data && res.body.data.allNum > 0) {
              this.statisticInfo.totalGeneratorsNum = res.body.data.allNum;
              this.statisticInfo.onlineNum = res.body.data.onlineNum;
              this.statisticInfo.generatingNum = res.body.data.generatingNum;
              this.statisticInfo.interruptionNum = res.body.data.interruptionNum;
              this.statisticInfo.offlineNum = res.body.data.offlineNum;
              this.statisticInfo.onlinePercent = (res.body.data.onlineNum / this.statisticInfo.totalGeneratorsNum) * 100;
              this.onlineLabel = "在线(" + this.API_DYNY.utils.keepHowManyNum(this.statisticInfo.onlinePercent, 1) + "%)";
              this.statisticInfo.offlinePercent = 100 - this.statisticInfo.onlinePercent;
              this.statisticInfo.generatingPercent = (res.body.data.generatingNum / this.statisticInfo.totalGeneratorsNum) * 100;
              this.generatingLabel = "发电(" + this.API_DYNY.utils.keepHowManyNum(this.statisticInfo.generatingPercent, 1) + "%)";
              this.statisticInfo.interruptionPercent = 100 - this.statisticInfo.generatingPercent;
              console.log(this.statisticInfo);
            }
          }
        });
      },
      getGeneratorData() {
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
        this.$http.post(this.API_DYNY.GMS.searchMachine, {
            user_cus: '',
            pageNum: this.pageNum,
            pageSize: this.pageSize,
          }, {emulateJSON: true}
        ).then(function (res) {
          if (res.body.result) {
            if (res.body.total_page_num == this.pageNum) {
              this.allLoaded = true;
            }
            this.generatorData = this.generatorData.concat(res.body.data);
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
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .status-grid-item {
    /*padding: 5px;*/

  }

  .statisticInfo-text-div {
    padding: 5px;
  }

  .statisticInfo-grid {
    margin-bottom: 20px;
  }

  .table-tr-th {
    background-color: aliceblue;
  }

  .tab-footer {
  }
</style>

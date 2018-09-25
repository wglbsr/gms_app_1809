<template>
  <div>
    <div class="alarm-detail-div">
      <divider>总数:{{totalNum}},当前{{this.alarmData.length}}</divider>
      <group>
        <div v-for="(item, index) in alarmData">
          <cell :title="item.machName" :inline-desc="item.mach_no" class="group-data-cell">
            {{item.action}}<br>
            {{item.inter_time}}
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
    <simple-search-icon @click.native="openSearchDialog">
    </simple-search-icon>
    <x-dialog v-model="showSearchDialog" class="search-dialog" @dialog-max-width="dialogMaxWidth" mask-z-index="9"
              @dialog-width="dialogWidth">
      <group class="search-group" title="搜索条件">
        <popup-picker title="告警类型" :data="alarmTypeOptions" v-model="alarmType" :columns="2"
                      popup-title="告警类型"
                      popup-style="z-index:10" show-name="true"></popup-picker>
        <datetime v-model="startDate" format="YYYY-MM-DD" @on-change="dateChange" title="开始时间:"></datetime>
        <datetime v-model="endDate" format="YYYY-MM-DD" @on-change="dateChange" title="结束时间:"></datetime>
        <x-button type="primary" @click.native="doSearch">搜索</x-button>
        <x-button type="warn" @click.native="closeSearchDialog">关闭</x-button>
      </group>
    </x-dialog>
  </div>
</template>

<script>
  import SimpleSearchIcon from '../coms/SimpleSearchIcon'

  export default {
    name: "alarmTable",
    components: {
      SimpleSearchIcon,
    },
    data() {
      return {
        scrollTop: 0,
        onFetching: false,
        alarmData: [],
        showSearchDialog: false,
        customerNo: sessionStorage.getItem("usercus"),
        totalNum: 0,
        pageNum: 1,
        pageSize: 20,
        startDate: "",
        endDate: "",
        alarmType: "0",
        alarmTypeOptions: [
          {
            value: '0',
            name: '全部'
          }, {
            value: '1',
            name: '油机启动'
          }, {
            value: '2',
            name: '油机熄火'
          }, {
            value: '3',
            name: '市电关闭'
          }, {
            value: '4',
            name: '请注意，油量低于20%'
          }, {
            value: '5',
            name: '温度过高'
          }, {
            value: '6',
            name: '市电恢复'
          }, {
            value: '7',
            name: '电压大于55V'
          }],
      }
    },
    mounted: function () {
      this.getData();
    },
    methods: {
      onScrollBottom: function () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.pageNum++;
          this.getData();
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset();
          });
        }
      },
      dateChange: function () {

      },
      alarmTypeChange: function () {

      },
      dateChange: function (val) {
      },
      doSearch: function () {
        this.getData(true);
        this.showSearchDialog = false;
      },
      closeSearchDialog: function () {
        this.showSearchDialog = false;
      },
      openSearchDialog: function () {
        this.showSearchDialog = true;
      },
      getData: function (refresh) {
        if (this.onFetching) {
          return;
        }
        let params = {user_cus: this.customerNo, pageSize: this.pageSize, pageNum: this.pageNum};
        if (this.alarmType) {
          params.alarmType = this.alarmType[0];
        }
        if (this.startDate) {
          params.startDate = (Date.parse(new Date(this.startDate + " 00:00:00"))) / 1000;
        }
        if (this.endDate) {
          params.endDate = (Date.parse(new Date(this.endDate + " 23:59:59"))) / 1000;
        }
        this.onFetching = true;
        this.$http.post(this.API_DYNY.GMS.getSiteWarningList, params, {emulateJSON: true}).then(res => {
          if (!refresh) {
            this.alarmData = this.alarmData.concat(res.body.data);
          } else {
            this.alarmData = res.body.data;
          }
          this.totalNum = res.body.total_num;
          if (this.pageNum >= res.body.total_page_num) {
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
  .group-data-cell {
    /*margin-top: 1px !important;*/
    /*margin-bottom: 1px !important;*/
    border-bottom: 1px solid gray;
  }

  .search-dialog {
    z-index: 9;
  }

  .search-group {
    padding: 15px;
  }
</style>

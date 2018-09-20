<template>
  <div>
    <x-header :right-options="{showMore: true}" :left-options="{showBack: true}" @on-click-more="showMenus = true"
              style="">
      油机管理系统-告警记录
    </x-header>

    <div class="alarm-detail-div">
      <divider>总数:{{totalNum}}</divider>
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
          <load-more :show-onFetching="onFetching"></load-more>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
  export default {
    name: "alarmTable",
    data() {
      return {
        scrollTop: 0,
        onFetching: false,
        allLoaded: false,
        alarmData: [],
        customerNo: "",
        totalNum: 0,
        pageNum: 1,
        pageSize: 20,
      }
    },
    mounted: function () {
      this.getData();
      console.log(this.$router);
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
      getData: function () {
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
        this.$http.post(this.API_DYNY.GMS.getSiteWarningList, params, {emulateJSON: true}).then(res => {
          this.alarmData = this.alarmData.concat(res.body.data);
          this.totalNum = res.body.total_num;
          if (this.alarmData.length == this.totalNum) {
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
  .group-data-cell {
    /*margin-top: 1px !important;*/
    /*margin-bottom: 1px !important;*/
    border-bottom: 1px solid gray;
  }
</style>

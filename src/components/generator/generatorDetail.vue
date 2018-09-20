<template>
  <div>
    <x-header :right-options="{showMore: true}" :left-options="{showBack: true}" @on-click-more="showMenus = true"
              style="">
      油机管理系统-油机详情
    </x-header>

    <div class="generator-detail-div">
      <grid :cols="4" :show-lr-borders="false" class="status-grid" :show-vertical-dividers="false">
        <grid-item class="status-grid-item">
          <div>状态: {{generatorData.state1}}</div>
        </grid-item>
        <grid-item class="status-grid-item">
          <div>类型:{{generatorData.fuelType}} {{generatorData.stationType}}</div>
        </grid-item>
        <grid-item class="status-grid-item">
          <div>市电: {{generatorData.Acity_electricity}}</div>
        </grid-item>
        <grid-item class="status-grid-item">
          <div>GPS: <i class="iconfont icon-signal " v-if="generatorData.st_state!='离线'"></i><i
            class="iconfont icon-no-signal " v-else></i></div>
        </grid-item>
      </grid>

      <grid :cols="1" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item>
          <div style="width:150px;height:150px;margin: auto;padding-bottom: 10px">
            <x-circle :percent="generatorData.lank_per|keepHowManyNum(0)" :stroke-width="5">
              <span>{{generatorData.lank_level|keepHowManyNum(1)}} L({{generatorData.lank_per|keepHowManyNum(0)}}%)</span>
            </x-circle>
            <div class="text-align-center temperature-div"><i class="iconfont icon-wendu3">{{generatorData.external_temperature|keepHowManyNum(1)}}°C</i>
            </div>
          </div>
        </grid-item>
      </grid>


      <grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item>
          <divider><i class="iconfont icon-voltage"></i></divider>
          <div class="text-align-center detail-content">{{generatorData.start_Voltage|keepHowManyNum(1)}}V</div>
          <div class="text-align-center">启动电压</div>
        </grid-item>
        <grid-item>
          <divider><i class="iconfont icon-voltage"></i></divider>
          <div class="text-align-center detail-content">{{generatorData.al_voltage|keepHowManyNum(1)}}V</div>
          <div class="text-align-center">电池电压</div>
        </grid-item>
        <grid-item>
          <divider><i class="iconfont icon-dianliu2"></i></divider>
          <div class="text-align-center detail-content">{{generatorData.st_current|translateCurrent|keepHowManyNum(1)}}A
          </div>
          <div class="text-align-center">输出电流</div>
        </grid-item>
        <grid-item>
          <divider><i class="iconfont icon-xiaoshi2"></i></divider>
          <div class="text-align-center detail-content">{{generatorData.sum_time}}min</div>
          <div class="text-align-center">发电时长</div>
        </grid-item>
        <grid-item>
          <divider><i class="iconfont icon-shijianfenzhong"></i></divider>
          <div class="text-align-center detail-content">{{generatorData.maintain_time|keepHowManyNum(2)}}H</div>
          <div class="text-align-center">距离保养</div>
        </grid-item>
        <grid-item>
          <divider><i class="iconfont icon-eryanghuatan"></i></divider>
          <div class="text-align-center detail-content">{{generatorData.st_co|keepHowManyNum(2)}}ppm</div>
          <div class="text-align-center">CO排放量</div>
        </grid-item>
      </grid>


      <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item label="启动">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="startGenerator">
        </grid-item>
        <grid-item label="熄火">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="stopGenerator">
        </grid-item>
        <grid-item label="模式切换">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="switchMode">
        </grid-item>
        <grid-item label="维护模式">
          <img slot="icon" class="grid-item-img" src="../../assets/img/dev.png" @click="switchToMaintainMode">
        </grid-item>
      </grid>


    </div>
  </div>
</template>

<script>
  export default {
    name: "generatorDetail",
    data() {
      return {
        machNo: this.$route.query.machNo,
        connected: false,
        st_state: "",
        getDataTimer: null,
        generatorData: {},
      }
    },
    mounted: function () {
      this.getGeneratorDetail();
      this.setRefreshDataTimer();
    },
    beforeDestroy: function () {
      this.clearRefreshDataTimer();
    },
    filters: {},
    methods: {
      startGenerator: function () {
        this.showDevelopingTip();

      },
      setRefreshDataTimer: function () {
        let that = this;
        this.getDataTimer = setInterval(function () {
          that.getGeneratorDetail();
        }, 15000);
      },
      clearRefreshDataTimer: function () {
        if (this.getDataTimer != null) {
          clearTimeout(this.getDataTimer);
          this.getDataTimer = null;
        }
      },
      stopGenerator: function () {
        this.showDevelopingTip();

      },
      switchMode: function () {
        this.showDevelopingTip();

      },
      switchToMaintainMode: function () {
        this.showDevelopingTip();
      },
      showDevelopingTip: function () {
        this.$vux.toast.show({
          text: '正在开发中!'
        });

      },
      getGeneratorDetail: function () {
        this.$http.post(this.API_DYNY.GMS.getSiteDetailed1, {"mach_no": this.machNo}, {emulateJSON: true}).then(res => {
          if (res.data.data[0]) {
            this.generatorData = res.data.data[0];
            this.st_state = res.data.data[0].st_state;
            this.connected = this.st_state !== "离线";
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
    }
  }
</script>

<style scoped>

  .generator-detail-div {
    padding: 5px;
  }

  .status-div span {
    /*font-size: 18px;*/
  }

  .status-grid-item {
    height: 50px;
  }

  .detail-content {
    font-weight: bold;
  }

  .text-align-center {
    text-align: center;
  }

  .icon-signal {
    color: mediumseagreen;
  }

  .icon-no-signal {
    color: gray;
  }

  .temperature-div {
    /*margin-bottom: 5px;*/
  }
</style>

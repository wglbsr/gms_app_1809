<template>
  <div class="header-div">
    <x-header slot="header" class="commond-header"
              :right-options="{showMore: true}"
              :left-options="{showBack:$route.name != 'Content'}"
              @on-click-more="showConditionDialog"
    >
      {{$route.meta.title}}
    </x-header>
    <div v-transfer-dom>
      <x-dialog v-model="showConditionDialogFlag" class="condition-dialog" @dialog-max-width="dialogMaxWidth"
                @dialog-width="dialogWidth">
        <div class="condition-div">
          <group class="condition-group">
            <x-input title="内容" v-model="condition.content"></x-input>
          </group>
          <group>
            <x-button type="primary" @click.native="closeDialog">搜索</x-button>
          </group>
          <div @click="showConditionDialogFlag=false">
            <span class="vux-close"></span>
          </div>
        </div>

      </x-dialog>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Header",
    data() {
      return {
        condition: {
          content: "",
          dialogMaxWidth: "600px",
          dialogWidth: "90%",
        },
        showConditionDialogFlag: false,
        // showBackFlag:true
      }
    },
    mounted: function () {
      // console.log(this.$route.name);
      // this.showBackFlag = this.$route.name != 'Content';
    },
    methods: {
      closeDialog: function () {
        this.showConditionDialogFlag = false;
      },
      showConditionDialog: function () {
        this.showConditionDialogFlag = true;
      }
    }
  }
</script>

<style scoped>
  .header-div {
    top: 0px;
  }

  .condition-div {
    padding: 50px 15px;
  }

  .condition-group {

  }

  .commond-header {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 999;
  }
</style>

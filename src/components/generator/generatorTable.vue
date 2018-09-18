<template>
  <div>
    <c-header></c-header>
    <div>
      <x-table :cell-bordered="false" full-bordered style="background-color:#fff;">
        <thead>
        <tr class="table-tr-th">
          <th>序号</th>
          <th>油机/基站名称</th>
          <th>剩余油量</th>
          <th>联网状态</th>
          <th>市电状态</th>
        </tr>
        </thead>
        <tbody v-for="(item, index) in generatorData">
        <tr>
          <td>{{index+1}}</td>
          <td>{{item.mach_name}}</td>
          <td>{{item.lank_level}}</td>
          <td>{{item.st_state}}</td>
          <td>{{item.Acity_electricity}}</td>
        </tr>
        </tbody>
      </x-table>

    </div>
    <c-footer></c-footer>
  </div>
</template>
<script>
  import CFooter from '../../components/coms/Footer.vue'
  import CHeader from '../../components/coms/Header.vue'
  import {XTable, LoadMore} from 'vux'

  export default {
    name: "generatorTable",
    components: {
      CFooter,
      CHeader,
      XTable,
      LoadMore
    },
    data() {
      return {
        generatorData: [{
          Acity_electricity: "市电",
          st_state: '离线',
          lank_level: 0,
          mach_name: "测试",

        }],
        pageNum: 1,
        pageSize: 20,
      }
    },
    mounted: function () {
      this.getGeneratorData();
    },
    methods: {
      getGeneratorData() {
        //http://www.dy-iot.net:10130/ems/site/searchMachine.do
        this.$http.post("http://www.dy-iot.net:10130/ems/site/searchMachine.do", {
          user_cus: '',
        }).then(function (res) {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  .table-tr-th {
    background-color: aliceblue;
  }
</style>

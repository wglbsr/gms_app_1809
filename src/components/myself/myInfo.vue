<template>
  <div style="height: 100%;">
    <div>
      <div class="user-pic-div">
      </div>
      <group>
        <cell is-link="true" title="修改密码" :link="{path:'/changePassword'}">
        </cell>
        <cell is-link="true" title="我的信息">
        </cell>
        <cell is-link="true" title="关于">
        </cell>
        <cell is-link="true" title="退出登录" @click.native="showConfirm">
        </cell>
      </group>
      <div v-transfer-dom>
        <confirm v-model="showLogoutConfirm"
                 title="退出登录提示"
                 @on-cancel="onCancel"
                 @on-confirm="onConfirm"
        >
          <p style="text-align:center;">确定退出登录吗?</p>
        </confirm>
      </div>
    </div>
    <scroller lock-x height="100px" ref="scrollerBottom" :scroll-bottom-offset="200"></scroller>
  </div>
</template>

<script>
  export default {
    name: "myInfo",
    data() {
      return {
        showLogoutConfirm: false,
      }
    },
    methods: {
      logout: function () {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("userLevel");
        sessionStorage.removeItem("usercus");
        this.$router.push('/login');
      },
      onCancel: function () {
        this.showLogoutConfirm = false;
      },
      onConfirm: function () {
        this.showLogoutConfirm = false;
        this.logout();
      },
      showConfirm: function () {
        this.showLogoutConfirm = true;
      }
    }
  }
</script>

<style scoped>
  .user-pic-div {
    height: 200px;
  }
</style>

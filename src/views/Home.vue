<template>
  <div class="about">
    <router-view />
    <van-tabbar v-model="active">
      <router-link to="/home/index">
        <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      </router-link>
      <router-link to="/home/guide">
        <van-tabbar-item name="search" icon="search">指南</van-tabbar-item>
      </router-link>
      <router-link to="/home/site">
        <van-tabbar-item name="friends" icon="aim">站点</van-tabbar-item>
      </router-link>
      <router-link to="/home/user">
        <van-tabbar-item name="setting" icon="user-o">我的</van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style scoped>
a {
  width: 25%;
  line-height: 50px;
}
.van-tabbar-item {
  height: 50px;
}
</style>

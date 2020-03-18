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
      <!-- <router-link>
        <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
      </router-link>-->
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
  width: 33%;
  line-height: 50px;
}
.van-tabbar-item {
  height: 50px;
}
</style>

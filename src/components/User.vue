<template>
  <div class="index">
    <header class="header">用户信息</header>
    <div class="user-info-card">
      <div class="user-avatar">
        <img src="../assets/logo.jpg" alt />
      </div>
      <div class="user-info">
        <div class="user-name">丰文雅</div>
        <div class="user-phone">13164339130</div>
      </div>
    </div>
    <!-- 退出登录 -->
    <router-link to="/">
      <div class="logout">退出登录</div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100vh - 50px);
  background-color: rgb(248, 249, 236);
  font-size: 20px;
}
.header {
  height: 50px;
  line-height: 50px;
  color: rgb(237, 210, 104);
}
.user-info-card {
  width: 90%;
  margin: 20px auto;
  height: 200px;
  border: solid 1px rgb(240, 173, 114);
  box-shadow: 2px 3px 2px rgb(238, 152, 77);
  border-radius: 10px;
  display: flex;
}
.user-avatar {
  width: 150px;
  height: 200px;
}
.user-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: block;
  margin: 50px auto;
}
.user-info {
  width: 200px;
  height: 200px;
  padding: 40px 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user-name {
  width: 170px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 5px;
  border-bottom: dashed 1px rgb(58, 57, 57);
}
.user-phone {
  width: 170px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 5px;
  border-bottom: dashed 1px rgb(58, 57, 57);
}
.logout {
  width: 90%;
  height: 45px;
  line-height: 45px;
  border-radius: 10px;
  margin: 10px auto;
  background: linear-gradient(45deg, rgb(198, 125, 125), rgb(238, 229, 96));
}
</style>

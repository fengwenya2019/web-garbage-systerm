<template>
  <div class="index">
    <header class="header">用户信息</header>
    <div class="user-info-card">
      <div class="info-item">
        <span class="item-title">用户名：</span>
        <span>丰文雅</span>
      </div>
      <div class="info-item">
        <span class="item-title">姓名：</span>
        <span>丰文雅</span>
      </div>
      <div class="info-item">
        <span class="item-title">手机：</span>
        <span>13164339130</span>
      </div>
      <div class="info-item">
        <span class="item-title">邮箱：</span>
        <span>fengwenya123@163.com</span>
      </div>
      <div class="info-item">
        <span class="item-title">密码：</span>
        <span>123456789</span>
      </div>
      <div class="info-item">
        <span class="item-title">校区：</span>
        <span>龙子湖</span>
      </div>
      <router-link to="/edit">
        <div class="edit-info">编辑信息</div>
      </router-link>
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
* {
  box-sizing: border-box;
}
.index {
  width: 100%;
  height: calc(100vh - 50px);
  background-color: rgb(242, 252, 251);
  font-size: 20px;
}
.header {
  height: 50px;
  line-height: 50px;
  color: rgb(25, 125, 247);
}
.user-info-card {
  width: 90%;
  margin: 20px auto;
  height: 450px;
  font-size: 16px;
}
.info-item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  text-align: left;
  background-color: #fff;
  margin: 10px 0;
}
.item-title {
  color: rgb(25, 125, 247);
}
.edit-info {
  color: rgb(25, 125, 247);
  text-align: left;
  padding: 10px;
}
.logout {
  width: 90%;
  height: 45px;
  line-height: 45px;
  border-radius: 10px;
  margin: 10px auto;
  background: rgb(25, 125, 247);
  color: #fff;
  font-size: 16px;
}
</style>

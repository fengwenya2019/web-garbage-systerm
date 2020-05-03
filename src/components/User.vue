<template>
  <div class="index">
    <header class="header">用户信息</header>
    <div class="user-info-card">
      <div class="info-item">
        <span class="item-title">用户名：</span>
        <span>{{userInfo.userinfoUsername}}</span>
      </div>
      <div class="info-item">
        <span class="item-title">姓名：</span>
        <span>{{userInfo.userinfoName}}</span>
      </div>
      <div class="info-item">
        <span class="item-title">手机：</span>
        <span>{{userInfo.userinfoPhone}}</span>
      </div>
      <div class="info-item">
        <span class="item-title">邮箱：</span>
        <span>{{userInfo.email}}</span>
      </div>
      <div class="info-item">
        <span class="item-title">密码：</span>
        <span>{{userInfo.userinfoPassword}}</span>
      </div>
      <div class="info-item">
        <span class="item-title">校区：</span>
        <span>{{userInfo.cap}}</span>
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
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['userInfo'])
  },
  created(){
    const tel = sessionStorage.getItem("tel");
    this.$store.dispatch("queryUserInfo",{tel:tel});
  },
  mounted(){
    
  },
  methods:{
    
    
  }
};
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
  border-radius: 45px;
  margin: 10px auto;
  background: rgb(25, 125, 247);
  color: #fff;
  font-size: 16px;
}
</style>

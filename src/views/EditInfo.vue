<template>
  <div class="edit">
    <header class="header">
      <router-link to="/home/user">
        <div class="back">
          <van-icon name="arrow-left" />
        </div>
      </router-link>
      <div class="info">个人资料</div>
    </header>
    <div class="form">
      <van-form @submit="editUserInfo">
        <van-field v-model="userInfo.userinfoUsername" name="userinfoUsername" label="用户名" placeholder="用户名" />
        <van-field v-model="userInfo.userinfoName" name="userinfoName" label="姓名" placeholder="姓名" />
        <van-field v-model="userInfo.userinfoPhone" name="userinfoPhone" label="手机" placeholder="手机" disabled>
          <template #button>
            <span class="tel-tip">手机号不可更改!</span>
          </template>
        </van-field>
        <van-field v-model="userInfo.email" name="email" label="邮箱" placeholder="邮箱" />
        <van-field v-model="userInfo.userinfoPassword" name="userinfoPassword" label="密码" placeholder="密码" />
        <van-field v-model="userInfo.cap" name="cap" label="校区" placeholder="校区" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">确认</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from "vant";
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['userInfo'])
  },
  data() {
    return {
  
    };
  },
  created(){
    const tel = sessionStorage.getItem("tel");
    this.$store.dispatch("queryUserInfo",{tel:tel});
  },
  methods: {
    editUserInfo(obj) {
      const userId = sessionStorage.getItem("userId");
      const param = {
        userinfoName: obj.userinfoName,
        userinfoUsername: obj.userinfoUsername,
        userinfoPhone: obj.userinfoPhone,
        userinfoPassword: obj.userinfoPassword,
        email: obj.email,
        cap: obj.cap,
      }
      this.$store.dispatch("editUserInfo",{id:userId,param:param,that:this});
    }

  }
};
</script>

<style scoped>
.edit {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.header {
  height: 50px;
  line-height: 50px;
  display: flex;
}
.back {
  width: 60px;
  height: 50px;
  line-height: 58px;
  font-size: 25px;
  color: black;
}
.info {
  margin-left: 100px;
  font-size: 20px;
}
.form {
  width: 90%;
  height: 180px;
  margin: 10px auto 50px;
  border-radius: 10px;
  padding: 5px;
  font-size: 16px;
}
.van-cell {
  font-size: 16px;
}
.campus {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  text-align: left;
  padding: 0 45px;
}
.van-radio-group--horizontal {
  height: 45px;
  padding: 0 40px;
}
.tel-tip{
  color: red;
}
</style>

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
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" />
        <van-field v-model="name" name="姓名" label="姓名" placeholder="姓名" />
        <van-field v-model="phone" name="手机" label="手机" placeholder="手机" />
        <van-field v-model="email" name="邮箱" label="邮箱" placeholder="邮箱" />
        <van-field v-model="password" name="密码" label="密码" placeholder="密码" />
        <div class="campus">校区</div>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">龙子湖</van-radio>
          <van-radio name="2">金水区</van-radio>
        </van-radio-group>
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

export default {
  data() {
    return {
      radio: 1,
      username: "",
      name: "",
      phone: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      // 这发起请求
      Toast.success("编辑成功");
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
</style>

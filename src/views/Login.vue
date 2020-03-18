<template>
  <div class="login">
    <div class="form">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="手机号" label="手机号" placeholder="手机号" />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="info">发送验证码</van-button>
        </van-field>
        <div style="margin: 16px;">
          <router-link to="/home/index">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </router-link>
        </div>
      </van-form>
    </div>
    <div class="login-img">
      <img src="../assets/bg2.gif" alt="bg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
}
.form {
  width: 90%;
  height: 180px;
  margin: 100px auto 50px;
  border: solid 1px #ccc;
  border-radius: 10px;
  padding: 5px;
}
.login-img {
  width: 90%;
  height: 200px;
}
.login-img img {
  width: 375px;
  height: 200px;
}
</style>

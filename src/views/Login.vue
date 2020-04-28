<template>
  <div class="login">
    <div class="form">
      <!-- <van-form @submit="onSubmit">
        <van-field v-model="username" name="手机号" label="手机号" placeholder="手机号" />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="info">发送验证码</van-button>
        </van-field>
        <div style="margin: 16px;">
          <router-link to="/home/index">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </router-link>
        </div>
      </van-form>-->
      <van-tabs @click="onClick" color="#0070ff">
        <van-tab title="登录">
          <van-form @submit="onLoginSubmit">
            <van-field v-model="login.tel" name="手机号" label="手机号" placeholder="手机号" />
            <van-field v-model="login.pwd" name="密码" label="密码" placeholder="密码" />
            <div style="margin: 16px;">
              <div class="tip">已有账号，请登录。</div>
              <router-link to="/home/index">
                <van-button round block type="info" native-type="submit">登录</van-button>
              </router-link>
            </div>
          </van-form>
        </van-tab>
        <van-tab title="注册">
          <van-form @submit="onRegisterSubmit">
            <van-field v-model="register.uname" name="用户名" label="用户名" placeholder="用户名" />
            <van-field v-model="register.name" name="姓名" label="姓名" placeholder="姓名" />
            <van-field v-model="register.tel" name="手机号" label="手机号" placeholder="手机号" />
            <van-field v-model="register.email" name="邮箱" label="邮箱" placeholder="邮箱" />
            <van-field v-model="register.pwd" name="密码" label="密码" placeholder="密码" />
            <van-field v-model="register.cap" name="校区" label="校区" placeholder="校区" />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">注册</van-button>
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
    </div>
    <!-- <div class="login-img">
      <img src="../assets/bg2.gif" alt="bg" />
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      login: {
        tel: "",
        pwd: ""
      },
      register: {
        uname: "",
        name: "",
        tel: "",
        email: "",
        pwd: "",
        cap: ""
      }
    };
  },
  methods: {
    onLoginSubmit(e) {
      console.log(e);
    },
    onRegisterSubmit(e) {
      console.log(e);
    },
    onClick(title) {
      // Toast(title);
    }
  }
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;
}
.form {
  width: 90%;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 5px;
}
.tip {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #ccc;
  text-align: left;
  padding: 0 20px;
}
</style>

<template>
  <div class="login">
    <div class="form">
      <van-tabs color="#0070ff">
        <van-tab title="登录">
          <van-form @submit="onLoginSubmit()">
            <van-field v-model="login.tel" name="手机号" label="手机号" placeholder="手机号" />
            <van-field v-model="login.pwd" name="密码" label="密码" placeholder="密码" />
            <div style="margin: 16px;">
              <div class="tip">已有账号，请登录。</div>
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
          </van-form>
        </van-tab>
        <van-tab title="注册">
          <van-form>
            <van-field v-model="register.uname" name="用户名" label="用户名" placeholder="用户名" />
            <van-field v-model="register.name" name="姓名" label="姓名" placeholder="姓名" />
            <van-field v-model="register.tel" name="手机号" label="手机号" placeholder="手机号" />
            <van-field v-model="register.email" name="邮箱" label="邮箱" placeholder="邮箱" />
            <van-field v-model="register.pwd" name="密码" label="密码" placeholder="密码" />
            <van-field v-model="register.cap" name="校区" label="校区" placeholder="校区" />
            <van-field
              v-model="sms"
              center
              clearable
              label="验证码"
              placeholder="请输入短信验证码"
            >
              <template #button>
                <van-button size="small" type="primary" @click="getCode()">发送验证码</van-button>
              </template>
            </van-field>
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit" @click="onRegisterSubmit()">注册</van-button>
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
import axios from "axios";
import store from "../store";
import { Toast } from 'vant';
export default {
  data() {
    return {
      login: {
        tel: "",
        pwd: ""
      },
      sms:null,
      register: {
        uname: "",
        name: "",
        tel: "",
        email: "",
        pwd: "",
        cap: "",
      },
      yzmCode:null,
    };
  },
  methods: {
    getCode(){
      var tel = this.register.tel
      axios.post("laji/user/yzm", {
        "userinfoPhone":tel,
      }).then((res) => {
        this.yzmCode = res.data.extend.code
      }).catch((err) => {
        Toast('获取验证码失败');
      })
    },
    onRegisterSubmit() {
      if(parseInt(this.sms) ===  this.yzmCode){
        axios.post("laji/user/register",{ 
          "userinfoUsername":this.register.uname,
          "userinfoName":this.register.name,
          "userinfoPhone":this.register.tel, 
          "email": this.register.email,
          "userinfoPassword":this.register.pwd,
          "cap":this.register.cap
        }).then((res)=>{
          Toast('注册成功');
          this.register = {}
        }).catch((err)=>{
          Toast('注册失败，请重试');
        })
      }else{
        Toast('验证码不正确');
      }
      
    },
    onLoginSubmit() {
      axios.post("laji/user/login",{ 
          "userinfoPhone":this.login.tel, 
          "userinfoPassword":this.login.pwd,
        }).then((res)=>{
          if(res.data.code === 100){
            Toast('登录成功');
            // 将手机号存储session
            sessionStorage.setItem("tel", res.data.extend.userinfo.userinfoPhone);
            sessionStorage.setItem("userId", res.data.extend.userinfo.userinfoId);
            this.login = {}
            this.$router.push({
              //核心语句
              path: "/home/index" //跳转的路径
            });
          }else{
            Toast('手机号和密码不匹配');
          }
        }).catch((err)=>{
          Toast('网络请求错误，请重试');
        })
    },
  }
}
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

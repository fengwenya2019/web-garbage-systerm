<template>
  <div class="edit">
    <header class="header">
      <router-link to="/home/guide">
        <div class="back">
          <van-icon name="arrow-left" />
        </div>
      </router-link>
      <div class="info">垃圾分类指南</div>
    </header>
    <div class="form">
      <!-- <van-search shape="round" placeholder="搜索垃圾查看对应分类" @change="search($event)" /> -->
       <van-field
            v-model="searchWord"
            center
            clearable
            placeholder="搜索垃圾查看对应分类"
            style="border:solid 1px #ccc"
        >
            <template #button>
                <van-button size="small" type="primary" @click="getCode()">搜索</van-button>
            </template>
        </van-field>
    </div>
    <div class="guide-box">
        <ul>
            <li class="guide-item" v-for="(guide,index) in searchGuideList" :key="index">
                <span class="guide">{{guide.classificationguideinfoName}}</span>
                <span class="cata">[{{guide.classificationguideinfoClassification}}]</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from "vant";
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['searchGuideList'])
  },
  data() {
    return {
        searchWord:'',
    };
  },
  methods: {
    getCode(){
        // 发起搜索请求
        this.$store.dispatch("searchGuideList",{word:this.searchWord});
    },
  }
};
</script>

<style scoped>
*{
    box-sizing: border-box;
}
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
.form{
    padding: 10px 5px;
}
.guide-box{
    height: 520px;
    overflow: scroll;
}
.guide-box ul li{
    padding: 5px;
}
.guide{
    display: inline-block;
    font-weight: bold;
    margin-right: 5px;
}
.cata{
    color: rgb(241, 157, 21);
}
</style>

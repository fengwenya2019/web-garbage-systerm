<template>
  <div class="index">
    <header class="header">垃圾分类指南查询</header>
    <router-link to="/search">
      <van-search shape="round" background="rgb(255, 246, 246)" placeholder="搜索垃圾查看对应分类" />
    </router-link>
    <div class="class-guide">
      <!-- <van-tree-select height="131vw" :items="items" :main-active-index.sync="activeIndex" /> -->
      <div class="left-nav">
        <ul>
          <li
            class="nav-item"
            :class="{'nav-active':navActiveIndex==index}"
            v-for="(cata, index) in cataList"
            :key="index"
            @click="clickNav(cata.classificationinfoId,cata.classificationinfoName,index)"
          >{{cata.classificationinfoName}}</li>
        </ul>
      </div>
      <div class="right-box">
        <div class="cata-info">
          <div class="cata-title">
            <span class="bold">{{cataInfo.classificationinfoName}}：</span>
            <span>{{cataInfo.classificationinfoDescription}}</span>
          </div>
          <div class="delivery-require">
            <span class="bold">投放要求：</span>
            <span>{{cataInfo.catarequire}}</span>
          </div>
          <div class="delivery-require">
            <span class="bold">例如：</span>
            <span>{{cataInfo.cataeg}}</span>
          </div>
        </div>
        <ul>
          <li class="guide-item" v-for="(guide,index) in guideList" :key="index">{{guide.classificationguideinfoName}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['cataList','cataInfo',"guideList"])
  },
  created(){
    const id = 1
    this.$store.dispatch("queryCataList");
    this.$store.dispatch("queryCataInfo",{id:41});
    // this.$store.dispatch("queryGuideList",{code:'可回收物'});
  },
  mounted(){
  },
  data() {
    return {
      navActiveIndex: 0,
      activeIndex: 0
    };
  },
  methods: {
    clickNav(id,code,index) {
      this.navActiveIndex = index;
      this.$store.dispatch("queryCataInfo",{id,id});
      this.$store.dispatch("queryGuideList",{code:code});
    }
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
  font-size: 20px;
  background-color: rgb(255, 246, 246);
}
.header {
  height: 50px;
  line-height: 50px;
  color: red;
}

.class-guide {
  width: 100%;
  padding: 0;
  display: flex;
  border-top: solid 1px #ccc;
}
.left-nav {
  width: 100px;
  height: 515px;
  background-color: #eee;
  border-right: solid 1px #ccc;
}

.left-nav ul {
  padding: 0;
}
.nav-item {
  height: 50px;
  padding: 0 10px;
  text-align: left;
  overflow: hidden;
  line-height: 50px;
  font-size: 16px;
}
.nav-active {
  border-left: solid 3px red;
  background-color: #fff;
}
.right-box {
  width: calc(100% - 100px);
  height: 515px;
  overflow-y: scroll;
}

.cata-info {
  width: 100%;
  height: 200px;
  padding: 20px 10px;
  border-bottom: dashed 1px #ccc;
  font-size: 14px;
  text-align: left;
}
.cata-info .bold {
  font-size: 15px;
  font-weight: bold;
  color: red;
}
.right-box ul {
  padding: 10px 0;
}
.guide-item {
  height: 35px;
  font-size: 14px;
}
</style>

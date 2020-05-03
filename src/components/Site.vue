<template>
  <div class="site">
    <header class="header">垃圾投放站点查询</header>
    <div class="class-site">
      <div class="left-nav">
        <ul>
          <li
            class="nav-item"
            :class="{'nav-active':navActiveIndex==index}"
            v-for="(site, index) in siteList"
            :key="index"
            @click="clickNav(index,site.locationinfoId)"
          >{{site.locationinfoName}}</li>
        </ul>
      </div>
      <div class="right-box">
        <div class="site-info">
          <div class="info-box">
            <div class="info-title">投放站点</div>
            <div class="info-content">{{siteInfo.locationinfoName}}</div>
          </div>
          <div class="info-box">
            <div class="info-title">具体位置</div>
            <div>{{siteInfo.locationinfoName}}</div>
          </div>
          <div class="info-box">
            <div class="info-title">开放时间</div>
            <div>{{siteInfo.opentime}}</div>
          </div>
          <div class="info-box">
            <div class="info-title">垃圾桶类别</div>
            <div>{{siteInfo.bucketcata}}</div>
          </div>
          <div class="info-box">
            <div class="info-title">垃圾桶数量</div>
            <div>{{siteInfo.bucketnum}}</div>
          </div>
          <div class="info-box">
            <div class="info-title">注意</div>
            <div>{{siteInfo.attention}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['siteList','siteInfo'])
  },
  created(){
    const id = 1
    this.$store.dispatch("querySiteList");
    this.$store.dispatch("querySiteInfo",{id:id});
  },
  data() {
    return {
      navActiveIndex: 0,
      activeIndex: 0
    };
  },
  methods: {
    clickNav(index,id) {
      this.navActiveIndex = index;
      this.$store.dispatch("querySiteInfo",{id:id});
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.site {
  width: 100%;
  height: calc(100vh - 50px);
  font-size: 20px;
  background-color: rgb(248, 249, 236);
  font-weight: bold;
}
.header {
  height: 50px;
  line-height: 50px;
  color: rgb(238, 152, 77);
}
.class-site {
  width: 100%;
  display: flex;
  border-top: solid 1px #ccc;
}
.left-nav {
  width: 100px;
  height: 605px;
  background-color: #eee;
  border-right: solid 1px #ccc;
  overflow: scroll;
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
  border-left: solid 3px rgb(238, 152, 77);
  background-color: #fff;
}
.right-box {
  width: calc(100% - 100px);
  height: 605px;
  overflow-y: scroll;
  font-size: 14px;
  text-align: left;
}
.info-box {
  padding: 10px;
  border-bottom: dashed 1px #ccc;
}
.info-box .info-title {
  font-size: 15px;
  font-weight: bold;
  color: rgb(238, 152, 77);
}
</style>

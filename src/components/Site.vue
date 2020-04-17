<template>
  <div class="site">
    <header class="header">垃圾投放站点查询</header>
    <div class="class-site">
      <div class="left-nav">
        <ul>
          <li
            class="nav-item"
            :class="{'nav-active':navActiveIndex==index}"
            v-for="(item, index) in siteList"
            :key="index"
            @click="clickNav(index)"
          >{{item.catagoryName}}</li>
        </ul>
      </div>
      <div class="right-box">
        <div class="site-info">
          <div class="info-box">
            <div class="info-title">投放站点</div>
            <div class="info-content">1号宿舍楼</div>
          </div>
          <div class="info-box">
            <div class="info-title">具体位置</div>
            <div>西门入口处</div>
          </div>
          <div class="info-box">
            <div class="info-title">开放时间</div>
            <div>每周一到周五8:00-20:00</div>
          </div>
          <div class="info-box">
            <div class="info-title">垃圾桶类别</div>
            <div>可回收物，厨余垃圾</div>
          </div>
          <div class="info-box">
            <div class="info-title">垃圾桶数量</div>
            <div>3个</div>
          </div>
          <div class="info-box">
            <div class="info-title">注意</div>
            <div>可回收物1个，厨余垃圾2个</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteList: [
        {
          catagoryName: "1号宿舍楼"
        },
        {
          catagoryName: "23号宿舍楼"
        },
        {
          catagoryName: "餐厅西楼"
        },
        {
          catagoryName: "报告厅"
        },
        {
          catagoryName: "6号教学楼"
        },
        {
          catagoryName: "操场西门"
        }
      ],
      navActiveIndex: 0,
      guideList: [
        "塑料",
        "旧衣物",
        "本子",
        "书籍",
        "废旧电器",
        "塑料",
        "旧衣物",
        "本子",
        "书籍",
        "废旧电器",
        "塑料",
        "旧衣物",
        "本子",
        "书籍",
        "废旧电器"
      ],
      activeIndex: 0
    };
  },
  methods: {
    clickNav(index) {
      this.navActiveIndex = index;
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
  background-color: #fff;
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

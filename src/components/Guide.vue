<template>
  <div class="index">
    <header class="header">垃圾分类指南查询</header>
    <van-search shape="round" background="rgb(255, 246, 246)" placeholder="请输入搜索关键词" />
    <div class="class-guide">
      <!-- <van-tree-select height="131vw" :items="items" :main-active-index.sync="activeIndex" /> -->
      <div class="left-nav">
        <ul>
          <li
            class="nav-item"
            :class="{'nav-active':navActiveIndex==index}"
            v-for="(item, index) in cataList"
            :key="index"
            @click="clickNav(index)"
          >{{item.catagoryName}}</li>
        </ul>
      </div>
      <div class="right-box">
        <div class="cata-info">
          <div class="cata-title">
            <span class="bold">可回收物：</span>
            <span>主要包括废纸、塑料、玻璃、金属和布料五大类。</span>
          </div>
          <div class="delivery-require">
            <span class="bold">投放要求：</span>
            <span>要注意纸巾和厕所纸由于水溶性太强不可回收。</span>
          </div>
          <div class="delivery-require">
            <span class="bold">例如：</span>
            <span>废纸:主要包括报纸、期刊、图书、各种包装纸等。塑料:各种塑料袋、塑料泡沫、塑料包装...</span>
          </div>
        </div>
        <ul>
          <li class="guide-item" v-for="(item,index) in guideList" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cataList: [
        {
          catagoryName: "可回收物",
          detail: "xxxxxxxxx"
        },
        {
          catagoryName: "有害垃圾",
          detail: "xxxxxxxxx"
        },
        {
          catagoryName: "厨余垃圾",
          detail: "xxxxxxxxx"
        },
        {
          catagoryName: "其他垃圾",
          detail: "xxxxxxxxx"
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

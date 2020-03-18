<template>
  <div class="index">
    <header class="header">垃圾分类指南查询</header>
    <van-search
      v-model="value"
      shape="round"
      background="rgb(255, 246, 246)"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <div class="class-guide">
      <van-tree-select height="131vw" :items="items" :main-active-index.sync="activeIndex" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {
          text: "可回收物",
          children: [
            {
              id: 1,
              text: "塑料瓶"
            },
            {
              id: 2,
              text: "塑料瓶"
            },
            {
              id: 1,
              text: "塑料瓶"
            },
            {
              id: 2,
              text: "塑料瓶"
            },
            {
              id: 1,
              text: "塑料瓶"
            },
            {
              id: 2,
              text: "塑料瓶"
            },
            {
              id: 1,
              text: "塑料瓶"
            },
            {
              id: 2,
              text: "塑料瓶"
            },
            {
              id: 1,
              text: "电池"
            },
            {
              id: 2,
              text: "过期药物"
            },
            {
              id: 2,
              text: "塑料瓶"
            },
            {
              id: 1,
              text: "电池"
            },
            {
              id: 2,
              text: "过期药物"
            }
          ]
        },
        {
          text: "有害垃圾",
          children: [
            {
              id: 1,
              text: "电池"
            },
            {
              id: 2,
              text: "过期药物"
            }
          ]
        },
        {
          text: "厨余垃圾",
          children: [
            {
              id: 1,
              text: "食物"
            },
            {
              id: 2,
              text: "剩菜"
            }
          ]
        },
        {
          text: "其他垃圾",
          children: [
            {
              id: 1,
              text: "废纸"
            },
            {
              id: 2,
              text: "玻璃"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
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
  padding: 20px 0 0 0;
}
</style>

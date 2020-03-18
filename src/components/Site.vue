<template>
  <div class="site">
    <header class="header">垃圾投放站点查询</header>
    <div class="site-box">
      <van-tabs v-model="active" sticky color="rgb(140, 229, 249)">
        <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
          <div class="content">内容 {{ index }}</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.site {
  width: 100%;
  height: calc(100vh - 50px);
  font-size: 20px;
  background-color: rgb(242, 252, 251);
  /* background-color: rgb(140, 229, 249); */
  position: relative;
}
.header {
  height: 50px;
  line-height: 50px;
  color: rgb(51, 171, 235);
  position: sticky;
}
.site-box {
  height: calc(100vw - 100px);
  /* overflow: hidden; */
}
.content {
  height: 550px;
  overflow-y: scroll;
  /* background-color: red; */
}
</style>

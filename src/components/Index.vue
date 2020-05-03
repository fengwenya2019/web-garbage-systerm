<template>
  <div class="index">
    <header class="header">绿色日报</header>
    <div class="report-scroll">
      <div class="report-box" v-for="(report,index) in reportList" :key="index">
        <div class="time">{{timeChange(report.greendailyinfoUploadtime)}}</div>
        <div class="report-content">
          <div class="title">
            {{report.greendailyinfoTitle}}
            <span>{{report.greendailyinfoDescription}}</span>
          </div>
          <div class="brief-info">{{report.greendailyinfoText}}</div>
          <div class="report-writer">
            <span>发布人:</span>{{report.greendailyinfoAuthor}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['reportList'])
  },
  created(){
    this.$store.dispatch("queryReportInfo");
  },
  data() {
    return {
    };
  },
  methods:{
    // 时间转换
    timeChange(time){
      var now = new Date(time)
      var year=now.getFullYear(); 
      var month=now.getMonth()+1; 
      var date=now.getDate(); 
      return year+"年"+month+"月"+date+"日 " 
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
  background-color: rgb(241, 255, 236);
  font-size: 20px;
}
.header {
  height: 50px;
  line-height: 50px;
  color: rgb(77, 165, 77);
}
.report-scroll {
  width: 100%;
  height: calc(100% - 50px);
  padding: 0 10px;
  overflow-y: scroll;
  border: solid 1px #ccc;
}
.report-box {
  margin: 20px 0;
}
.time {
  padding-left: 20px;
  font-size: 14px;
  text-align: left;
  color: rgb(143, 143, 143);
}
.report-content {
  border: solid 1px rgb(101, 162, 101);
  border-radius: 10px;
  font-size: 14px;
  padding: 5px 10px;
}
.report-content .title {
  font-size: 18px;
  font-weight: bold;
}
.report-content .title span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  background: rgb(235, 229, 137);
}
.report-content .brief-info {
  padding: 5px 0;
  text-align: left;
}
.report-writer {
  text-align: right;
}
.report-writer span {
  font-weight: bold;
}
</style>

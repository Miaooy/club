<template>
    <div class="week-report">
<!--      <div class="time-panel">-->
<!--      </div>-->
      <div class="content">
        <div class="book-detail-panel">
          <div class="book-detail">
            <a-card hoverable style="width: 100%">
              <img alt="example" src="../assets/book4.png" slot="cover"/>
              <a-card-meta
                title="Europe Street beat">
                <template slot="description">www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </div>
        </div>
        <div class="report-panel">
          <div class="report-panel-title">
            <span class="report-panel-week">
              第
              <span @click="showDrawer" style="color: #42b983;font-size: 14px">
                五
              </span>周</span>
            <span class="report-title">主题</span>
            <span class="report-title-content">啊士大夫艰苦法</span>
            <a-tag class="report-status" color="#87d068"><a-icon type="check" /> 已评阅</a-tag>
          </div>
          <div class="report-panel-item">
            <span class="input-title">你认为书中最棒的理念是</span>
            <a-textarea placeholder="" :autosize="{ minRows: 2, maxRows: 6 }" />
          </div>
          <div class="report-panel-item">
            <span class="input-title">你想与大家分享的相关案例</span>
            <a-textarea placeholder="" :autosize="{ minRows: 2, maxRows: 6 }" />
          </div>
          <div class="report-panel-item">
            <span class="input-title">你认为书中最棒的理念是</span>
            <a-textarea placeholder="" :autosize="{ minRows: 2, maxRows: 6 }" />
          </div>
          <div class="report-panel-item">
            <span class="input-title">你认为书中最棒的理念是</span>
            <a-textarea placeholder="" :autosize="{ minRows: 2, maxRows: 6 }" />
          </div>
          <div class="report-panel-btns">
            <a-button type="primary">提交</a-button>
          </div>
        </div>
      </div>
<!--      <a-button type="primary" @click="showDrawer">-->
<!--        Open-->
<!--      </a-button>-->

      <a-drawer title="Basic Drawer" :placement="placement"
                :closable="true" @close="onClose" :visible="visible">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <div class="time-line">
          <a-timeline>
            <a-timeline-item color="green">第一周</a-timeline-item>
            <a-timeline-item color="green">第二周</a-timeline-item>
            <a-timeline-item color="red">
              <p>第三周</p>
            </a-timeline-item>
            <!--        <a-timeline-item>-->
            <!--          <p>Technical testing 1</p>-->
            <!--          <p>Technical testing 2</p>-->
            <!--          <p>Technical testing 3 2015-09-01</p>-->
            <!--        </a-timeline-item>-->
          </a-timeline>
        </div>
      </a-drawer>
    </div>
</template>

<script>
export default {
  name: 'week-report',
  data() {
    return {
      visible: true,
      placement: 'left',
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
  .week-report{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .content{
    width: 100%;
    float: left;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
  }
  .book-detail-panel{
    width: 30%;
    background: bisque;
    float: left;
    min-width: 200px;
  }
  .time-line{
    width: 60%;
    /*height: 2000px;*/
  }
  .report-panel{
    width: 70%;
    height: 600px;
    float: left;
    min-width: 350px;
    border: 1px solid #42b983;
    padding: 20px 40px 10px 40px;
  }
  .book-detail {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
  .input-title{
    font-size: 16px;
    font-weight: 600;
    position: relative;
    top: -3px
  }
  .report-panel-item{
    margin-top: 35px;
    margin-bottom: 20px;
  }
  .report-panel-title span {
    font-size: 20px;
  }
  .report-title{
    margin-left: 30px;
    margin-right: 10px;
    font-size: 14px !important;
  }
  .report-title-content{
    border-bottom: 1px solid #42b983;
    margin-right: 20px;
    font-weight: 600;
  }
  .report-panel-week{
    margin-left: 20px;
    font-size: 14px !important;
  }
  .report-panel-btns{
    float: right;
    margin-right: 10px;
  }
  .report-status {
    float: right;
    margin-top: 8px;
  }
</style>

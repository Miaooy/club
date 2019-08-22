<template>
    <div class="week-report">
<!--      <div class="time-panel">-->
<!--      </div>-->
      <div class="report-panel">
        121
      </div>
      <a-button type="primary" @click="showDrawer">
        Open
      </a-button>

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
    width: 100%;
    float: left;
    overflow: hidden;
  }
  .time-panel{
    width: 30%;
    background: bisque;
    float: left;
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .time-line{
    width: 40%;
    /*height: 2000px;*/
  }
  .report-panel{
    width: 100%;
    background: #42b983;
    height: 600px;
    float: left;
  }
</style>

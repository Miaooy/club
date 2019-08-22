<template>
    <div>
      <a-card hoverable type="inner">
        <img alt="example" src="../assets/book4.png" slot="cover"/>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta title="Book Name" description="This is the a new book, welcome to read it">
<!--          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />-->
        </a-card-meta>
        <div class="progress">
          <div class="progress-one">
            <span>理想进度</span>
            <a-progress type="line" :percent="30" :width="10" />
          </div>
          <div class="progress-one">
            <span>实际进度</span>
            <a-progress type="line" :percent="70" :width="10" status="active" />
          </div>
        </div>
      </a-card>

      <a-card hoverable type="inner">
        <img alt="example" src="../assets/book2.png" slot="cover"/>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
        <div class="progress">
          <div class="progress-one">
            <span>理想进度</span>
            <a-progress type="line" :percent="90" :width="10" />
          </div>
          <div class="progress-one">
            <span>实际进度</span>
            <a-progress type="line" :percent="70" strokeColor="#FF7F50" status="active" />
          </div>
        </div>
      </a-card>

      <a-card hoverable type="inner">
        <img alt="example" src="../assets/book3.png" slot="cover"/>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
        <div class="progress">
          <div class="progress-one">
            <span>理想进度</span>
            <a-progress type="line" :percent="30" :width="10" />
          </div>
          <div class="progress-one">
            <span>实际进度</span>
            <a-progress type="line" :percent="100" :width="10" />
          </div>
        </div>
      </a-card>

      <a-card hoverable type="inner">
        <img alt="example" src="../assets/book4.png" slot="cover"/>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
        <div class="progress">
          <div class="progress-one">
            <span>理想进度</span>
            <a-progress type="line" :percent="30" :width="10" />
          </div>
          <div class="progress-one">
            <span>实际进度</span>
            <a-progress type="line" :percent="70" :width="10" status="active" />
          </div>
        </div>
      </a-card>

      <a-card hoverable type="inner">
        <img alt="example" src="../assets/book1.png" slot="cover"/>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
        <div class="progress">
          <div class="progress-one">
            <span>理想进度</span>
            <a-progress type="line" :percent="30" :width="10" />
          </div>
          <div class="progress-one">
            <span>实际进度</span>
            <a-progress type="line" :percent="70" :width="10" status="active" />
          </div>
        </div>
      </a-card>

      <a-card hoverable type="inner">
        <img alt="example" src="../assets/book5.png" slot="cover"/>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
        <div class="progress">
          <div class="progress-one">
            <span>理想进度</span>
            <a-progress type="line" :percent="30" :width="10" />
          </div>
          <div class="progress-one">
            <span>实际进度</span>
            <a-progress type="line" :percent="70" :width="10" status="active" />
          </div>
        </div>
      </a-card>

      <a-card hoverable type="inner">
        <img alt="example" src="../assets/book5.png" slot="cover"/>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
        <div class="progress">
          <div class="progress-one">
            <span>理想进度</span>
            <a-progress type="line" :percent="30" :width="10" />
          </div>
          <div class="progress-one">
            <span>实际进度</span>
            <a-progress type="line" :percent="70" :width="10" status="active" />
          </div>
        </div>
      </a-card>
      <div class="clear"></div>
    </div>
</template>

<script>
export default {
  name: 'book-card',
};
</script>

<style scoped>
  .ant-card{
    /*position: absolute;*/
    /*flex-flow: row nowrap;*/
    /*justify-content: space-around;*/
    float:left;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
    width: 23.2%;
    min-width: 273px;
    max-width: 342px;
    border-radius: 2px;
  }
  .progress {
    /*display: flex;*/
    /*flex-flow: row nowrap;*/
    /*justify-content: space-around;*/
    margin-top: 10px;
  }
  .progress-one{
    display: inline;
  }
  .progress-one span{
    font-size: 12px;
    margin-right: 4px;
  }
  .clear{
    clear: both;
  }
</style>

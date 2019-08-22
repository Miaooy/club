<template>
  <div>
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo">
          <img class="logo-img" src="../assets/logo.png">
          <img class="logo-title" src="../assets/title.png">
        </div>
        <a-menu
          theme="light"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link v-bind:to="{name: 'book-card'}">我的书</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link v-bind:to="{name: 'week-report'}">周报</router-link>
          </a-menu-item>
          <a-menu-item key="3">nav 2</a-menu-item>
          <a-menu-item key="4">nav 3</a-menu-item>

        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 20px', marginTop: '64px' }">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '785px',clear: 'both' }">
          <router-view />
          <div class="clear"></div>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style scoped>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .ant-layout-header {
    background: #ffffff;
    padding: 0;
  }
  .clear{
    clear: both;
  }
  .logo-img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-top: -35px;
    margin-left: 20px;
  }
  .logo-title{
    height: 24px;
    margin-top: -158px;
    margin-left: 55px;
  }
</style>

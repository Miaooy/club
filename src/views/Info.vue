<template>
  <div>
    hello info component
    <button type="button" v-on:click="add()">添加</button>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Info',
  store,
  data() {
    return {
      msg: 'Hello vue',
    };
  },
  mounted() {
    window.vue = this;
  },
  methods: {
    add() {
      console.log('add Event from info!');
      store.commit('increase');
    },
  },
};
</script>

<style scoped>

</style>

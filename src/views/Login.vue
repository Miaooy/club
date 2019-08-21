<template>
  <div>
    <form action="" v-if="!isReg">
      用户名:
      <input type="text" v-model="name">
      密码:
      <input type="password" v-model="password">
      <button type="button" v-on:click="login()">登录</button>
      <button type="button" v-on:click="reg()">注册</button>
    </form>
    <form action="" v-else>
      用户名:
      <input type="text" v-model="name">
      密码:
      <input type="password" v-model="password">
      再次输入密码:
      <input type="password" v-model="repeat">
      <button type="button" v-on:click="addUser()">确定</button>
      <button type="button" v-on:click="cancel()">取消</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: '',
    };
  },
  methods: {
    login() {
      if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
        this.password = '';
        this.name = '';
        this.$router.push('/home/list');
      } else {
        alert('用户名密码错误');
      }
    },
    reg() {
      this.isReg = true;
    },
    cancel() {
      this.isReg = false;
    },
    addUser() {
      if (this.password === this.repeat) {
        localStorage.setItem('name', this.name);
        localStorage.setItem('password', this.password);
        this.password = '';
        this.name = '';
        this.repeat = '';
        this.isReg = false;
      } else {
        alert('密码输入不一致');
      }
    },
  },
};
</script>

<style scoped>

</style>

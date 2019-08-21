import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Info from './views/Info.vue';
import Login from './views/Login.vue';
// import List from './views/List.vue';
import Detail from './views/Detail.vue';
import Add from './views/Add.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue'),
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
        },
      ],
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

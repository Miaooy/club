import Vue from 'vue';
import Router from 'vue-router';
import Info from './views/Info.vue';
import Login from './views/Login.vue';
// import List from './views/List.vue';
import Detail from './views/Detail.vue';
import Add from './views/Add.vue';
import Layout from './views/Layout.vue';
import Home from './views/Home.vue';

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
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'book-card',
          name: 'book-card',
          component: () => import(/* webpackChunkName: "book-card" */ './views/book-card.vue'),
        },
        {
          path: 'week-report',
          name: 'week-report',
          component: () => import(/* webpackChunkName: "book-card" */ './views/week-report.vue'),
        },
      ],
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

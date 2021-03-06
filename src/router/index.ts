import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axiosPage/axios.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

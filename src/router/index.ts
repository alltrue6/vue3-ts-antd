import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '@/views/home.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: "/home",
  //   name: "home",
  //   component: () => import("../views/home.vue"),  // 懒加载组件
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),  // 懒加载组件
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),  // 懒加载组件
  },
];
const router = createRouter({
      history: createWebHistory(),
      routes
})
export default router;

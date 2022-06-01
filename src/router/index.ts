import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from '@/components/Layout.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: "/eva",
        name: "eva",
        component: () => import("../views/eva.vue"),  // 懒加载组件
      },
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
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;

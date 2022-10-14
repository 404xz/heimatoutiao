import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/Login"),
    name: "login",
  },
  {
    path: "/",
    component: () => import("@/views/layout"),
    name: "layout",
    children: [
      {
        path: "home",
        component: () => import("@/views/home"),
        name: "home",
      },
      {
        path: "qa",
        component: () => import("@/views/qa"),
        name: "qa",
      },
      {
        path: "video",
        component: () => import("@/views/video"),
        name: "video",
      },
      {
        path: "my",
        component: () => import("@/views/my"),
        name: "my",
      },
    ],
  },
  {
    path: "/dome",
    component: () => import("@/views/dome"),
    name: "dome",
  },
];

const router = new VueRouter({
  routes,
});

export default router;

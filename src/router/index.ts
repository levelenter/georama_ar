import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ARCamera from "@/views/ar/ARCamera.vue";
import MainPage from "@/views/main/MainPage.vue";
import PointPage from "@/views/point/PointPage.vue";
import TrendPage from "@/views/trend/TrendPage.vue";
import Setting from "@/views/Setting.vue";
import DebugPage from "@/views/DebugPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/debug",
    name: "DebugPage",
    component: DebugPage,
  },

  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },

  {
    path: "/ar",
    name: "ARCamera",
    component: ARCamera,
  },
  {
    path: "/main_page",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/point_page",
    name: "PointPage",
    component: PointPage,
  },
  {
    path: "/trend_page",
    name: "TrendPage",
    component: TrendPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

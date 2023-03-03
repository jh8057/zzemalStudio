import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/reserve",
      name: "reserve",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ReserveView.vue"),
    },
    {
      path: "/reserveWrite",
      name: "reserveWrite",
      component: () => import("../views/ReserveWriteView.vue"),
    },
    {
      path: "/location",
      name: "location",
      component: () => import("../views/LocationView.vue"),
    },
  ],
});

export default router;

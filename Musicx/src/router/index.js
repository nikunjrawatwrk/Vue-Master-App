import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
import Song from "@/views/Song.vue";
import useUserStore from "@/stores/user";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    alias: "/manage-music", // if we create 2 routes for single component
    path: "/manage",
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log("Manage Route Gurad");
      next();
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage-song",
    redirect: { name: "manage" },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
  {
    name: "song",
    path: "/song/:id",
    component: Song,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  console.log("Global Guard");

  if (!to.meta.requiresAuth) {
    next();
  }

  const store = useUserStore();
  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" }); // if user is not authenticated then redirected to homepage
  }
});
export default router;

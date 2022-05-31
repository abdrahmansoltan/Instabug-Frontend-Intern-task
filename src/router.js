import { createRouter, createWebHistory } from "vue-router";
import { Login, Welcome, NotFound } from "./pages";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    { path: "/login", component: Login },
    { path: "/welcome", component: Welcome },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

// testing
let isLoggedIn = true;

// Navigation Guards
router.beforeEach((to, from, next) => {
  if (to.path == "/login" && isLoggedIn) {
    next({
      path: "/welcome",
    });
  } else if (to.path == "/welcome" && !isLoggedIn) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
});

export default router;

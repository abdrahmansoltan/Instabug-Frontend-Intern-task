import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { Login, Welcome, NotFound } from "./pages";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    {
      path: "/login",
      component: Login,
      meta: {
        title: "Login | Instabug",
      },
    },
    {
      path: "/welcome",
      component: Welcome,
      meta: {
        title: "Welcome | Instabug",
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      meta: {
        title: " 404 Not Found | Instabug",
      },
    },
  ],
});

// Authorization ( must be function not variable so that it's checked each time )
let isLoggedIn = () => {
  return localStorage.getItem("userEmail") ? true : false;
};

// ------------------------Navigation Guards------------------------ //
router.beforeEach((to, from, next) => {
  if (to.path == "/login" && isLoggedIn()) {
    next({
      path: "/welcome",
    });
  } else if (to.path == "/welcome" && !isLoggedIn()) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
});

// change page-title based on route
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || "Instabug";
  });
});

export default router;

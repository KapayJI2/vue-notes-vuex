import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routerHistory = createWebHistory();
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import Page404 from "@/pages/404";
const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: Page404,
    },
  ],
});
export default routers;

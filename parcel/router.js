`import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Floorplan from "./components/Floorplan";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "test",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Home,
    },
     {
       path: "/floorplan",
       component: Floorplan,
     },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

export default router;
`


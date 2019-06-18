import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/advanced",
      name: "advanced",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "advanced" */ "./views/Advanced.vue")
    },
    {
      path: "/doc",
      name: "documentation",
      component: () =>
        import(/* webpackChunkName: "documentation" */ "./views/Documentation.vue")
    }
  ]
});

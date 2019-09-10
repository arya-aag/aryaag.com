import Vue from "vue";
import Router from "vue-router";

// Page content
import Page from "@/components/Page";
import Home from "@/components/Home";

// Fallback page
import PageNotFound from "@/components/PageNotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/page",
      name: "Page",
      component: Page
    },
    {
      path: "**",
      name: "PageNotFound",
      component: PageNotFound
    }
  ]
});

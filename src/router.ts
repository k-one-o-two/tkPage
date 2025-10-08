import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Crap from "./components/vue/crap.vue";
// import AboutView from './AboutView.vue'

const routes = [
  { path: "/crap", component: Crap },
  { path: "/", component: Home },
  // { path: '/about', component: AboutView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

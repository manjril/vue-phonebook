import Vue from "vue";
import VueRouter from "vue-router";

import Contacts from "@/components/Contacts";
import Contact from "@/components/Contact";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Contacts },
  { path: "/:id", name: "id", component: Contact }
];

export const router = new VueRouter({
  mode: "history",
  routes
});

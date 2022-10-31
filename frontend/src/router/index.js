import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Teams from "../views/Teams";
import AllTasks from "../views/AllTasks";
import Login from "../views/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
  },
  {
    path: "/alltasks",
    name: "AllTasks",
    component: AllTasks,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

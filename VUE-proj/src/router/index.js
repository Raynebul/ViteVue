import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import MainPage from "../views/MainPage.vue";

const baseUrl = import.meta.env.BASE_URL;
const history = import.meta.env.SSR
  ? createMemoryHistory(baseUrl)
  : createWebHistory(baseUrl);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/course",
    name: "course",
    component: () => import("../views/MenuCourse.vue"),
  },
  {
    path: "/course/:id",
    name: "courseTitle",
    component: () => import("../views/CourseTitle.vue"),
  },
  {
    path: "/course/:id/:page",
    name: "coursePage",
    component: () => import("../views/CoursePage.vue"),
  },
  {
    path: "/sandbox",
    name: "sandbox",
    component: () => import("../views/CreateProject.vue"),
  },
  {
    path: "/sandbox/:id",
    name: "project",
    component: () => import("../views/SandBox.vue"),
  },
  {
    path: "/user/:id",
    name: "userid",
    component: () => import("../views/UserCard.vue"),
  },
  {
    path: "/k1/k2",
    name: "k1k2",
    component: () => import("../views/MenuCourse.vue"),
  }
];

const router = createRouter({
  history,
  routes,
});

export default router;

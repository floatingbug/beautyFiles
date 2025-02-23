import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from "../modules/home/router/index.js";
import authRoutes from "../modules/auth/router/index.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		...homeRoutes,
		...authRoutes,
  ],
})


export default router

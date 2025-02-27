import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from "../modules/home/router/index.js";
import authRoutes from "../modules/auth/router/index.js";
import customerSearchRoutes from "../modules/customer/customerSearch/router/index.js";
import customerAddRoutes from "../modules/customer/customerAdd/router/index.js";
import customerProfileRoutes from "../modules/customer/profile/router/index.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		...homeRoutes,
		...authRoutes,
		...customerSearchRoutes,
	  	...customerAddRoutes,
	  	...customerProfileRoutes,
  ],
})


export default router

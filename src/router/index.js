import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from '../views/home/router/index.js';
import customerSearchRoutes from "../views/customerSearch/router/index.js";
import addCustomerRoutes from "../views/addCustomer/router/index.js";
import signUpRoutes from "../views/signUp/router/index.js";
import signInRoutes from "../views/signIn/router/index.js";
import customerProfileRoutes from "../views/customerProfile/router/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  ...homeRoutes,
	  ...customerSearchRoutes,
	  ...addCustomerRoutes,
	  ...signUpRoutes,
	  ...signInRoutes,
	  ...customerProfileRoutes,
  ],
})

export default router

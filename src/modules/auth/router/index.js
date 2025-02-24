import AuthLayout from "../layouts/AuthLayout.vue";
import SignInModule from "../signIn/SignInModule.vue";
import SignUpModule from "../signUp/SignUpModule.vue";


export default [
	{
		path: "/authentication",
		component: AuthLayout,
		children: [
			{
				path: "sign-in",
				component: SignInModule,
			},
			{
				path: "sign-up",
				component: SignUpModule,
			},
		],
	},
];

import {useFetch} from "@/composables/useFetch.js";


export async function signUp(inputs){
	const options = {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(inputs),
	};


	const data = await useFetch("/sign-up", options);

	return data;
}

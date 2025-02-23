import {useFetch} from "@/composables/useFetch.js";


export async function signIn(inputs){
	const options = {
		method: "post",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(inputs),
	};


	const result = await useFetch("/sign-in", options);

	return result;
}

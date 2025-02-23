import {useFetch} from "@/composables/useFetch.js";


export async function addCustomer(inputFieldData){
	const jwt = localStorage.getItem("jwt");
	const options = {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"authorization": jwt,
		},
		body: JSON.stringify(inputFieldData),
	};

	
	const result = await useFetch("/create-customer", options);

	return result;
};

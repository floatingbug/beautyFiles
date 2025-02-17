import {useFetch} from "@/composables/useFetch.js";


export async function getCoreData(customerId){
	const jwt = localStorage.getItem("jwt");
	const path = `/get-core-data?customerId=${customerId}`;
	const options = {
		method: "get",
		headers: {
			"authorization": jwt,
		},
	};

	const result = await useFetch(path, options);

	return result;
}

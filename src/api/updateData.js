import {useFetch} from "@/composables/useFetch";


export async function updateData(param){
	const {path, data} = param;
	const jwt = localStorage.getItem("jwt");
	const options = {
		method: "POST",
		headers: {
			"content-type": "application/json",
			authorization: jwt,
		},
		body: JSON.stringify(data),
	};


	const result = await useFetch(path, options);

	return result;
}

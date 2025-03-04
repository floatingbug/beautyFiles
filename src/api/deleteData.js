import {useFetch} from "@/composables/useFetch.js";


export async function deleteData(param){
	const {path, data} = param;
	const jwt = localStorage.getItem("jwt");
	const options = {
		method: "DELETE",
		headers: {
			"content-type": "application/json",
			authorization: jwt,
		},
		body: JSON.stringify(data),
	};
	

	const result = await useFetch(path, options);

	return result;
}

import {useFetch} from "@/composables/useFetch.js";


export async function getData(param){
	const {path} = param;
	const jwt = localStorage.getItem("jwt");
	const options = {
		method: "GET",
		headers: {
			authorization: jwt,
		},
	}


	const result = await useFetch(path, options);

	return result;
}

import {useFetch} from "@/composables/useFetch.js";


export async function getCustomer(param){
	const {name, age, birthdaySoon} = param;
	const path = `/get-customer?name=${name}&age=${age}&birthdaySoon=${birthdaySoon}`;
	const options = {
		method: "GET",
	};

	const response = await useFetch(path, options);
	return response;
}

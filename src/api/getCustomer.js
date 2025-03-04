import {useFetch} from "@/composables/useFetch.js";


export async function getCustomer(param = {}) {
    const { vorname, name, wohnort, alter } = param;
	const jwt = localStorage.getItem("jwt");
    const params = new URLSearchParams();


    if (vorname !== undefined) params.append("vorname", vorname);
    if (name !== undefined) params.append("name", name);
    if (wohnort !== undefined) params.append("wohnort", wohnort);
    if (alter !== undefined) params.append("alter", alter);

    const path = `/find-customer?${params.toString()}`;

	const options = {
		method: "GET",
		headers: {
			authorization: jwt
		},
	};


	const result = await useFetch(path, options);
	
	return result;
}

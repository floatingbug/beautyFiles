import {getData} from "@/api/getData.js";


export async function getCoreData(param = {}){
	const {customerId} = param;
	const path = `/get-core-data?customerId=${customerId}`;


	const result = await getData({path});

	return result;
}

import {getData} from "@/api/getData.js";


export async function getSkinProperties(param){
	const {customerId} = param;
	const path = `/get-skin-properties?customerId=${customerId}`


	const result = await getData({path});

	return result;
}

import {getData} from "@/api/getData.js";


export async function getProtocolData(param){
	const {customerId} = param;
	const path = `/get-protocol?customerId=${customerId}`;


	const result = await getData({path});

	return result;
}

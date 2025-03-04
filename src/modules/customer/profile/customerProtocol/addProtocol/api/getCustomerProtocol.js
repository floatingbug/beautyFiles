import {getData} from "@/api/getData.js";


export async function getCustomerProtocol(param){
	const {customerId} = param;
	const path = `/get-protocol?customerId=${customerId}`;
	

	const result = await getData({path});

	return result;
}

import {getData} from "@/api/getData.js"


export async function getSelfApplication(param){
	const {customerId} = param;
	const path = `/get-self-application?customerId=${customerId}`;


	const result = await getData({path});

	return result;
}

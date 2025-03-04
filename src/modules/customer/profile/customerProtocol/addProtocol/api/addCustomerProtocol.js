import {updateData} from "@/api/updateData.js";


export async function addCustomerProtocol(param){
	const {customerId, protocol} = param;
	const path = "/add-protocol";


	const result = await updateData({
		path, 
		data: {customerId, protocol}
	});

	return result;
}

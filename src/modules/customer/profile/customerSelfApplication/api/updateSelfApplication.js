import {updateData} from "@/api/updateData.js";


export async function updateSelfApplication(param){
	const result = await updateData(param);

	return result;
}

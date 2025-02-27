import {updateData} from "@/api/updateData.js";


export async function updateCoreData(data){
	const param = {
		path: "/update-core-data",
		data,
	};


	const result = await updateData(param);

	return result;
}

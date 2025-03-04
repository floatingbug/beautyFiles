import {updateData} from "@/api/updateData.js";


export async function updateSkinProperties(data){
	const param = {
		path: "/update-skin-properties",
		data,
	};


	const result = await updateData(param);

	return result;
}

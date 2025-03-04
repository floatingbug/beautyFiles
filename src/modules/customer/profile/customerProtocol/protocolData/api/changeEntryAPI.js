import {updateData} from "@/api/updateData.js";


export async function changeEntryAPI(param){
	const {entryId, changes} = param;
	const path = "/update-protocol-entry";
	const data = {
		entryId,
		changes,
	};


	const result = await updateData({path, data});

	return result;
}

import {deleteData} from "@/api/deleteData.js";


export async function deleteEntryAPI(param){
	const {entryId} = param;
	const path = "/delete-entry";
	const data = {
		entryId,
	};


	const result = await deleteData({path, data});

	return result;
}

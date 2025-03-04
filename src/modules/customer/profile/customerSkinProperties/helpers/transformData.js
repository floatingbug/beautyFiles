export function transformData(obj){
	const {_id, customerId, userId, ...filteredData} = obj; 


	const transformedData = Object.entries(filteredData).
		map(([key, value], index) => ({
			label: key.charAt(0).toUpperCase() + key.slice(1),
			key,
			value,
			id: index,
			isEditing: false,
			type: Array.isArray(value) ? "array" : typeof value === "object" ? "object" : typeof value,
		}));

	
	return transformedData;
}

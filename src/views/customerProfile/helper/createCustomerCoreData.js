export function createCustomerCoreData(coreData){
	let coreDataInput = Object.entries(coreData).map(([key, value]) => ({
		label: key.charAt(0).toUpperCase() + key.slice(1),
		id: key,
		input: value,
		icon: "",
		isEdit: false,
	}));

	return coreDataInput;
}

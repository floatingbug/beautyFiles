export function transformData(dataToTransform){
	const transfomedData = {};


	for(const key in dataToTransform){

		if(typeof dataToTransform[key] === "object"){
			const tmpTransformedData = Object.entries(dataToTransform[key])
				.map(([key, value], index) => {
					return {
						label: formatString(key),
						key,
						value,
						id: index,
						isEditing: false,
					};
				});


			transfomedData[key] = tmpTransformedData;
		}
		else{
			transfomedData[key] = dataToTransform[key];
		}
	}

	return transfomedData;
}


function formatString(str) {
    return str.replace(/(^\w|[-/]\w)/g, match => match.toUpperCase());
}

export function transformData(dataToTransform){
	const transformedData = [];


	dataToTransform.forEach(data => {
		const tmpData = Object.entries(data)
		.map(([key, value]) => {
			let newData = {};

			if(key === "datum"){
				const dateString = "2025-02-27T23:00:00.000Z";
				const date = new Date(dateString);

				const formattedDate = date.toLocaleDateString("de-DE", {
					day: "2-digit",
					month: "2-digit",
					year: "numeric"
				});

				newData = {
					label: "Datum",
					key,
					value: formattedDate,
					isEditing: false,
				}
			}
			else{
				newData = {
					label: capitalizeSpecial(key),
					key,
					value,
					isEditing: false,
				};
			}

			return newData;
		});

		transformedData.push(tmpData);
	});


	return transformedData;
}


function capitalizeSpecial(str) {
    return str.replace(/\b[a-z]|(?<=\/)[a-z]|(?<=-)[a-z]/g, char => char.toUpperCase());
}

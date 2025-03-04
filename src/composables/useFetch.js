export async function useFetch(path, options){
	const url = import.meta.env.VITE_API_URL + path;


	try{
		const response = await fetch(url, options);
		const json = await response.json();

		return json;
	}
	catch(error){
		console.log(error);
	}
}

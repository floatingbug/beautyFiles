<script setup>
import {ref, onMounted} from "vue";
import {getCoreData} from "./api/getCoreData.js";
import {transformData} from "./helpers/transformData.js";
import ProfileData from "./components/ProfileData.vue";
import {updateCoreData} from "./api/updateCoreData.js";
import { useToast } from 'primevue/usetoast';


const props = defineProps({
	customerId: String,
});


const toast = useToast();
const coreData = ref([]);


onMounted(async () => {
	const fetchedCoreData = await getCoreData({customerId: props.customerId});

	if(!fetchedCoreData.success){
		return console.log(fetchedCoreData.errors);
	}

	coreData.value = transformData(fetchedCoreData.coreData[0]);
});


function handleEvents(event){
	if(event.action === "profileData"){
		sendUpdates(event);
	}
}

async function sendUpdates(event){
	const updateData = {
		customerId: props.customerId,
		changes: event.data.changes,
	};

	const result = await updateCoreData(updateData);

	if(!result.success){
		return console.log(result.errors);
	}

	//set updated properties in coreData
	coreData.value = event.data.coreDataCopy

	toast.add({ severity: 'info', summary: 'Info', detail: "Stammdaten wurden geändert", life: 3000 });
}

</script>


<template>    
	<ProfileData :dataArray="coreData" @profileData:action="handleEvents">
		<template #submitButton>
			Stammdaten ändern
		</template>

		<template #cancelButton>
			Änderung abbrechen
		</template>
	</ProfileData>
</template>   


<style scoped>
</style>

<script setup>
import {ref, onMounted} from "vue";
import {getSkinProperties} from "./api/getSkinProperties.js";
import {transformData} from "./helpers/transformData.js";
import ProfileData from "./components/ProfileData.vue";
import {updateSkinProperties} from "./api/updateSkinProperties.js";
import { useToast } from 'primevue/usetoast';


const props = defineProps({
	customerId: String,
});


const toast = useToast();
const skinPropertiesData = ref([]);


onMounted(async () => {
	const fetchedSkinProperties = await getSkinProperties({customerId: props.customerId});

	if(!fetchedSkinProperties.success){
		return console.log(fetchedSkinProperties.errors);
	}

	skinPropertiesData.value = transformData(fetchedSkinProperties.hauteigenschaften[0]);
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

	const result = await updateSkinProperties(updateData);

	if(!result.success){
		return console.log(result.errors);
	}

	//set updated properties in coreData
	skinPropertiesData.value = event.data.dataArrayCopy;

	toast.add({ severity: 'info', summary: 'Info', detail: "Hauteigenschaften wurden geändert", life: 3000 });
}

</script>


<template>    
	<ProfileData :dataArray="skinPropertiesData" @profileData:action="handleEvents">
		<template #submitButton>
			Hauteigenschaften ändern
		</template>

		<template #cancelButton>
			Änderung abbrechen
		</template>
	</ProfileData>
</template>   


<style scoped>
</style>

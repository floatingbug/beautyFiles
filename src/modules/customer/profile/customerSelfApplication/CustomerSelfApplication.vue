<script setup>
import {ref, onMounted} from "vue";
import {getSelfApplication} from "./api/getSelfApplication.js";
import {transformData} from "./helpers/transformData.js";
import ProfileData from "./components/ProfileData.vue";
import {updateSelfApplication} from "./api/updateSelfApplication.js";
import {useToast} from "primevue/usetoast";


const props = defineProps({
	customerId: String,
});


const toast = useToast();
const selfApplicationData = ref([]);


onMounted(async () => {
	const fetchedSelfApplication = await getSelfApplication({customerId: props.customerId});

	if(!fetchedSelfApplication.success){
		return console.log(fetchedSelfApplication.errors);
	}

	selfApplicationData.value = transformData(fetchedSelfApplication.selfApplications);
});


function handleEvents(event){
	if(event.action === "profileData"){

		sendChanges({customerId: props.customerId, changes: event.data.changes, event});
	}
}

async function sendChanges(param){
	const {customerId, changes, event} = param;

	const data = {
		changes,
		customerId,
	};
	
	const path = "/update-self-application";


	const result = await updateSelfApplication({path, data});

	if(!result.success){
		return console.log(result.errors);
	}

	//set updated properties in selfApplicationData
	selfApplicationData.value = event.data.selfApplicationData;
	
	toast.add({ severity: 'info', summary: 'Info', detail: "Eigenanwendung wurden geändert", life: 3000 });
}

</script>


<template>    
	<ProfileData :dataArrays="selfApplicationData" @profileData:action="handleEvents">
		<template #submitButton>Eigenanwendung ändern</template>
		<template #cancelButton>Änderung abbrechen</template>
	</ProfileData>
</template>   


<style scoped>
</style>

<script setup>
import {ref, onMounted, watch} from "vue";
import {getProtocolData} from "./api/getProtocolData.js";
import ProtocolData from "./components/ProtocolData.vue";
import {transformData} from "./helpers/transformData.js";
import {useToast} from "primevue/usetoast";


const props = defineProps({
	customerId: String,
	reloadKey: Number,
});


const toast = useToast();
const protocolData = ref([]);


watch(() => props.reloadKey, async () => {
	const fetchedProtocol = await getProtocolData({customerId: props.customerId});

	if(!fetchedProtocol.success){
		return console.log(fetchedProtocol.errors);
	}

	protocolData.value = transformData(fetchedProtocol.entries);
});


onMounted(async () => {
	const fetchedProtocol = await getProtocolData({customerId: props.customerId});

	if(!fetchedProtocol.success){
		return console.log(fetchedProtocol.errors);
	}

	protocolData.value = transformData(fetchedProtocol.entries);
});


const eventHandlers = {
	protocolDataEvents: function (event){
		if(event.action === "entryDeleted"){
			//delete entry from protocolData
			const entryIndex = protocolData.value.findIndex(entry => {
				return entry.some(obj => obj.value === event.data.entryId);
			});

			protocolData.value.splice(entryIndex, 1);
			protocolData.value = [...protocolData.value];

			toast.add({ severity: 'info', summary: 'Info', detail: "Eintrag wurde gelöscht", life: 3000 });
		}
		else if(event.action === "changes"){
			protocolData.value = event.data.protocolData;
			toast.add({ severity: 'info', summary: 'Info', detail: "Eintrag wurde geändert", life: 3000 });
		}
	},
};
</script>


<template>    
	<h2>Protokoll Einträge</h2>

	<ProtocolData :protocolData="protocolData" @protocolData:action="eventHandlers.protocolDataEvents"></ProtocolData>
</template>   


<style scoped>
h2 {
	text-align: center;
	margin-bottom: 2rem;
}
</style>

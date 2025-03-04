<script setup>
import {ref, onMounted} from "vue";
import {transformData} from "./helpers/transformData.js";
import ProtocolForm from "./components/ProtocolForm.vue";
import {addCustomerProtocol} from "./api/addCustomerProtocol.js";
import {useToast} from "primevue/usetoast";


const props = defineProps({
	customerId: String,
});


const emit = defineEmits(["customerAddProtocol:action"]);


const toast = useToast();
const profileData = ref();
const isProtocolAdding = ref(false);


onMounted(async () => {
});


function handleEvents(event){
	if(event.action === "newProtocol"){
		sendProtocol(event.protocol);
	}
	if(event.action === "cancelProtocolCreation"){
		isProtocolAdding.value = false;
	}
}

async function sendProtocol(protocol){
	const result = await addCustomerProtocol({protocol, customerId: props.customerId});

	if(!result.success){
		return console.log(result.errors);
	}

	emit("customerAddProtocol:action", {
		action: "entryAdded",
	});

	isProtocolAdding.value = false;

	toast.add({ severity: 'info', summary: 'Info', detail: "Protokoll wurde hinzugefügt", life: 3000 });
}

</script>


<template>    
	<Button v-if="!isProtocolAdding" @click="isProtocolAdding = true;">Neuer Eintrag</Button>

	<h3 v-if="isProtocolAdding">Neuer Protokoll Eintrag</h3>

	<ProtocolForm v-if="isProtocolAdding" @protocolFormData:action="handleEvents"></ProtocolForm>
</template>   


<style scoped>
h3 {
	margin: 4rem 0;
}
</style>

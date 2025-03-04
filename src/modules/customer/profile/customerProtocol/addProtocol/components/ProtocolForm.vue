<script setup>
import {toRaw} from "vue";
import protocolFormData from "../data/protocolFormData.js";
import DatePicker from "primevue/datepicker";


const emit = defineEmits(["protocolFormData:action"]);


function emitData(){
	const RawProtocolFormData = toRaw(protocolFormData.value);
	const protocol = RawProtocolFormData.reduce((accumulator, data) => {
		accumulator[data.name] = data.value;

		return accumulator;
	}, {});


	emit("protocolFormData:action", {
		action: "newProtocol",
		protocol,
	});
}

function emitCancel(){
	protocolFormData.value.forEach(data => {
		if(data.type !== "date") data.value = "";
	})

	emit("protocolFormData:action", {
		action: "cancelProtocolCreation",
	});
}
</script>


<template>    
	<div class="protocol-form-container">
		<div class="data-container" v-for="(data, index) in protocolFormData">
			<div v-if="data.type === 'string'" class="data">
				<span>{{data.label}}:</span>
				<InputText v-model="data.value"></InputText>
			</div>

			<div v-if="data.type === 'date'" class="data">
				<span>{{data.label}}</span>
				<DatePicker v-model="data.value" dateFormat="dd/mm/yy" />
			</div>
		</div>

		<Button class="protocoll-submit-button" @click="emitData">Eintrag hinzufügen</Button>
		<Button class="protocoll-cancel-button" severity="warn" @click="emitCancel">Abbrechen</Button>
	</div>
</template>   


<style scoped>
.protocol-form-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
}

.data {
	display: flex;
	align-items: center;

	span, .p-inputtext {
		flex: 1;
	}

	span {
		font-size: 1.2rem;
	}
}

.protocoll-submit-button {
	margin-top: 2rem;
}
</style>

<script setup>
import {ref, toRaw, watch} from "vue";
import Select from "primevue/select";


const props = defineProps({
	dataArray: Array,
});


const emit = defineEmits(["profileData:action"]);


const dataArrayCopy = ref([]);
const isEditing = ref(false);



watch(() => props.dataArray, (newValue) => {
	dataArrayCopy.value = JSON.parse(JSON.stringify(props.dataArray));
});


function undoSingleValue(dataId){
	const data = props.dataArray.find(data => data.id === dataId);
	const dataCopy = dataArrayCopy.value.find(data => data.id === dataId);

	
	dataCopy.value = data.value;

	//close submit and cancel button if there is no editing left
	isEditing.value = !dataArrayCopy.value.every(data => !data.isEditing);
}

function undoAllChanges(){
	dataArrayCopy.value = JSON.parse(JSON.stringify(props.dataArray));
	isEditing.value = false;
}

function submitChanges(){
	const changes = dataArrayCopy.value.filter(data => data.isEditing)
		.reduce((accumulator, data) => {
			accumulator[data.key] = data.value;

			return accumulator;
		}, {});


	emit("profileData:action", {
		action: "profileData",
		data: {
			changes: toRaw(changes),		
			coreDataCopy: dataArrayCopy.value.map(data => toRaw(data)),
		}
	});

	dataArrayCopy.value.forEach(data => data.isEditing = false);

	isEditing.value = false;
}
</script>


<template>    
	<ul class="profile-data-container">
		<li class="data" v-for="(data, index) in dataArrayCopy">

			<!-- input text -->

			<div v-if="!(data.value && data.value.options)" class="data-container">
				<span>{{data.label}}:</span>
				<span v-if="!data.isEditing">{{data.value}}</span>
				<InputText v-if="data.isEditing" v-model="data.value" :value="data.value"></InputText>
				<Button 
					v-if="!data.isEditing"
					variant="outlined"
					rounded
					@click="data.isEditing = true; isEditing = true;"
				>
					edit
				</Button>
				<Button 
					v-if="data.isEditing"
					variant="text"
					rounded
					@click="data.isEditing = false; undoSingleValue(data.id);"
				>
					<i class="pi pi-times-circle" style="font-size: 2rem;"></i>
				</Button>
			</div>

			<!-- menu with options -->

			<div v-if="data.value && data.value.options" class="data-container">
				<span>{{data.label}}:</span>
				<span v-if="!data.isEditing">{{data.value.currValue}}</span>
				<Select v-if="data.isEditing" v-model="data.value.currValue" :options="data.value.options"></Select>
				<Button 
					v-if="!data.isEditing"
					variant="outlined"
					rounded
					@click="data.isEditing = true; isEditing = true;"
				>
					edit
				</Button>
				<Button 
					v-if="data.isEditing"
					variant="text"
					rounded
					@click="data.isEditing = false; undoSingleValue(data.id);"
				>
					<i class="pi pi-times-circle" style="font-size: 2rem;"></i>
				</Button>
			</div>
		</li>
	</ul>

	<div v-if="isEditing" class="submit-cancel-buttons">
		<Button
			@click="submitChanges"
		>
			<slot name="submitButton"></slot>
		</Button>

		<Button
			severity="warn"
			@click="isEditing = false; undoAllChanges()"
		>
			<slot name="cancelButton"></slot>
		</Button>
	</div>
</template>   


<style scoped>
h1 {
	font-size: 3rem;
}

.profile-data-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.data-container {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;

	span, .p-inputtext {
		flex: 1;
	}

	.p-button {
		padding: 0.5rem;
	}
}

.submit-cancel-buttons {
	width: 100%;
	min-height: 50px;
	display: flex;
	justify-content: space-evenly;
	gap: 1rem;
	margin-top: 4rem;

	.p-button {
		width: 30%;
		min-width: 150px;
	}
}
</style>

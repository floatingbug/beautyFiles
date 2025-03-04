<script setup>
import {ref, toRaw, watch} from "vue";
import Select from "primevue/select";


const props = defineProps({
	dataArrays: Object,
});


const emit = defineEmits(["profileData:action"]);


const dataArraysCopy = ref({});
const isEditing = ref(false);


watch(() => props.dataArrays, (newValue) => {
	dataArraysCopy.value = JSON.parse(JSON.stringify(props.dataArrays));
});


function undoSingleValue(dataId, key){
	const data = props.dataArrays[key].find(data => data.id === dataId);
	const dataCopy = dataArraysCopy.value[key].find(data => data.id === dataId);

	
	dataCopy.value = data.value;

	//close submit and cancel button if there is no editing left
	isEditing.value = !dataArraysCopy.value[key].every(data => !data.isEditing);
}

function undoAllChanges(){
	dataArraysCopy.value = JSON.parse(JSON.stringify(props.dataArray));
	isEditing.value = false;
}

function submitChanges(){
	let changes = {};
	const RawSelfApplicationData = {};


	for(const key in dataArraysCopy.value){
		if(Array.isArray(dataArraysCopy.value[key])){
			changes[key] = dataArraysCopy.value[key].filter(data => data.isEditing)
				.reduce((accumulator, data) => {
					accumulator[data.key] = data.value;

					return accumulator;
				}, {});
				
			if(Object.keys(changes[key]).length === 0) delete changes[key];
				
			RawSelfApplicationData[key] = dataArraysCopy.value[key].map(data => toRaw(data));
		}
	}


	emit("profileData:action", {
		action: "profileData",
		data: {
			changes: toRaw(changes),		
			selfApplicationData: RawSelfApplicationData,
		}
	});


	for(const key in dataArraysCopy.value){
		if(Array.isArray(dataArraysCopy.value[key])){
			dataArraysCopy.value[key].forEach(data => data.isEditing = false);
		}
	}

	isEditing.value = false;
}
</script>


<template>    
	<ul class="profile-data-container">
		<li class="data-container" v-for="(arr, key) in dataArraysCopy">
			<h2>{{key}}</h2>
			<ul class="data-content">
				<li v-for="(data, index) in arr">
					<div class="data">
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
							@click="data.isEditing = false; undoSingleValue(data.id, key);"
						>
							<i class="pi pi-times-circle" style="font-size: 2rem;"></i>
						</Button>
					</div>
				</li>
			</ul>
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
.profile-data-container {
	width: 100%;
}

.data-container {
	display: flex;
	flex-direction: column;
	margin-top: 2rem;

	h2 {
		margin-bottom: 1rem;
	}
}

.data-content {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.data {
	width: 100%;
	display: flex;

	span {
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

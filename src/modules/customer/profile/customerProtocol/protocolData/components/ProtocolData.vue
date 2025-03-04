<script setup>
import {ref, watch, toRaw} from "vue";
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Dialog from "./Dialog.vue";
import {deleteEntryAPI} from "../api/deleteEntryAPI.js";
import {changeEntryAPI} from "../api/changeEntryAPI.js";


const props = defineProps({
	protocolData: Array,
});


const emit = defineEmits(["protocolData:action"]);


const protocolDataCopy = ref();
const selectedEntryid = ref("");
const isEditing = ref(false);


watch(() => props.protocolData, () =>  {
	protocolDataCopy.value = JSON.parse(JSON.stringify(props.protocolData));
});


function handleDialogEvents(event){
	if(event.action === "cancelDeleting") selectedEntryid.value = "";
	else if(event.action === "applyDeleting"){
		const rawEntryId = toRaw(selectedEntryid.value);
		deleteEntry(rawEntryId);
	}
}

async function deleteEntry(entryId){
	const result = await deleteEntryAPI({entryId});

	if(!result.success){
		return console.log(result.errors)
	}


	emit("protocolData:action", {
		action: "entryDeleted",
		data: {
			entryId: selectedEntryid.value
		},
	});
	
	selectedEntryid.value = "";
}

function closeEditing(){
	const isNoEditingRemaining = protocolDataCopy.value.every(entry => {
		return !entry.find(obj => obj.isEditing);
	});

	if(isNoEditingRemaining) isEditing.value = false;
}

function submitChanges(){
	const changes = protocolDataCopy.value
		.flatMap(innerArray => innerArray)
		.filter(obj => obj.isEditing)
		.reduce((accumulator, obj) => {
			accumulator[obj.key] = obj.value;

			return accumulator;
		}, {});


	const firstMatchingArray = protocolDataCopy.value.find(innerArray =>
		innerArray.some(obj => obj.isEditing)
	);

	const entryId = firstMatchingArray?.find(obj => obj.key === "entryId")?.value;

	changeEntry({entryId, changes});
}

async function changeEntry(param){
	const {entryId, changes} = param;


	const result = await changeEntryAPI({entryId, changes});

	if(!result.success){
		return console.log(result.errors);
	}

	emit("protocolData:action", {
		action: "changes",
		data: {
			protocolData: toRaw(protocolDataCopy.value),
		},
	});

	isEditing.value = false;
}

function undoAllChanges(){
	protocolDataCopy.value = JSON.parse(JSON.stringify(props.protocolData));
	isEditing.value = false;
}
</script>


<template>    
	<div class="protocol-data-container">
		<Accordion @update:value="undoAllChanges">
			<AccordionPanel v-for="(entry, index) in protocolDataCopy" :value="index">
				<AccordionHeader>
					<div class="accordion-header-left">
						<span>Datum: </span>
						<span>{{entry[1].value}}</span>
					</div>

					<div class="accordion-header-right">
						<Button class="btn-delete-entry" 
							variant="outlined" 
							severity="warn" 
							@click="selectedEntryid = entry[0].value;"
						>
							Eintrag löschen
						</Button>
					</div>
				</AccordionHeader>
				<AccordionContent>
					<ul class="data-container">
						<li v-for="(data, index) in entry">
							<div v-if="data.key !== 'datum' && data.key !== 'entryId'" class="data">
								<div v-if="!data.isEditing" class="entry">
									<span>{{data.label}}: </span>
									<span>{{data.value}}</span>
									<Button
										class="edit-button"
										variant="outlined"
										rounded
										@click="data.isEditing = true; isEditing = true;"
									>
										edit
									</Button>
								</div>

								<div v-if="data.isEditing" class="edit-entry">
									<span>{{data.label}}: </span>
									<InputText class="input-text" v-model="data.value"></InputText>
									<Button
										class="edit-button"
										variant="text"
										rounded
										@click="data.isEditing = false; closeEditing();"
									>
										<i class="pi pi-times-circle" style="font-size: 2rem;"></i>
									</Button>

								</div>
							</div>
						</li>
						
					</ul>
					
					<div v-if="isEditing" class="submit-cancel-buttons">
						<Button
							@click="submitChanges"
						>
							Eintrag ändern
						</Button>

						<Button
							severity="warn"
							@click="isEditing = false; undoAllChanges()"
						>
							Änderung abbrechen
						</Button>
					</div>
				</AccordionContent>
			</AccordionPanel>
		</Accordion>
		
		<Dialog 
			v-if="selectedEntryid"
			:entryId="selectedEntryid"
			@dialog:action="handleDialogEvents"
		>
		</Dialog>
	</div>
</template>   


<style scoped>
.protocol-data-container {
	display: flex;
	flex-direction: column;
}

.data-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	list-style: none;

	span {
		flex: 1;
	}
}

.entry {
	display: flex;

	span {
		flex: 1;
	}
	
	.edit-button {
		padding: .5rem;
	}
}

.edit-entry {
	display: flex;
	align-items: center;
	
	span, .input-text {
		flex: 1;
	}
}


.accordion-header-right {
	margin-left: auto;
	margin-right: 2rem;
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

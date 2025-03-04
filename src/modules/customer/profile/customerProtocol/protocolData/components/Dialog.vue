<script setup>
import Dialog from 'primevue/dialog';


const props = defineProps({
	entryId: String,
});


const emit = defineEmits(["dialog:action"]);


function cancelDeleting(){
	emit("dialog:action", {
		action: "cancelDeleting",
	});
}

function applyDeleting(){
	emit("dialog:action", {
		action: "applyDeleting",
		data: {
			entryId: props.entryId,
		},
	});
}

</script>


<template>    
	<Dialog :visible="true" modal header="Eintrag löschen">
		<div class="buttons-container">
			<Button severity="warn" @click="applyDeleting">
				löschen
			</Button>
			<Button @click="cancelDeleting">
				abbrechen
			</Button>
		</div>
	</Dialog>
</template>   


<style scoped>
.buttons-container {
	display: flex;
	gap: 1rem;
}
</style>

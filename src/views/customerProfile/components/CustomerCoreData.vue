<script setup>
import {ref, reactive} from "vue";
import Select from 'primevue/select';


const props = defineProps({
	coreDataInput: Array,
});


const currKundengruppe = props.coreDataInput.filter(data => data.id === "kundengruppe")[0].input;


const changedValues = reactive({
	kundengruppe: currKundengruppe,
});

const kundengruppeItems = ref([
	{
		name: "Neukunde",
	},
	{
		name: "Stammkunde",
	},
	{
		name: "VIP",
	},
]);


</script>


<template>    
	<div class="core-data-container">
		<h1>Stammdaten</h1>

		<div class="core-data-content">
			<div class="core-data" v-for="(data, index) in coreDataInput">
				<div v-if="data.id !== 'kundengruppe'" class="core-data">
					<span class="label">{{data.label}}: </span>
					<span v-if="!data.isEdit">{{data.input}}</span>
					<InputText v-if="data.isEdit" v-model="data.input"></InputText>
					<Button v-if="!data.isEdit" outlined rounded @click="data.isEdit = true">edit</Button>
				</div>

				<div v-else class="core-data">
					<span class="label">{{data.label}}: </span>
					<Select v-model="changedValues.kundengruppe" :options="kundengruppeItems" :placeholder="changedValues.kundengruppe" optionLabel="name"></Select>
				</div>
			</div>
		</div>

		<Button class="store-button">Stammdaten Übernehmen</Button>
	</div>
</template>   


<style scoped>
.core-data-container {
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
}

h1 {
	text-align: center;
}

.core-data-content {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
}

.core-data {
	width: 100%;
	display: flex;
	gap: 1rem;

	span {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.p-button {
		padding: .5rem;
	}

	:deep(.p-treeselect-label) {
		font-size: 1rem;
		padding: 0.2rem;
	}
}

.label {
	font-size: 1.2rem;
}

.store-button {
	margin-top: 2rem;
}
</style>

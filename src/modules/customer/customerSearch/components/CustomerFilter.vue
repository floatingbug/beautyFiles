<script setup>
import {reactive, ref} from "vue";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import buttonData from "../data/buttonData.js";
import {device} from "@/composables/device.js";


const emit = defineEmits(["filter:action"]);


const filterInput = reactive({
	name: "",
	vorname: "",
	wohnort: "",
	alter: null,
	baldGeburtstag: null,
});

const selectButtons = ref(buttonData);


function search(){
	emit("filter:action", {
		data: {
			name: filterInput.name,
			vorname: filterInput.vorname,
			wohnort: filterInput.wohnort,
			alter: filterInput.alter,
			baldGeburtstag: filterInput.baldGeburtstag,
		},
	});
}

function handleSelectButtonClick(button){
	button.isActive = !button.isActive;
}
</script>


<template>    
	<header>
		<h1>Kunden Suche</h1>
	</header>

	<div class="filter-content">

		<Divider></Divider>

		<!-- input fields -->
		<div class="input-container">
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-user"></i>
				</InputGroupAddon>
			
				<FloatLabel variant="in">
					<InputText id="name" v-model="filterInput.name"></InputText>
					<label for="name">Name</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-user"></i>
				</InputGroupAddon>
			
				<FloatLabel variant="in">
					<InputText id="firstName" v-model="filterInput.vorname"></InputText>
					<label for="firstName">Vorname</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-home"></i>
				</InputGroupAddon>
			
				<FloatLabel variant="in">
					<InputText id="lokation" v-model="filterInput.wohnort"></InputText>
					<label for="lokation">Wohnort</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-home"></i>
				</InputGroupAddon>
			
				<FloatLabel variant="in">
					<InputText id="age" v-model="filterInput.alter"></InputText>
					<label for="age">Alter</label>
				</FloatLabel>
			</InputGroup>
		
		<Divider></Divider>

		<!-- button selects -->
		<div class="button-select-container">
			<Button 
				v-for="(button, index) in selectButtons" 
				:class="{'button-active': button.isActive}" 
				severity="info"
				:outlined="!button.isActive"
				@click="handleSelectButtonClick(button)"
				>
				{{button.label}}
			</Button>
		</div>

		<Divider></Divider>

		<!-- submit button -->
		<div class="submit-button-container">
			<Button @click="search">Suche</Button>
		</div>
	</div>
	</div>
</template>   


<style scoped>
header {
	h1 {
		margin-top: 5rem;
	}
}
.filter-content {
	width: 90%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	text-align: center;
}

.input-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 10% 0;
}

.button-select-container {
	display: flex;
	margin: 10% 0;

	.p-button {
		padding: 0.2rem;
	}
}

.submit-button-container {
	display: flex;
	margin: 10% 0;

	.p-button {
		width: 100%;
	}
}

@media(min-width: 480px) {
	header {
		h1 {
			font-size: 3rem;
		}
	}
}

@media(min-width: 768px) {
	header {
		h1 {
			font-size: 4rem;
		}
	}

	.input-container {
		margin-top: 20%;
	}
}

@media(min-width: 1024px) {
	.filter-content {
		max-width: 1050px;
		margin: 2rem 0;
	}

	.input-container {
		flex-direction: row;
		margin: 0;
	}

	.button-select-container {
		align-items: center;
		margin: 0;
	}

	.submit-button-container {
		margin: 0;
	}
}
</style>

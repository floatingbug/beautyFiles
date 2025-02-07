<script setup>
import {reactive} from "vue";


const emit = defineEmits();


const filterInput = reactive({
	name: "",
	age: null,
	birthdaySoon: false,
});


function search(){
	emit("filter:action", {
		data: {
			name: filterInput.name,
			age: filterInput.age,
			birthdaySoon: filterInput.birthdaySoon,
		},
	});
}

</script>


<template>    
	<div class="filter-content">
		<h1>Kunden Suche</h1>

		<div class="input-container">
			<label for="name">Name</label>
			<input id="name" type="name" v-model="filterInput.name">
		</div>
		
		<div class="input-container">
			<label for="age">Alter</label>
			<input id="age" type="number" v-model="filterInput.age">
		</div>

		<div class="radio-button">
			<label for="birthday">Bald Geburtstag</label>
			<input type="checkbox" v-model="filterInput.birthdaySoon">
		</div>

		<button @click="search">Suche</button>
	</div>
</template>   


<style scoped>
.filter-content {
	width: 90%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;
}

.input-container {
	display: flex;
	flex-direction: column;

	input {
		font-size: 1rem;
	}
}

.radio-button {
	display: flex;
	align-items: center;
	gap: 1rem;
}
</style>

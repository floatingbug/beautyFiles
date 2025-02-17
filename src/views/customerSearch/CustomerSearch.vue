<script setup>
import {ref} from "vue";
import Filter from "./components/Filter.vue";
import {getCustomerId} from "@/api/getCustomerId.js";


const customer = ref([]);


async function handleFilterEvent(event){
	customer.value = await getCustomerId(event.data);

	console.log("--->", customer.value);
}
</script>


<template>    
	<div class="filter-container">
		<Filter @filter:action="handleFilterEvent"></Filter>
	</div>
</template>   


<style scoped>
.filter-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

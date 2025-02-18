<script setup>
import {ref} from "vue";
import Filter from "./components/Filter.vue";
import {getCustomerId} from "@/api/getCustomerId.js";


const customerArray = ref([]);
const errors = ref([]);


async function handleFilterEvent(event){
	const result = await getCustomerId(event.data);

	if(!result.success) return errors.value = result.errors;

	customerArray.value = result.customer;

}
</script>


<template>    
	<div class="filter-container">
		<Filter @filter:action="handleFilterEvent"></Filter>
	</div>

	<div class="customer-container">
		<div class="customer-content">
			<Button class="customer" 
				v-for="(customer, index) in customerArray"
				as="router-link"
				:to="`/customer-profile?id=${customer.customerId}`"
			>
				<div class="customer-data">
					<span>Vorname: </span> 
					{{customer.vorname}}
				</div>
				
				<div class="customer-data">
					<span>Name: </span> 
					{{customer.name}}
				</div>
			</Button>
		</div>
	</div>
</template>   


<style scoped>
.filter-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.customer-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.customer-content {
	width: 90%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
}

.customer {
	width: 100%;
	display: flex;
	gap: 1rem;
	text-decoration: none;
}

</style>

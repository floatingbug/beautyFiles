<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import InputField from "@/components/InputField.vue";
import inputFieldData from "../data/inputFieldData.js";
import {addCustomer} from "../api/addCustomer.js";


const router = useRouter();
const errors = ref([]);


async function submitCustomer(){
	const currInputFieldData = inputFieldData.value.reduce((accumulator, input) => {
		accumulator[input.id] = input.input;
		return accumulator;
	}, {});

	const result = await addCustomer(currInputFieldData);

	if(!result.success){
		return errors.value = result.errors;
	}

	router.push(`/customer-profile?id=${result.customerId}`);
}
</script>


<template>    
	<div class="add-customer-container">
		<h1>Neuen Kunden anlegen</h1>

		<div class="add-customer-content">
			<InputField v-for="(data, index) in inputFieldData" :inputFieldData="data"></InputField>

			<div v-if="errors.length > 0" class="errors">
				<div v-for="(error, index) in errors">
					{{error.message}}
				</div>
			</div>
			
			<Button @click="submitCustomer">Kunde anlegen</Button>
		</div>
	</div>
</template>   


<style scoped>
.add-customer-container {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		text-align: center;
		margin-top: 2rem;
	}
}

.add-customer-content {
	width: 90%;
	height: 80%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
}
</style>

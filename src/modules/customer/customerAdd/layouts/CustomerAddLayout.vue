<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import InputField from "@/components/InputField.vue";
import inputFieldData from "../data/inputFieldData.js";
import Select from 'primevue/select';
import {addCustomer} from "../api/addCustomer.js";


const router = useRouter();
const errors = ref([]);


async function submitCustomer(){
	const currInputFieldData = inputFieldData.value.reduce((accumulator, input) => {
		accumulator[input.id] = input.input;

		if(input.options){
			accumulator.kundengruppe = {
				options: input.options,
				currValue: input.currValue,
			};
		}

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
			<div class="data-container" v-for="(data, index) in inputFieldData">
				<div v-if="data.type === 'string' || data.type === 'number'" class="data">
					<InputField :inputFieldData="data"></InputField>
				</div>
				
				<div v-if="data.type === 'menu'" class="data select">
					<span>Kundengruppe: </span>
					<Select v-if="!data.isEditing" v-model="data.currValue" :options="data.options" placeholder="test"></Select>
				</div>
				
				<div v-if="errors.length > 0" class="errors">
					<div v-for="(error, index) in errors">
						{{error.message}}
					</div>
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
	padding-bottom: 4rem;

	h1 {
		text-align: center;
		margin-top: 5rem;
	}
}

.add-customer-content {
	width: 90%;
	max-width: 1024px;
	height: 80%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
}

.data-container {
	width: 100%;
	display: flex;

	.data {
		width: 100%;
	}
}

.select {
	display: flex;
	align-items: center;

	span, .p-select {
		flex: 1;
	}

	span {
		font-size: 1.2rem;
	}
}


</style>

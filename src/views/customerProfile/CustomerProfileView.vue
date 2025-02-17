<script setup>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import CustomerCoreData from "./components/CustomerCoreData.vue";
import {getCoreData} from "@/api/getCoreData.js";
import {createCustomerCoreData} from "./helper/createCustomerCoreData.js";


const route = useRoute();
const errors = ref([]);
const isFetchedData = ref(false);
const customerCoreData = ref([]);


onMounted(async () => {
	const customerId = route.query.id;

	//get core data
	const result = await getCoreData(customerId);

	if(!result){
		errors.value = result.errors;
		return;
	}

	const coreData = result.coreData[0];

	//remove not required properties
	delete coreData._id;
	delete coreData.customerId;
	delete coreData.userId;

	//create coreDataInput for CustomerCoreData component
	customerCoreData.value = createCustomerCoreData(coreData);

	isFetchedData.value = true;
});
</script>


<template>    
	<div v-if="isFetchedData" class="container">
		<div class="content">
			<CustomerCoreData :coreDataInput="customerCoreData"></CustomerCoreData>
		</div>

		<div v-if="errors.length > 0" class="errors">
			<div class="error" v-for="(error, index) in errors">
				{{error}}
			</div>
		</div>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.content {
	width: 80%;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

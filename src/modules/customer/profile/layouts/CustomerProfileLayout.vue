<script setup>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import CustomerCoreData from "./components/CustomerCoreData.vue";


const route = useRoute();
const errors = ref([]);


onMounted(async () => {
	const customerId = route.query.id;
});
</script>


<template>    
	<div class="container">
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

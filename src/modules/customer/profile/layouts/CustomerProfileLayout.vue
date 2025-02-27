<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import CustomerCoreData from "../customerCoreData/CustomerCoreData.vue";
import CustomerSkinProperties from "../customerSkinProperties/CustomerSkinProperties.vue";


const route = useRoute();
const errors = ref([]);
const customerId = ref(route.query.id);


</script>


<template>    
	<div class="container">
		<div class="content">
			<CustomerCoreData :customerId="customerId"></CustomerCoreData>
			<CustomerSkinProperties :customerId="customerId"></CustomerSkinProperties>
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
	max-width: 1000px;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

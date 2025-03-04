<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import CustomerCoreData from "../customerCoreData/CustomerCoreData.vue";
import CustomerSkinProperties from "../customerSkinProperties/CustomerSkinProperties.vue";
import CustomerSelfApplication from "../customerSelfApplication/CustomerSelfApplication.vue";
import CustomerAddProtocol from "../customerProtocol/addProtocol/CustomerAddProtocol.vue";
import CustomerProtocolData from "../customerProtocol/protocolData/CustomerProtocolData.vue";
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';



const route = useRoute();
const errors = ref([]);
const customerId = ref(route.query.id);
const reloadKey = ref(0);


const eventHandlers = {
	handleCustomerAddProtocolEvent: function (event){
		if(event.action === "entryAdded") reloadKey.value++;
	},
};


</script>


<template>    
	<div class="container">
		<div class="content">
			<h1>Kundenprofil</h1>

			<Accordion value="0">
				<AccordionPanel value="0">
					<AccordionHeader>Stammdaten</AccordionHeader>
					<AccordionContent>
						<CustomerCoreData :customerId="customerId"></CustomerCoreData>
					</AccordionContent>
				</AccordionPanel>
				
				<AccordionPanel value="1">
					<AccordionHeader>Hauteigenschaften</AccordionHeader>
					<AccordionContent>
						<CustomerSkinProperties :customerId="customerId"></CustomerSkinProperties>
					</AccordionContent>
				</AccordionPanel>
			
				<AccordionPanel value="2">
					<AccordionHeader>Eigenanwendung</AccordionHeader>
					<AccordionContent>
						<CustomerSelfApplication :customerId="customerId"></CustomerSelfApplication>
					</AccordionContent>
				</AccordionPanel>
			</Accordion>

			<h2 class="protocol-header">Protokoll</h2>

			<div class="customer-add-protocol-container">
				<CustomerAddProtocol 
					:customerId="customerId"
					@customerAddProtocol:action="eventHandlers.handleCustomerAddProtocolEvent"
				>
				</CustomerAddProtocol>
			</div>

			
			<div class="customer-protocol-data-container">
				<CustomerProtocolData 
					:customerId="customerId"
					:reloadKey="reloadKey"
				>
				</CustomerProtocolData>
			</div>
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

h1 {
	font-size: 3rem;
	margin-bottom: 4rem;
}

h2 {
	font-size: 2rem;
	margin-top: 4rem;
}

.content {
	width: 80%;
	max-width: 1000px;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.p-accordion {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.customer-add-protocol-container {
	width: 100%;
	margin: 2rem 0 4rem 0;
}

.customer-protocol-data-container {
	width: 100%;
}
</style>

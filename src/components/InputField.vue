<script setup>
import {ref} from "vue";


const props = defineProps({
	inputFieldData: Object,
});
</script>


<template>    
	<InputGroup>
		<InputGroupAddon>
			<i :class="inputFieldData.icon"></i>
		</InputGroupAddon>

		<FloatLabel variant="on">
			<InputText v-if="inputFieldData.type === 'string'" :id="inputFieldData.id" v-model="inputFieldData.input"></InputText>
			<InputNumber v-else :id="inputFieldData.id" v-model="inputFieldData.input"></InputNumber>
			<label :for="inputFieldData.id">{{inputFieldData.label}}</label>
		</FloatLabel>
	</InputGroup>
</template>   


<style scoped>
</style>

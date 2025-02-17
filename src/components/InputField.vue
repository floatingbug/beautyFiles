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
			<InputText :id="inputFieldData.id" v-model="inputFieldData.input"></InputText>
			<label :for="inputFieldData.id">{{inputFieldData.label}}</label>
		</FloatLabel>
	</InputGroup>
</template>   


<style scoped>
</style>

<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import {device, setDevice} from "@/composables/device.js";
import TheNavbar from "@/modules/navbar/TheNavbar.vue";
import Toast from 'primevue/toast';


onMounted(() => {
	// handle device
	setDevice(window.innerWidth);
	window.addEventListener("resize", () => setDevice(window.innerWidth));
});
</script>

<template>
	<Toast />
	<TheNavbar></TheNavbar>

  <RouterView />
</template>

<style scoped>
</style>

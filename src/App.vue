<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import {device, setDevice} from "@/composables/device.js";
import TheNavbar from "@/modules/navbar/TheNavbar.vue";


onMounted(() => {
	// handle device
	setDevice(window.innerWidth);
	window.addEventListener("resize", () => setDevice(window.innerWidth));
});
</script>

<template>
	<TheNavbar></TheNavbar>

  <RouterView />
</template>

<style scoped>
</style>

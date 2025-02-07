<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import {device, setDevice} from "@/composables/device.js";


onMounted(() => {
	// handle device
	setDevice(window.innerWidth);
	window.addEventListener("resize", () => setDevice(window.innerWidth));
});
</script>

<template>

  <RouterView />
</template>

<style scoped>
</style>

<script setup>
import Navbar from "./components/Navbar.vue";
import NavbarMobile from "./components/NavbarMobile.vue";
import {device} from "@/composables/device.js";
</script>


<template>    
	<Navbar v-if="device ==='desktop' || device === 'laptop'"></Navbar>
	<NavbarMobile v-else></NavbarMobile>
</template>   


<style scoped>
</style>

<script setup>
import Hero from "./components/Hero.vue";
</script>


<template>
	<div class="hero-container">
		<Hero></Hero>
	</div>
</template>


<style scoped>
.hero-container {
	height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
}
</style>

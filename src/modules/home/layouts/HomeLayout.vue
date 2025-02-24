<script setup>
import Hero from "../hero/Hero.vue";
</script>


<template>
	<div class="home-layout">
		<div class="hero-container">
			<Hero></Hero>
		</div>
	</div>
</template>


<style scoped>
.home-layout {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.hero-container {
	margin-top: 10rem;
}
</style>

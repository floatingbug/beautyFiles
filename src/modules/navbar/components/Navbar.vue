<script setup>
import {ref} from "vue";
</script>


<template>    
	<div class="navbar-container">
		<div class="navbar-content card-glass">
			<h1>
				Beauty Files
			</h1>

			<div class="button-container">
				<Button as="router-link" to="/add-customer" severity="contrast" outlined>Kunde anlegen</Button>
				<Button as="router-link" to="/customer-search" severity="contrast" outlined>Kunde suchen</Button>
				<Button as="router-link" to="/add-customer" severity="contrast" outlined>Kunde anlegen</Button>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.navbar-container {
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.navbar-content {
	width: 90%;
	max-width: 1600px;
	height: 50%;
	position: relative;
	display: flex;
	align-items: center;

	h1 {
		position: absolute;
		left: 1rem;
	}
}

.button-container {
	position: absolute;
	right: 0.5rem;
	display: flex;
	gap: 1rem;

	.p-button {
		text-decoration: none;
	}
}
</style>

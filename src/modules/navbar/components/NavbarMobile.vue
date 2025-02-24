<script setup>
import {ref} from "vue";


const isNavbarClose = ref(true);


function closeNavbar(event){
	if(event.target.className.includes("p-button")) isNavbarClose.value = true;
}
</script>


<template>    
	<div v-if="isNavbarClose" class="navbar-open-button">
		<Button severity="contrast" variant="text" @click="isNavbarClose = !isNavbarClose">
			<i class="pi pi-bars" style="font-size: 2rem;"></i>
		</Button>
	</div>

	<div class="navbar-container" :class="{'navbar-open': !isNavbarClose}">
		<div class="navbar-content card-glass" :class="{'navbar-close': isNavbarClose}">
			<h1>Beauty Files</h1>

			<div class="button-container" @click="closeNavbar">
				<Button as="router-link" to="/add-customer" severity="contrast" outlined>Kunde anlegen</Button>
				<Button as="router-link" to="/customer-search" severity="contrast" outlined>Kunde suchen</Button>
				<Button as="router-link" to="/add-customer" severity="contrast" outlined>Kunde anlegen</Button>
			</div>

			<div class="navbar-close-button">
				<Button severity="contrast" outlined @click="isNavbarClose = !isNavbarClose">
					<i class="pi pi-bars"></i>
				</Button>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.navbar-container {
	width: 100%;
	height: 100dvh;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: -1000;
}

.navbar-content {
	width: 90%;
	height: 90%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 2.8rem;
		text-align: center;
		margin-top: 2rem;
	}
}

.button-container {
	width: 90%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	.p-button {
		width: 100%;
		text-decoration: none;
	}
}

.navbar-close-button {
	position: absolute;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
}

.navbar-open-button {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2000;
}

.navbar-close {
	transform: translateY(-110%);
}

.navbar-open {
	z-index: 1000;
}
</style>

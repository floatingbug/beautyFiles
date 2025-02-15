<script setup>
import {device} from "@/composables/device.js";
</script>


<template>    
	<div class="welcome-container card-glass">
		<div class="welcome-text-container">
			<div class="welcome-text">
				<h1>Wilkommen auf Beauty-Files</h1>
				
				<p>
					Elit reiciendis veniam porro eos quia molestiae veritatis? Vel commodi tempore quo accusantium tenetur Voluptatibus aut quo quia beatae quos, at beatae Sit esse saepe ipsum debitis odit quisquam! Debitis
				</p>
			</div>
		</div>
		
		<Divider :layout="device === 'mobile' || device === 'tablet' ? 'horizontal' : 'vertical'"></Divider>
		
		<div class="sign-container">
			<div class="sign-content">
				<h2>Anmelden</h2>
				
				<p>
					Du hast noch kein Konto?
					<Button class="sign-up-link" as="router-link" to="/sign-up" variant="text" severity="info">Registrieren</Button>
				</p>
				
				<Button class="sign-in-link" as="router-link" to="/sign-in">Anmelden</Button>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.welcome-container {
	max-width: 1200px;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem 1rem;
}

.welcome-text-container, .sign-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
}

.welcome-text {
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		max-width: 350px;
		margin-top: 1rem;
	}
}

.sign-content {
	height: 100%;
	display: flex;
	flex-direction: column;

	p {
		margin-top: 1rem;
	}

	.sign-up-link {
		padding: 0;
	}

	.sign-in-link {
		text-decoration: none;
		margin-top: 50%;
	}

	Button:last-of-type {
		margin-top: 10%;
	}
}

@media(min-width: 480px){
	.welcome-text-container {
		font-size: 1.2rem;

		h1 {
			font-size: 3rem;
		}
	}

	.sign-content {
		h2 {
			font-size: 2rem;
		}
		
		Button:last-of-type {
			margin-top: 20%;
		}
	}
}

@media(min-width: 768px) {
	.welcome-text-container {
		h1 {
			font-size: 4rem;
		}
	}
}

@media(min-width: 1024px) {
	.welcome-container {
		height: auto;
		flex-direction: row;
		gap: 4rem;
		padding: 8rem;
	}

	.sign-content {
		h2 {
			font-size: 3rem;
		}
	}
}
</style>

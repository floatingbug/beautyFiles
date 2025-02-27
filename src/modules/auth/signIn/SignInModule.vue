<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import {signIn} from "./api/signIn.js";


const router = useRouter();
const inputs = reactive({
	usernameOrEmail: "",
	password: "",
});
const floatLabelVariant = ref("on");
const errors = ref([]);


async function handleSignIn(){
	const result = await signIn(inputs);

	if(!result.success){
		return errors.value = result.errors;
	}

	const token = "Bearer " + result.token;
	localStorage.setItem("jwt", token);

	router.push("/dashboard");
}
</script>


<template>    
	<div class="sign-up-container">
		<h1>Sign in</h1>

		<div class="sign-up-content">
			<div class="input-container">
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-user"></i>
					</InputGroupAddon>
				
					<FloatLabel :variant="floatLabelVariant">
						<InputText v-model="inputs.usernameOrEmail"></InputText>
						<label for="usernameOrEmail">Name oder E-mail</label>
					</FloatLabel>
				</InputGroup>
				
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-lock"></i>
					</InputGroupAddon>
				
					<FloatLabel :variant="floatLabelVariant">
						<InputText v-model="inputs.password"></InputText>
						<label for="password">Passwort</label>
					</FloatLabel>
				</InputGroup>
			</div>

			<div v-if="errors.length > 0" class="errors-container">
				<div class="error" v-for="(error, index) in errors">
					{{error.message}}
				</div>
			</div>
			
			<div class="submit-button-container">
				<Button @click="handleSignIn">Anmelden</Button>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.sign-up-container {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.sign-up-content {
	width: 90%;
	max-width: 500px;
}

h1 {
	margin-top: 2rem;
}

.input-container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;
}

.submit-button-container {
	margin-top: 4rem;

	.p-button {
		width: 100%;
	}
}
</style>

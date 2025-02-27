<script setup>
import { ref, computed } from "vue";

const currInputs = ref("");

// Computed Property, das den String in ein Array umwandelt
const inputArray = computed(() => {
    currInputs.value
        .split(/[\s,]+/) // Trennung nach Leerzeichen oder Komma
        .filter(str => str.length > 0); // Leere Strings entfernen

		console.log(currInputs.value);
});
</script>

<template>
    <InputText v-model="currInputs" placeholder="Eingabe mit Komma oder Leerzeichen trennen" />
</template>


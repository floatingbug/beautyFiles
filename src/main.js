import './assets/main.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Divider from "primevue/divider";
import Button from "primevue/button";


const app = createApp(App)


app.use(PrimeVue, {
    theme: {
        preset: Material,
		options: {
			darkModeSelector: ".dark",
		}
    },
});

app.use(router)


app.component("Divider", Divider);
app.component("Button", Button);


app.mount('#app')

import './assets/main.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Divider from "primevue/divider";
import Button from "primevue/button";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';


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
app.component("InputGroup", InputGroup);
app.component("InputGroupAddon", InputGroupAddon);
app.component("FloatLabel", FloatLabel);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);


app.mount('#app')

import {ref} from "vue";


const inputFieldData = ref([
 	{
        label: "Vorname",
        id: "vorname",
        icon: "pi pi-user",
		input: "",
    },
 	{
        label: "Name",
        id: "name",
        icon: "pi pi-users",
		input: "",
    },
    {
        label: "Straße",
        id: "straße",
        icon: "pi pi-map-marker",
		input: "",
    },
    {
        label: "Hausnummer",
        id: "hausnummer",
        icon: "pi pi-home",
		input: "",
    },
    {
        label: "Wohnort",
        id: "wohnort",
        icon: "pi pi-building",
		input: "",
    },
    {
        label: "Telefon",
        id: "telefon",
        icon: "pi pi-phone",
		input: "",
    },
    {
        label: "Geburtdatum",
        id: "geburtsdatum",
        icon: "pi pi-calendar",
		input: "",
    }
]);


export default inputFieldData;

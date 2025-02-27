import {ref} from "vue";


const inputFieldData = ref([
 	{
        label: "Vorname",
        id: "vorname",
        icon: "pi pi-user",
		input: "",
		type: "string",
    },
 	{
        label: "Name",
        id: "name",
        icon: "pi pi-users",
		input: "",
		type: "string",
    },
    {
        label: "Straße",
        id: "straße",
        icon: "pi pi-map-marker",
		input: "",
		type: "string",
    },
    {
        label: "Hausnummer",
        id: "hausnummer",
        icon: "pi pi-home",
		input: null,
		type: "number",
    },
    {
        label: "Wohnort",
        id: "wohnort",
        icon: "pi pi-building",
		input: "",
		type: "string",
    },
    {
        label: "Telefon",
        id: "telefon",
        icon: "pi pi-phone",
		input: "",
		type: "string",
    },
    {
        label: "Geburtdatum",
        id: "geburtsdatum",
        icon: "pi pi-calendar",
		input: "",
		type: "string",
    },
	{
		label: "Kundengruppe",
		id: "kundengruppe",
		icon: "pi pi-users",
		type: "menu",
		options: ["Neukunde", "Stammkunde", "VIP"],
		currValue: "Neukunde",
		isEditing: false,
	},
]);


export default inputFieldData;

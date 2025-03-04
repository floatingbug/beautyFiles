import {ref} from "vue";


const today = new Date();


const protocolFormData = ref([
    {
        label: "Datum",
        name: "datum",
        id: 0,
        value: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        type: "date",
    },
    {
        label: "Reinigung/Lotion",
        name: "reinigung/lotion",
        id: 1,
        value: "",
        type: "string",
    },
    {
        label: "Spezialbehandlung/Ampulle",
        name: "spezialbehandlung/ampulle",
        id: 2,
        value: "",
        type: "string",
    },
    {
        label: "Massage",
        name: "massage",
        id: 3,
        value: "",
        type: "string",
    },
    {
        label: "Maske",
        name: "maske",
        id: 4,
        value: "",
        type: "string",
    },
    {
        label: "Sonstiges",
        name: "sonstiges",
        id: 5,
        value: "",
        type: "string",
    },
    {
        label: "Testmuster",
        name: "testmuster",
        id: 6,
        value: "",
        type: "string",
    },
    {
        label: "Verkauf/Bemerkungen",
        name: "verkauf/bemerkungen",
        id: 7,
        value: "",
        type: "string",
    },
]);


export default protocolFormData;

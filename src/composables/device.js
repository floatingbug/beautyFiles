import {ref} from "vue";


const device = ref("");


function setDevice(width){
	if(width >= 1366) device.value = "desktop";
	else if(width >= 1024) device.value = "laptop";
	else if(width >= 768) device.value = "tablet";
	else device.value = "mobile";
}


export {device, setDevice}

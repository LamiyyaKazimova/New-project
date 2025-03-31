import axios from "axios";

const apiUrl = "http://localhost:5000/register";
// export async function handleGetRegister() {
// return  await axios.get(apiUrl);
// }


export async function handlePostRegister(obj) {
    return  await axios.post(apiUrl,obj);
}


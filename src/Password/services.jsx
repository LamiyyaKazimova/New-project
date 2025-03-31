import axios from "axios";
const apiUrl = "http://localhost:5000/register";
export async function handlePassword() {
 return  await axios.get(apiUrl);
}

export async function handleNewPassword(obj) {
    return  await axios.post(apiUrl,obj);
}
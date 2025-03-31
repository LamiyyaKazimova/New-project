import axios from "axios";
const apiUrl = "http://localhost:5000/register";
export async function handleGetForgotPassword() {
 return  await axios.get(apiUrl);
}
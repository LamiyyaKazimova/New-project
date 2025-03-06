import axios from "axios";
const apiUrl = "http://localhost:3000/register";
export async function handleGetRegister(email, password) {
  const response = await axios.get(apiUrl);


  return response?.data.find((user) => user.email === email && user.password === password) || null;


  
}

import axios from 'axios'

const apiUrl="http://localhost:3001/register"
export async function handlePostRegister(userInfo){
await axios.post(
apiUrl
)
}
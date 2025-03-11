import axios from 'axios'

const apiUrl="http://localhost:3001/register"
export async function handlePostRegister({state}){
await axios.post(
apiUrl,state
)
}
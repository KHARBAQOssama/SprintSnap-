import { toast } from "react-toastify"
import api from "../../src/api"

const register = async (userData) => {
    const response = await api.post('/auth/register',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data.user))
    }
    return response.data
}
const logout = async () =>{
    toast("Wow so easy!", {
      type: "info",
    });
}
const authService = {
    register,
    logout
}
 
export default authService
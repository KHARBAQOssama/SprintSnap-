import api from "../../src/api"

const register = async (userData) => {
    const response = await api.post('/auth/register',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data.user))
    }
    return response.data
}
const authService = {
    register
}
 
export default authService
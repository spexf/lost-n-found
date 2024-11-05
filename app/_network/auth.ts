
import client from "./axiosClient";

const {axiosClient} = client

interface UserData{
    name: string;
    password: string;
    email: string;
}

interface UserLogin {
    email: string;
    password: string;
}

const authLogin = async (data: UserLogin)=>{
    try {
        const res = await axiosClient.post('/auth/login',data)
        document.cookie = `token=${res.data.user.token};path=/`
        return {data: 'Login Success', status: res.status}
    } catch (err){
        return {
            msg: err.response?.data ?? 'an error occured', 
            status: err.response?.status ?? 500
        }
    }
    
}

const register = async (data: UserData) => {
    try {
        const res = await axiosClient.post('/auth/register',data)
        console.log(res)
        return res
    } catch (err){
        return {
            msg: err.response.data, 
            status: err.response.status
        }
    }
}

const logout = async () => {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    axiosClient.post('/auth/logout')
    console.log()
}

const authFunction = {
    authLogin,
    register,
    logout
}

export default authFunction;
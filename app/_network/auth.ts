
import client from "./axiosClient";
import Cookies from 'js-cookie';
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
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${res.data.user.token}`
        const role = await axiosClient.post('/auth/validate')        
        Cookies.set('token', res.data.user.token, {
            sameSite: 'strict'
        })
        return {data: 'Login Success', status: res.status, role: role.data.name}
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

const validateSession = async (data: string) =>{
    try {
        const res = await axiosClient.post('/auth/validate',data)
        return res
    } catch (err){
        return err
    }
}

const logout = async () => {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`
    try {
        const res = axiosClient.post('/auth/logout')
        return res
    } catch (err){
        return err
    }
     
}

const authFunction = {
    authLogin,
    register,
    logout,
    validateSession
}

export default authFunction;
import client from "./axiosClient";

const {axiosClient} = client

interface UserData{
    nim: string;
    name: string;
    username: string;
    password: string;
    email: string;
}

interface UserLogin {
    username: string;
    password: string;
}

const authLogin = async (data: UserLogin)=>{
    axiosClient.post('/auth/login')
    console.log(data)
}

const register = async (data: UserData) => {
    axiosClient.post('/auth/register')
    console.log(data) 
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
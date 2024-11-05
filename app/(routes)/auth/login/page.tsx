'use client'
import './style.css'
import image from '@/app/_images/pikachu.png'
import Image from 'next/image'
import authFunction from '@/app/_network/auth'
import { useState } from 'react'
import { toast } from 'react-toastify'


const Login = ()=> {
    
    const [userData, setUserData] = useState({
        email:'',
        password: ''
    })
    const handleLogin = async ()=>{

        try {
            const res = await authFunction.authLogin(userData);
            console.log(res)
            if (res.status == 401 ){
                toast.error(`${res.msg.message}`)
            }
            if (res.status == 200){
                toast.success('Login Berhasil !')
            }
            const errMess = {
                email: res.msg.email ? res.msg.email : [''],
                password: res.msg.password ? res.msg.password : ['']
            }
            displayErrors(errMess)
        } catch (error){
            
            console.log(error)
        }
    }
    const displayErrors = (errors:ErrorMessage) => {
        Object.entries(errors).forEach(([field, messages]) => {
            messages.forEach((message: string) => {
                if (message == ''){

                } else {

                    toast.error(`${message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
        });
    };
    return (
        <div className="content">
            <Image src={image} alt="pika" className="img" />
            <div className="form"> 
                <div className="input-email">
                    <input
                        onChange={(e) => setUserData((old) => ({ ...old, email: e.target.value }))}
                        className="inputText"
                        type="text"
                        id="email"
                        value={userData.email}
                        placeholder="email"
                    />
                </div>
                <div className="input-password">
                    <input
                        onChange={(e) => setUserData((old) => ({ ...old, password: e.target.value }))}
                        className="inputText"
                        type="password"
                        id="password"
                        value={userData.password}
                        placeholder="password"
                    />
                </div>
                <div className="sendButton" onClick={handleLogin}>
                    Login
                </div>
            </div>
        </div>
    )
}

export default Login
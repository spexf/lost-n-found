'use client'
import './style.css'
import image from '@/app/_images/pikachu.png'
import Image from 'next/image'
import authFunction from '@/app/_network/auth'
import { useState } from 'react'
import { toast } from 'react-toastify'


const Login = ()=> {
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        contact: '',
        password: ''
    })
    const handleRegister = async ()=>{
    
        try {
            const res = await authFunction.register(userData);
            if (res.status == 200){
                toast.success('Register success !')
                window.location.href = '/auth/login'
            }
            const errMess = {
                name: res.msg.name ? res.msg.name : [''],
                email: res.msg.email ? res.msg.email : [''],
                password: res.msg.password ? res.msg.password : [''],
                contact: res.msg.contact ? res.msg.contact : [''],
            }
            displayErrors(errMess)
        } catch (error){
            
            console.log(error)
        }
    }

    const displayErrors = (errors) => {
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
                        onChange={(e) => setUserData((old) => ({ ...old, name: e.target.value }))}
                        className="inputText"
                        type="text"
                        id="name"
                        value={userData.name}
                        placeholder="name"
                    />
                </div>
                <div className="input-email">
                    <input
                        onChange={(e) => setUserData((old) => ({ ...old, contact: e.target.value }))}
                        className="inputText"
                        type="text"
                        id="contact"
                        value={userData.contact}
                        placeholder="contact"
                    />
                </div>
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
                <div className="sendButton" onClick={handleRegister}>
                    Register
                </div>
            </div>
        </div>
    )
}

export default Login
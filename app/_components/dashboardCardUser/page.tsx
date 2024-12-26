'use client'

import adminApi from '@/app/_network/_authApi/adminApi';
import './style.css';

interface CardData {
    id: number
    name: string
    email: string
    contact: string
    role: string
}



const DashboardCards = (props: CardData)=>{

    const ban = async (id:number) => {
        try {
            const res = await adminApi.banUser(id)
            if (res.status == 200) {
                window.location.reload()
            }
            return res
        } catch (error) {
            
        }
    }
    const unban = async (id:number) => {
        try {
            const res = await adminApi.unBanUser(id)
            if (res.status == 200) {
                window.location.reload()
            }
            return res
        } catch (error) {
            
        }
    }
    return (
        <div className="card-container cursor-pointer hover:shadow-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="card-details">
                <div className="card-info">
                    <div className="card-title">
                        {props.name}
                    </div>
                    <div className="card-subtitle">
                        {props.email}
                    </div>
                </div>
                <div className="card-info">
                    <div className="card-title">
                        Contact
                    </div>
                    <div className="card-subtitle">
                        {props.contact}
                    </div>
                </div>
            </div>
            <div onClick={props.role == 'user' ? ()=>ban(props.id) : ()=>unban(props.id)} className={`card-button ${props.role == 'user' ? 'not-verified' : 'verified'}`} >
                {props.role == 'user' ? 'Ban User' : 'Unban User'}
            </div>
        </div>
    )
}

export default DashboardCards;
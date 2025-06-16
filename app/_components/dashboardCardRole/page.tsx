'use client'

import './style.css';

interface CardData {
    name: string;
    guardName: string
    userCount: number
}



const DashboardCards = (props: CardData)=>{
    return (
        <div className="card-container cursor-pointer hover:shadow-slate-800 hover:shadow-lg transition-all duration-300">
            <div className="card-details">
                <div className="card-info">
                    <div className="card-title text-[30px]">
                        Role Name - {props.name}
                    </div>
                    <div className="card-subtitle">
                        Guard Name - {props.guardName}
                    </div>
                    <div className="card-subtitle">
                        Jumlah User - {props.userCount}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default DashboardCards;
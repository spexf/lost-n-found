'use client'

import './style.css';

interface CardData {
    imgSrc: string
    itemType: string
    itemLocation: string
    itemStatus: string
    itemId: number
    userName: string
}



const DashboardCards = (props: CardData)=>{

    const redirect = (id:number)=>{
        window.location.href = `/admin/items/${id}`
    }
    console.log(props.imgSrc)

    return (
        <div className="card-container cursor-pointer hover:shadow-slate-800 hover:shadow-lg transition-all duration-300" onClick={()=>redirect(props.itemId)}>
            <div className="card-image">
                <img className='card-image' src={`http://localhost:9000/images/${props.itemType}/${props.imgSrc}`} alt="image" />
            </div>
            <div className="card-details">
                <div className="card-info">
                    <div className="card-title">
                        {props.itemType == 'lost' ? 'item lost in' : 'item found at'}
                    </div>
                    <div className="card-subtitle">
                        {props.itemLocation}
                    </div>
                </div>
                <div className="card-info">
                    <div className="card-title">
                        submitted by
                    </div>
                    <div className="card-subtitle">
                        {props.userName}
                    </div>
                </div>
            </div>
            <div className={`card-button ${props.itemStatus == '1' ? 'verified' : 'not-verified'}`} >
                {props.itemStatus == '1' ? 'Verified' : 'Not Verified'}
            </div>
        </div>
    )
}

export default DashboardCards;
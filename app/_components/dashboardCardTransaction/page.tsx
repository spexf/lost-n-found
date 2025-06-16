'use client'

import './style.css';

interface CardData {
    imgSrc: string
    itemType: string
    itemLocation: string
    itemStatus: string
    itemId: number
    takeId: number | undefined
}



const DashboardCards = (props: CardData)=>{

    const redirect = (id:number)=>{
        window.location.href = `/admin/transactions/${id}`
    }
    console.log(props.imgSrc)

    return (
        <div className="card-container cursor-pointer hover:shadow-slate-800 hover:shadow-lg transition-all duration-300" onClick={()=>redirect(props.itemId)}>
            <div className="card-image">
                <img className='card-image' src={`https://api.lostnfound-rks301.com/images/transaction/${props.imgSrc}`} alt="image" />
            </div>
            <div className="card-details">
                <div className="card-info">
                    <div className="card-title">
                        Transaction Done In
                    </div>
                    <div className="card-subtitle">
                        {props.itemLocation}
                    </div>
                </div>
            </div>
            {/* <div className={`card-button ${props.takeId == undefined ? 'not-verified' : 'verified'}`} >
                {props.takeId == undefined ? 'TAKER NOT REGISTERED' : 'TAKER REGISTERED' }
            </div> */}
        </div>
    )
}

export default DashboardCards;
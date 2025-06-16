'use client'
import Sidebar from "@/app/_components/adminComponents/Sidebar/page"
import authLib from "@/app/_network/_authApi/userApi"
import { useEffect, useState } from "react"
import { FourSquare } from "react-loading-indicators"
import adminApi from "@/app/_network/_authApi/adminApi"
const Page = ({params}: {params: {id: number}})=>{
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})
    const verify = async (id: number) => {
        try {
            const res = await adminApi.verifyItem(id)
            window.location.href = '/admin/items'
        } catch (e){
            console.log(e)
        }
    }
    const reject = async (id: number) => {
        try {
            const res = await adminApi.cancelItem(id)
            window.location.href = '/admin/items'
        } catch (e){
            console.log(e)
        }
    }
    const getData = async (id: number) =>{
        try {
            const res = await adminApi.getTransactionDetails(id)
            setData(res)
            setIsLoading(false)
        } catch (e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData(params.id)
    },[])
    console.log(params.id)

    return (
        <div className="page w-1/2 h-screen flex">
      {/* Sidebar */}
      <div className="fixed z-0 left-0 top-1/2 -translate-y-1/2 w-64 h-auto  text-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-80 z-20 w-[1100px] self-center right-10 h-fit">
        {isLoading ? <div className="flex items-center justify-center h-screen">
            <FourSquare color="#16e5e8" size="medium" text="" textColor="" />
        </div> : 
        <div className="flex w-screen">

        <div className="relative w1/2 flex-col poppins h-[700px] ml-[85px] px-8 py-4 flex  bg-[#2D237A] rounded-[10px]">
            <img src={`https://api.lostnfound-rks301.com/images/transaction/${data.transaction_image}`} alt="itemImages" className="w-fit h-[250px] self-center rounded-lg shadow-md" />
            <div className="data flex-col w-full h-full  my-8">
                <div className="item-data flex-col">
                    <div className="location font-medium text-[25px]">
                        Transaction Location
                        <br />
                        {data.transaction_location}
                    </div>
                </div>
                <div className="transaction-date self-end justify-self-end">
                    Transaction Done In
                    <br />
                    {new Date(data.created_at).toISOString().slice(0, 19).replace('T', ' ')}
                </div>
            </div>
        </div>
        <div className="relative w1/2 flex-col poppins h-[700px] ml-[85px] px-8 py-4 flex  bg-[#2D237A] rounded-[10px]">
            <img src={`https://api.lostnfound-rks301.com/images/${data.item.type}/${data.item.image}`} alt="itemImages" className="w-fit h-[250px] self-center rounded-lg shadow-md" />
            <div className="data flex-col w-full h-full  my-8">
                <div className="item-data flex-col">
                    <div className="location font-medium text-[20px]">
                        Item: {data.item.item}
                    </div>
                </div>
                <div className="item-data">
                    <div className="font-medium text-[15px]">
                        Submited by: {data.item.submited_by.name}
                    </div>
                </div>
                <div className="item-data">
                    <div className="font-medium text-[15px]">
                        Taked by: {data.item.taked_by.name}
                    </div>
                </div>
                <div className="item-description">
                    <textarea name="description" className="w-[450px] bg-[#1A134E] rounded-lg px-2 py-2 h-[260px] " id="dsc" defaultValue={data.item.description}></textarea>
                </div>
                <div className="transaction-date self-end justify-self-end">
                    Submited in
                    <br />
                    {new Date(data.item.created_at).toISOString().slice(0, 19).replace('T', ' ')}
                </div>
            </div>
        </div>
        </div>
        
        }
        
      </div>
    </div>
    )
}

export default Page
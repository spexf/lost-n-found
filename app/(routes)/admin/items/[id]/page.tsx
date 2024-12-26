'use client'
import Sidebar from "@/app/_components/adminComponents/Sidebar/page"
import authLib from "@/app/_network/_authApi/userApi"
import { useEffect, useState } from "react"
import { FourSquare } from "react-loading-indicators"
import adminApi from "@/app/_network/_authApi/adminApi"
import { useRouter } from "next/router"
const Page = ({params}: {params: {id: number}})=>{
    const router = useRouter
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
            const res = await authLib.getItem(id)
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
        <div className="page w-screen h-screen flex">
      {/* Sidebar */}
      <div className="fixed z-0 left-0 top-1/2 -translate-y-1/2 w-64 h-auto  text-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-80 z-20 w-[1100px] self-center right-10 h-fit">
        {isLoading ? <div className="flex items-center justify-center h-screen">
            <FourSquare color="#16e5e8" size="medium" text="" textColor="" />
        </div> : 
        <div className="relative flex-col poppins h-[700px] ml-[85px] px-8 py-4 flex w-full bg-[#2D237A] rounded-[10px]">
            <img src={`http://localhost:9000/images/${data.type}/${data.image}`} alt="itemImages" className="w-fit h-[250px] self-center rounded-lg shadow-md" />
            <div className="data flex w-full h-fit my-8">
                <div className="item-data flex-col">
                    <div className="location font-medium text-[25px]">
                        {data.item} {data.type == 'lost' ? 'lost in' : 'found at'} 
                        <br />
                        {data.location}
                    </div>
                    <div className="description">
                        <textarea  name="description" className="w-[450px] bg-[#1A134E] rounded-lg px-2 py-2 h-[280px] " defaultValue={data.description} readOnly id="description">
                            
                        </textarea>
                    </div>
                </div>
                <div className="user-data flex-col justify-around ml-8">
                    <div className="sender-name text-[20px]">
                        <tr>
                            <td className="w-[150px]">Sender</td>
                            <td>: {data.submited_by.name}</td>
                        </tr>
                    </div>
                    <div className="sender-contact text-[20px]">
                        <tr>
                            <td className="w-[150px]">Email</td>
                            <td>: {data.submited_by.email}</td>
                        </tr>
                        <tr>
                            <td className="w-[150px]">Phone</td>
                            <td>: {data.submited_by.contact}</td>
                        </tr>
                    </div>
                    <div className="action flex justify-end  w-full">
                        {
                            data.verified == 1 ? <div onClick={()=>reject(params.id)}className="button-reject w-fit rounded-md cursor-pointer transition-all duration-200 active:bg-rose-500 hover:bg-rose-800 px-4 py-2 h-fit text-[20px] mx-3 self-end bg-rose-700">Cancel Verification</div>
                            : <div onClick={()=>verify(params.id)} className="button-verify w-fit rounded-md cursor-pointer transition-all duration-200 active:bg-emerald-500 hover:bg-emerald-700 px-4 py-2 h-fit text-[20px] mx-3 self-end bg-emerald-600">Verify</div>
                        }
                    </div>
                </div>

            </div>
        </div>}
        
      </div>
    </div>
    )
}

export default Page
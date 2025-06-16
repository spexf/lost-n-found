'use client'
import Sidebar from "@/app/_components/adminComponents/Sidebar/page";
import DashboardCards from "@/app/_components/dashboardCardUser/page";
import { useEffect, useState } from "react";
import adminApi from "@/app/_network/_authApi/adminApi";
import { FourSquare } from "react-loading-indicators";

const UsersPage = ()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const getData = async ()=>{
        try {
            const res = await adminApi.getUser();
            setData(res.data.data)
            console.log(data)
            setIsLoading(false)
        } catch (e) {
            return e;
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="page flex flex-grow items-center">
            <div className="fixed left-0 top-1/2 -translate-y-1/2 w-64 h-auto  text-white shadow-lg">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="ml-80 w-[1180px] h-fit">
        <div className={`${isLoading ? 'flex items-center justify-center self-center justify-self-center h-screen' : 'item-list grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-2 gap-7 w-[1180px] h-fit pl-20 py-8'}`}>
                    {isLoading ? 
                        (<FourSquare color="#16e5e8" size="medium" text="" textColor="" />) : 
                    (data.length === 0 ? (
                        <p>No data available</p> // Fallback message when no data are loaded
                    ) : (
                        data.map((dt, index) => (
                        <DashboardCards
                            key={index} // Add a unique key for each item
                            id={dt.id}
                            name={dt.name}
                            email={dt.email}
                            contact={dt.contact}
                            role={dt.roles}
                        />
                    ))
                    ))}
                    
                </div>
            </div>

        </div>
        
    )
}

export default UsersPage;
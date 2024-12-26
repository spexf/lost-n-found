'use client'
import Navbar from "@/app/_components/navbarComponents/Navbar";
import './style.css'
import { MdEditDocument } from "react-icons/md";
import { useEffect, useState } from "react";
import authLib from "@/app/_network/_authApi/userApi";
import { FourSquare } from "react-loading-indicators";
const Page = ({params}: {params: {id: number}}) => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const contactWa = () => {
        window.location.href = `/transaction/${params.id}`
        // window.location.href = `https://wa.me/${contact}?text=Halo, saya ingin mengklaim barang yang kamu temukan ( http://localhost/lost/${params.id} )`
    }
    const getData = async (id: number) => {
        const res = await authLib.getItem(id)
        setData(res)
        setIsLoading(false)
    }

    useEffect(()=>{
        getData(params.id)
    },[])
    console.log(params.id)
    return isLoading ? 
        (<FourSquare color="#16e5e8" size="medium" text="" textColor="" />)
     : ( 
        <div className="content">
            <Navbar/>
            <div className="form">
                <label htmlFor="" className="photo-uploads">
                    <img src={`http://localhost:9000/images/${data.type}/${data.image}`} alt="itemImages" className="w-[300px] h-fit" />
                </label>
                <div className="flex-col flex items-center justify-center">
                    <input
                    className="inputText"
                    type="text"
                    value={data.item}
                    readOnly
                    id="items"
                    placeholder="what kind of item?"
                />
                
                </div>
                <h4 className="self-start font-medium text-[20px]" style={{ fontFamily: "'Poppins',monospace" }}>Details</h4>

                <input  className="inputText" type="text" id="location" placeholder="founded / lost location" readOnly value={data.location} />
                <div className="selectContainer">
                    <input type="text" className="inputSelect" value={data.type} readOnly/>
                </div>
                <textarea name="description" value={data.description} readOnly placeholder="details" className="inputTextarea" id="description"></textarea>
                <div className={`${data.status == 'taken' ? 'hidden' : 'buttonContainer'} `} onClick={()=>contactWa(data.submited_by.contact)}>
                    <div className={`  ${data.status == 'taken' ? 'hidden' : 'poppins contactButton'} ` }>Claim Form <MdEditDocument  className="ml-2" size={20}/></div>
                </div>
            </div>
        </div>
     );
}
 
export default Page;
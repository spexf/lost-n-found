import Navbar from "@/app/_components/navbarComponents/Navbar";
import './style.css'
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";


const Page = ({params}: {params: {id: number}}) => {
    console.log(params.id)
    return ( 
        <div className="content">
            <Navbar/>
            <div className="form">
                <label htmlFor="" className="photo-uploads">
                    <Image width={300} height={300} src={"https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg"} alt="..."/>
                </label>
                <input  className="inputText" type="text" id="location" placeholder="founded / lost location" readOnly value={'tamor'} />
                <div className="selectContainer">
                    <input type="text" className="inputSelect" value={'lost'} readOnly/>
                </div>
                <textarea name="description" value={'tes'} readOnly placeholder="details" className="inputTextarea" id="description"></textarea>
                <div className="buttonContainer">
                    <div className="contactButton">Contact <FaWhatsapp className="ml-2" size={20}/></div>
                </div>
            </div>
        </div>
     );
}
 
export default Page;
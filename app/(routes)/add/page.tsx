'use client'
import { FaCamera } from "react-icons/fa";
import Navbar from "@/app/_components/navbarComponents/Navbar";
import { useState, ChangeEvent } from "react";
import './style.css'
const Add = () => {
    // const [data, setData] = useState({})
    const [isFile, setIsFile] = useState(false)
    const [imagePreview, setImagePreview] = useState('')
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const setImage = (event: ChangeEvent<HTMLInputElement>)=>{
        if (event.target.files) {
            const image: string = URL.createObjectURL(event.target.files[0])
            setIsFile(true)
            setImagePreview(image)
            setSelectedImage(event.target.files[0])
            console.log(selectedImage)
        } else {
            console.log('ada takde ape pun')
            setIsFile(false)
        }
    }

    return ( 
        <div className="content mb-5">
            <Navbar/>
            <div className="form">
                <input type="file" id="image" onChange={setImage} className="opacity-0" accept="image/*" multiple hidden />
                {!isFile ? <label id="drop-area" htmlFor="image" className="photo-uploads"><FaCamera className="sm:mb-3" color="white" size={90}/><p>click here to upload an image</p></label> : <label id="drop-area" htmlFor="image" className="photo-uploads sm:h-fit">
                    <img src={imagePreview} className="rounded-[5px]" alt="img" />
                    </label>}
                <input  className="inputText" type="text" id="location" placeholder="founded / lost location" />
                <div className="selectContainer">
                    <select name="type" className="inputSelect" id="type">
                        <option value="lost">lost</option>
                        <option value="found">found</option>
                    </select>
                </div>
                <textarea name="description" placeholder="details" className="inputTextarea" id="description"></textarea>
                <div className="buttonContainer">
                    <div className="sendButton">submit</div>
                </div>
            </div>
        </div>
     );
}
 
export default Add;
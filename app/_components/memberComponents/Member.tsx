
import "./style.css"
import Image, { StaticImageData } from "next/image";

const Member = (props : {reverse: boolean, name: string, img: StaticImageData}) => {
    const {reverse, name, img} = props
    return ( 
        <div data-aos="zoom-in-up"  className={`memberCard ${reverse ? 'flex-row-reverse' : ""}`}>
            <div className="photo">
                <Image src={img} className="rounded-[5px]" alt="profile" layout="fill" objectFit="contain"/>
            </div>
            
            <div className="name">
                {name}
            </div>
        </div>
     );
}
 
export default Member;
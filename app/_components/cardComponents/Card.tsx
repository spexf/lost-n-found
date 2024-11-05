import Image from "next/image";
import "./style.css";
interface Card {
    images: string;
    text: string;
    type: 'lost' | 'found';
    url: string
}

const Card = (props: Card) => {
    return ( 
        <div className="card" data-aos="fade-right">
            <div className="card-images">
                <Image layout="fill" className="rounded-[5px]" objectFit="contain" src={props.images} alt="item-image"/>
            </div>
            <div className="card-body">
                <div className="card-text">
                    {props.text}
                </div>
                <div className="card-type">
                    {props.type}
                </div>
                <div className="card-url">
                    <a href={`/${props.type}/${props.url}`}>click for more</a>
                </div>
            </div>
        </div>
     );
}
 
export default Card;
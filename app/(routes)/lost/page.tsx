import AddData from '@/app/_components/addDataComponents/AddData';
import Navbar from '@/app/_components/navbarComponents/Navbar';
import './style.css'
import Card from '@/app/_components/cardComponents/Card';

const Lost = () => {
    return ( 
        <div className="content">
            <Navbar/>
            <Card images="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" text='tes' type='lost' url='123'></Card>
            <div className="addData">
                <AddData/>
            </div>
        </div>
     );
}
 
export default Lost;
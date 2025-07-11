'use client'
import AddData from '@/app/_components/addDataComponents/AddData';
import Navbar from '@/app/_components/navbarComponents/Navbar';
import './style.css'
import Card from '@/app/_components/myUploadCardComponents/Card';
import { useState, useEffect } from 'react';
import authLib from '@/app/_network/_authApi/userApi';
import { FourSquare } from 'react-loading-indicators';
const Lost = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const getItems = async () => {
        try {
            const res = await authLib.getMyItem(); 
            setData(res.data.data); 
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };
    useEffect(() => {
        getItems();
    },[]);
    return isLoading ? (
        <div className="flex items-center justify-center h-screen">
            <FourSquare color="#16e5e8" size="medium" text="" textColor="" />
        </div>
        ) :( 
        <div className="content">
            <Navbar/>
            {/* <Card images="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" text='tes' type='lost' url='123'></Card> */}
            {data.length === 0 ? (
            <p>No items available</p> // Fallback message when no items are loaded
          ) : (
            data.map((dt, index) => (
              <Card
                key={index} // Add a unique key for each item
                text={dt.item}
                type={dt.type}
                url={dt.image}
                id={dt.id}
              />
            ))
            
          )}
            <div className="addData">
                <AddData/>
            </div>
        </div>
     );
}
 
export default Lost;
'use client'
import Sidebar from "@/app/_components/adminComponents/Sidebar/page";
import DashboardCards from "@/app/_components/dashboardCardItem/page";
import adminApi from "@/app/_network/_authApi/adminApi";
import { useEffect, useState } from "react";
import { FourSquare } from "react-loading-indicators";
const ItemsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      const res = await adminApi.getItem(); 
      setItems(res.data); 
      setIsLoading(false);
      console.log(items)

    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="page flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 w-64 h-auto  text-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-80 w-[1180px] h-fit">
        <div className={`${isLoading ? 'hidden' : 'poppins h-[150px] ml-[30px] px-8 py-4 flex w-full bg-[#2D237A] rounded-b-[20px]'}`}>
          <select className="w-[350px] h-[60px] mx-8 my-6 px-4 rounded-lg bg-[#1A134E] " name="status" id="status">
            <option value="-" disabled selected > SELECT STATUS</option>
            <option value="verified">Verified</option>
            <option value="notverified">Not Verified</option>
          </select>
          <select className="w-[350px] h-[60px] mx-8 my-6 px-4 rounded-lg bg-[#1A134E] " name="type" id="type">
            <option value="-" disabled selected > SELECT TYPE</option>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
          <div className="justify-self-end filter-submit h-[60px] mx-8 my-6 rounded-lg cursor-pointer shadow transition-all duration-300 hover:bg-[#140f3d] active:bg-[#4836cc] px-4 flex items-center justify-center w-[150px] bg-[#1A134E]">
            Filter
          </div>
        </div>
        <div className={`${isLoading ? 'flex items-center justify-center self-center justify-self-center h-screen' : 'item-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-[1180px] h-fit pl-20 py-8'}`}>
        
        {isLoading ? (<FourSquare color="#16e5e8" size="medium" text="" textColor="" />) : (
          
          items.length === 0 ? (
            <p>No items available</p> // Fallback message when no items are loaded
          ) : (
            items.map((item, index) => (
              <DashboardCards
                key={index} // Add a unique key for each item
                itemId={item.id} // Assuming item has an `id` field
                itemStatus={item.verified} // Assuming item has a `status` field
                imgSrc={item.image} // Assuming item has an `image` field
                itemLocation={item.location} // Assuming item has a `location` field
                itemType={item.type} // Assuming item has a `type` field
                userName={item.submited_by.name} // Assuming item has a `userName` field
              />
            ))
          ))}
      </div>
      </div>
    </div>
  );
};

export default ItemsPage;

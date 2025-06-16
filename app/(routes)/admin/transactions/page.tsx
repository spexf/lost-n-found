'use client'
import Sidebar from "@/app/_components/adminComponents/Sidebar/page";
import DashboardCards from "@/app/_components/dashboardCardTransaction/page";
import adminApi from "@/app/_network/_authApi/adminApi";
import { useEffect, useState } from "react";
import { FourSquare } from "react-loading-indicators";
const ItemsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const getItems = async () => {
    try {
      const res = await adminApi.getTransaction(); 
      console.log(res.data)
      setTransactions(res.data); 
      setIsLoading(false);

    } catch (error) {
      console.error('Error fetching transactions:', error);
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
        <div className={`${isLoading ? 'flex items-center justify-center self-center justify-self-center h-screen' : 'item-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-[1180px] h-fit pl-20 py-8'}`}>
        
        {isLoading ? (<FourSquare color="#16e5e8" size="medium" text="" textColor="" />) : (
          
          transactions.length === 0 ? (
            <p>No items available</p> // Fallback message when no items are loaded
          ) : (
            transactions.map((transaction, index) => (
              <DashboardCards
                key={index} // Add a unique key for each item
                itemId={transaction.id} // Assuming item has an `id` field
                itemStatus={transaction.item.verified} // Assuming item has a `status` field
                imgSrc={transaction.transaction_image} // Assuming item has an `image` field
                itemLocation={transaction.transaction_location} // Assuming item has a `location` field
                itemType={transaction.item.type}
                takeId={transaction.item.take_id}
              />
            ))
          ))}
      </div>
      </div>
    </div>
  );
};

export default ItemsPage;

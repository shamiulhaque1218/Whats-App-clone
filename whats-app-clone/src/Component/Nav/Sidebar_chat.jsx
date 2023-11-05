/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaCircleUser } from 'react-icons/fa6';

const Sidebar_chat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('/fakeData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);
    return (
        <div >
          {data.map(item => (
        <div className="side_chat pt-3" key={item.number}>
         
         <div className='pl-4'>
          {
            item.picture ? <img className='rounded-full h-12 w-12' src={item.picture} /> :
             <FaCircleUser className='bg-white text-5xl text-gray-300 rounded-full'> </FaCircleUser>
          }
          
          </div>

          <div className='borderLeft pb-3 ml-4'>
            <p className='text-lg '> {item.number }</p>
            <p className='text-sm text-gray-600'> {item.message} </p>
          </div>

          <div className='text-xs text-gray-600 borderLeft pl-24 pr-5'>
          {item.time}
          </div>
        
        </div>
      ))}

        </div>
    );
};

export default Sidebar_chat;
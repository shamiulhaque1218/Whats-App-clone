import { BsCameraVideoFill } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { GrAdd } from 'react-icons/gr';
import { useEffect, useState } from 'react';

const Chat = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('/fakeData.json');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data)
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();


  }, []);
    return (
        <div className="chat">
            
            <div className="chat_header flex pb-2">
                <div className="flex gap-4 ml-4 mt-2">
                <img className="h-10 w-10 rounded-full" src="https://th.bing.com/th/id/OIP.thg_ubNkJSISTxOKCUc-EQHaLF?pid=ImgDet&rs=1" alt="" />
                <div>
                    <p className="text-gray-800">+880 163254898</p>
                    <p className="text-sm text-gray-500">last seen today at 10:20 pm</p>
                </div>
                </div>
                <div className="header-right marginLeftFull flex gap-6 pr-3 mt-5">
                <p className=' text-gray-400 flex gap-1'>
                <BsCameraVideoFill className='cursor-pointer text-lg'></BsCameraVideoFill>
                 <RiArrowDownSLine className='cursor-pointer text-xl'> </RiArrowDownSLine>
                </p>
                <AiOutlineSearch className='cursor-pointer text-2xl text-gray-600'> </AiOutlineSearch>
                <FiMoreVertical className='cursor-pointer text text-gray-600 font-bold'> </FiMoreVertical>
                </div>

            </div>


            <div className="chat_body">
            {data.map(item => (
                
                 <div key={item.number}>
                 {
                 item.sent && item.sent[0] && item.received && item.received[0] &&  (

                <div>
                <p className='ml-4 px-4 py-2 bg-white w-80 border rounded-b-lg rounded-r-lg'>{item.sent[0].msg1} <small className='text-gray-400'> 08:56 AM </small> </p>

                <p
                 className='px-4 py-2 bg-white w-80 border rounded-b-lg rounded-r-lg paddingMy'>{item.received[0].msg4} <small className='text-gray-400'> 08:57 AM </small></p>

                <p className='ml-4 px-4 py-2 bg-white w-96 border rounded-b-lg rounded-r-lg'>{item.sent[0].msg2} <small className='text-gray-400'> 08:58 AM </small></p>

                <p className='paddingMy px-4 py-2 bg-white w-96 border rounded-b-lg rounded-r-lg'>{item.received[0].msg5} <small className='text-gray-400'> 08:58 AM </small></p>

                <p className='ml-4 px-4 py-2 bg-white w-96 border rounded-b-lg rounded-r-lg'>{item.sent[0].msg3} <small className='text-gray-400'> 08:59 AM </small></p>

                <p className='paddingMy px-4 py-2 bg-white w-96 border rounded-b-lg rounded-r-lg'>{item.received[0].msg6} <small className='text-gray-400'> 08:59 AM </small></p>
                </div>


                  )}
                  
                 </div> 
                 ) )}
       
        
            </div>


            <div className="chat_footer flex text-gray-500">
                    <GrAdd className='cursor-pointer text-xl mt-3'></GrAdd>
                   <p className='pl-5'>
                   <CgSmileMouthOpen className='cursor-pointer text-2xl mt-2 absolute top-3 left-20'> </CgSmileMouthOpen>
                   <input className='inputMr py-2 pl-16 rounded-lg' placeholder='Type a message' type="text" />
                   </p>
                   <MdKeyboardVoice className='cursor-pointer text-3xl mr-5 mt-2'> </MdKeyboardVoice>
            </div>
            
        </div>
    );
};

export default Chat;
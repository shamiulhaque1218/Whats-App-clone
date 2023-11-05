import { FaCircleUser } from 'react-icons/fa6';
import { MdDonutLarge } from 'react-icons/md';
import { RiChatNewFill } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdGroups2 } from 'react-icons/md';
import { GoFilter } from 'react-icons/go';
import { RiChatVoiceFill } from 'react-icons/ri';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Sidebar_chat from './Sidebar_chat';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SideNav = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const [open, setOpen] = useState(false);
    const [openG, setOpenG] = useState(false);
    const handelLogOut = () => {
        logOut().then((res) => {
          console.log(res).catch((err) => {
              console.log(err);
          })
        })
          }
    return (
        <div className="sideNav">

         <div className='side-main'>
         <div className="side_header">
            {
                user ? 
                 <img className='bg-white rounded-full h-10 w-10' src={user.photoURL} alt="" /> : 
                  <FaCircleUser className='bg-white text-4xl text-gray-400 rounded-full'> </FaCircleUser>
            }
           
           <div className='side_right mt-2'>
            <MdGroups2 onClick={()=> setOpenG(!openG)}  className='cursor-pointer text2 text-gray-600'> </MdGroups2>
           <MdDonutLarge className='cursor-pointer text text-gray-600'> </MdDonutLarge>
           <RiChatVoiceFill className='cursor-pointer text text-gray-600'> </RiChatVoiceFill>
            <RiChatNewFill className='cursor-pointer text text-gray-600'> </RiChatNewFill>
            <FiMoreVertical onClick={()=> setOpen(!open)} className='text text-gray-600 font-bold cursor-pointer'> </FiMoreVertical>
           </div>
          </div>


          <div className="grid grid-cols-8 border border-b-gray-100">

           <div className="side_search col-span-7 text-sm my-2 ml-3">
           <AiOutlineSearch className='cursor-pointer text-lg mr-6 ml-2'> </AiOutlineSearch>
            <input className='bg-search-color' type='text' placeholder='Search or start new chat' /> 
           </div>
           <div className='col-span-1'>
              <GoFilter className='cursor-pointer text-xl mt-5 ml-3 text-gray-500 font-bold'> </GoFilter>
           </div>

          </div>
         </div>

          <div className="side_body cursor-pointer">
          <Sidebar_chat> </Sidebar_chat>

          {
                open && 
          <div onClick={()=> setOpen(false)} className='bg-white w-60  absolute top-12 left-36 rounded-md pb-5 drop-shadow-2xl border'>
            
                <ul>
                  
                <li className='pt-5 pl-5'>New Group</li>
                <li className='pt-3 pl-5'>New Community</li>
                <li className='pt-3 pl-5'>Starred messages</li>
                <li className='pt-3 pl-5'>Starred messages</li>
                <li className='pt-3 pl-5'>Select Chats</li>
                <li className='pt-3 pl-5'>Settings</li>
                <li onClick={handelLogOut}  className='pt-3 pl-5 border-b pb-3 cursor-pointer'>Log Out</li>
                <li className='pt-3 pl-5'>Get Whats App for Windows</li>
            </ul>
            
        </div>
        }
          {
                openG && 
          <div 
           className='community text-white text-lg font-medium pb-5 border'>
               
               <p className='pl-6 pt-16 pb-4 fixed bg-sky2 top-0 left-0 community2 flex'> 
               <AiOutlineArrowLeft onClick={()=> setOpenG(false)} className='text-white mr-8 mt-1 text-xl cursor-pointer'> </AiOutlineArrowLeft>
               Communities  </p>
               <img className='fixed top-28 pb-1' src="/co.png" alt="" />
               <p className='pl-3 pt-12 font-bold fonts bg-white fixed top-80 text-black community2 text-center'> Stay connected with a community <br />
               <h6 className='pt-3 text-sm text-gray-700 font-normal text-center pb-96'>
                Community brings members together in topic- <br /> based group, and make it easy to get admin <br /> announcements. Any community you're added to <br /> will appear here. <br />
                 <h5 className='text-sm font-base fontC pt-2 flex pl-28 sky3'> See example communities 
                 <MdOutlineKeyboardArrowRight className='text-2xl'> </MdOutlineKeyboardArrowRight>
                  </h5> <br />
                 <small className='text-sm font-medium bg-sky2 px-5 py-2 rounded-2xl text-white'>Start your community </small>
               </h6>
                </p>

        </div>
        }

          </div>

          
          
        </div>
    );
};

export default SideNav;
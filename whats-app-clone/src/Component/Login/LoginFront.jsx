/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleSign from './GoogleSign';

const LoginFront = () => {
    return (
        <div className=''>
            <container className='login-header flex gap-5'>
                <img className='h-10' src="/logo.png" alt="" />
              <small className='mt-2'>  WHATSAPP WEB </small>
            </container>

           <container className="main-con drop-shadow-2xl">

           <div className='login-body flex gap-8'>
             <img src="/pc.png" alt="" />
             <container className='mt-2 text-lg'> Download WhatsApp for Windows
              <p className='text-sm text-gray-500'>Get calling, screen sharing and faster experience with the new Windows app. </p>
               </container>
               <div className='mt-5'>
               <a className='px-5 py-2 rounded-3xl text-sm font-semibold text-white bg-sky'  href='https://web.whatsapp.com/'> Get the app </a> 
               </div>
            </div>

            <div className='flex pb-12 border-b mb-5'>
            <div className='mt-6 text-lg text-gray-600'>
                <h2 className='text-3xl font-thin'>
                    Use WhatsApp on your Computer
                </h2>
                <p className='mt-10'>1. Open whats app on your phone</p>
                <p className='mt-5'>2. Go to settings by tapping on your profile photo,
                 <span className='text-lg text-gray-600 font-semibold'>Menu : </span>  , or <br />
                 <small className='text-lg text-gray-600 font-semibold'> Settings </small>
                  </p>
                <p className='mt-5'> 3. Tap
                 <span className='text-lg text-gray-600 font-semibold'> Linked devices </span>
                  and then
                  <span className='text-lg text-gray-600 font-semibold'> Link a device </span>
                   </p>
                <p className='mt-5'>4. Point your phone to this screen to capture the QR code</p>
            </div>
            <div className='mt-8 ml-32'>
                <img src="/scan.png" alt="" />
            </div>
            </div>

            <div className='pb-20'>
                <NavLink className="text-lg text-green-800"> 
                <GoogleSign> </GoogleSign>
                 </NavLink>
            </div>

           </container>
        </div>
    );
};

export default LoginFront;
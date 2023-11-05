/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Modal = () => {
    const [open, setOpen] = useState(false);
    const menus = ['name','age','bio']
    return (
        <div  className='bg-white p-4 w-52 shadow-lg'>
            <p className='mt-20' onClick={()=> setOpen(!open)}> okkokk </p>
            {
                open && 
                <ul onClick={()=> setOpen(false)}>
                {
                    menus.map((menu)=> (
                        <li className='cursor-pointer hover:bg-slate-100' key={menu}> {menu} </li>
                    ))
                }
            </ul>
            }
        </div>
    );
};

export default Modal;
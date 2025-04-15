import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Shop.css';
import Header from '../../Shares/Header/Header';
const Shop = () => {
    const [open, setOpen] = useState(false)




    return (
        // <div className='py-24'>
        //      <div className="flex items-center font-medium justify-around">
        //         <div className='z-50 p-5 md:w-auto w-full flex justify-between' >
        //             <img className='md:cursor-pointer h-9' src={logo} alt="logo" />
        //             <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)} >
        //             <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        //                 {/* <FaHome className={`${open ? "close" : "menu"}`} /> */}
        //             </div>
        //         </div>
        //         <ul className='md:flex hidden uppercase items-center gap-4 font-[Poppins]' >
        //             <li>
        //                 <Link to='/' className='py-7 px-3 inline-block' >Home</Link>
        //             </li>
        //             <NavLinks />
        //         </ul>
        //         <div className='md:block hidden'>
        //             <Button />
        //         </div>

        //         {/* mobile nav  */}
        //         <ul className={`md:hidden absolute bg-white w-full h-full bottom-0 py-24 pl-4
        //             duration-500 ${open ? "left-0" : "left-[100%]"} `} >
        //             <li>
        //                 <Link to='/' className='pt-20  px-3 inline-block' >Home</Link>
        //             </li>
        //             <NavLinks />
        //         </ul>
        //     </div> 
        // </div>

        <div class="py-20 bg-gray-100">
            <div className='hidden lg:flex'>
                <Header />
            </div>
        </div>
    );
};

export default Shop;
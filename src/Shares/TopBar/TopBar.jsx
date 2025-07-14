import React from 'react'
import './TopBar.css'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone, MdMailOutline } from "react-icons/md";
const TopBar = () => {
  return (

    <div className='lg:flex hidden py-2 px-10 dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md bg-[#DFE7F6] text-[#000]'>
      <div className='top-container'>
        <div className='flex gap-4'>
          <a className='flex items-center gap-2' href="+880 1912345678"><BsTelephone />+880 1912345678 </a>
          | <a className='flex items-center gap-2' href="mailto:st@gmail.com"><CiMail />st@gmail.com</a>
        </div>
        <div className=''>
          <marquee className="" behavior="" direction="" loop="-1" scrollamount="5" width="100%">
            বাংলাদেশের যেকোনো প্রান্ত থেকে ঘরে বসে অর্ডার করুন বা শো রুমে এসে প্রোডাক্ট ক্রয় করুন 🔥 কম্পিউটার ক্রয় করলে নিশ্চিত উপহার 🎉 এছাড়া ডেস্কটপ কম্পিউটার বিল্ড করলেই নিশ্চিত উপহার সহ ৫-২৫ ভাগ পর্যন্ত মূল্য ছাড় </marquee>
        </div>
      </div>
    </div>

    // {/* <div className='lg:flex  hidden bg-[#DFE7F6] text-[#000]'>
    //       <div className='grid grid-cols-2  '>
    //         <div>
    //           <ul className='flex items-center gap-6 pl-14'>
    //             <li className='flex items-center gap-2 pt-2 font-semibold'>
    //               <MdOutlineLocalPhone />
    //               <a href="tel:+880 1974977440">+880 1974977440</a>
    //             </li>
    //             <li>|</li>
    //             <li className='flex items-center'>
    //               <MdMailOutline />
    //               <a href="mailto:+tishopbd@gmail.com">tishopbd@gmail.com</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>বাংলাদেশের যেকোনো প্রান্ত থেকে ঘরে বসে অর্ডার করুন বা শো রুমে এসে প্রোডাক্ট ক্রয় করুন 🔥 কম্পিউটার ক্রয় করলে নিশ্চিত উপহার 🎉 এছাড়া ডেস্কটপ কম্পিউটার বিল্ড করলেই নিশ্চিত উপহার সহ ৫-২৫ ভাগ পর্যন্ত মূল্য ছাড় 
    //           <marquee className='py-2'>  </marquee>
    //         </div>
    //       </div>
    //     </div> */}


    // <div className=' bg-[#DFE7F6] text-[#000]'>
    //     <marquee className='py-2'>  বাংলাদেশের যেকোনো প্রান্ত থেকে ঘরে বসে অর্ডার করুন বা শো রুমে এসে প্রোডাক্ট ক্রয় করুন 🔥 কম্পিউটার ক্রয় করলে নিশ্চিত উপহার 🎉 এছাড়া ডেস্কটপ কম্পিউটার বিল্ড করলেই নিশ্চিত উপহার সহ ৫-২৫ ভাগ পর্যন্ত মূল্য ছাড় </marquee>
    // </div>
  )
}

export default TopBar

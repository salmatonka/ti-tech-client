import React from 'react'
import { Link } from 'react-router-dom'
import { FaCarAlt } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";


const Supports = () => {

    return (
        <div>
            <div className='py-8'>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 shadow-xl'>

                    <li className='dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md flex items-center justify-center  bg-gray-200 py-4'>
                        <Link className='flex items-center justify-center gap-4'>
                        <div className=''>
                            <MdMonitor className=' border border-gray-500 bg-secondary text-gray-200 w-12 h-12 p-2 rounded-full' />
                        </div>
                            <div>
                                <h2 className='font-semibold'>Monitor Filter</h2>
                                <p className='text-sm'>Find Your Monitor easily</p>
                            </div>
                        </Link>
                    </li>
                    <li className='dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md flex items-center justify-center  bg-gray-200 py-4'>
                        <Link className='flex items-center justify-center gap-4'>
                        <div className=''>
                            <MdOutlineFeedback className='border border-gray-500 bg-secondary text-gray-200 w-12 h-12 p-2 rounded-full' />
                        </div>
                            <div>
                                <h2 className='font-semibold'>Raise a Complain</h2>
                                <p className='text-sm'>Share Your experience</p>
                            </div>
                        </Link>
                    </li>
                    <li className='dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md flex items-center justify-center  bg-gray-200 py-4'>
                        <Link className='flex items-center justify-center gap-4'>
                        <div className=''>
                            <IoIosHome className='border border-gray-500 bg-secondary text-gray-200 w-12 h-12 p-2 rounded-full' />
                        </div>
                            <div>
                                <h2 className='font-semibold'>Home Service</h2>
                                <p className='text-sm'>Get export help</p>
                            </div>
                        </Link>
                    </li>
                    <li className='dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md flex items-center justify-center  bg-gray-200 py-4'>
                        <Link className='flex items-center justify-center gap-4'>
                        <div className=''>
                            <CiSettings className='border border-gray-500 bg-secondary text-gray-200 w-12 h-12 p-2 rounded-full' />
                        </div>
                            <div>
                                <h2 className='font-semibold'>Servicing Center</h2>
                                <p className='text-sm'>Repair Your Device</p>
                            </div>
                        </Link>
                    </li>
                    <li className='dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md flex items-center justify-center  bg-gray-200 py-4'>
                        <Link className='flex items-center justify-center gap-4'>
                        <div className=''>
                            <FaCarAlt className='border border-gray-500 bg-secondary text-gray-200 w-12 h-12 p-2 rounded-full' />
                        </div>
                            <div>
                                <h2 className='font-semibold'>Free Delivery</h2>
                                <p className='text-sm'>from $78</p>
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Supports

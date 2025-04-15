import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Header from '../../Shares/Header/Header';
const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { name, details, image, price, status, regular_price, category } = productDetails;
    return (
        <section className="bg-gray-200 pt-20 ">

            <Header classsName='bg-[#2B3440]' />

            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className='flex gap-2 '>
                    <Link to='/' >
                        <IoHomeOutline className='text-lg mt-1 mr-4' />
                        {/* <FaHome className='text-lg mt-1 mr-4' /> */}
                    </Link> \ <Link to='/'>{category}</Link>
                </div>

                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={image} alt="" className=" w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className=" sm:pl-10 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-2xl text-[#3749bb] ">{name}</h3>
                        <div className='lg:flex gap-2'>
                            <p className='bg-gray-300 px-2 rounded-xl' >Price: {price}</p>
                            <p className='bg-gray-300 px-2 rounded-xl' >Regular Price: {regular_price}</p>
                            <p className='bg-gray-300 px-2 rounded-xl' >Status: {status}</p>
                            {/* <p>Product Code:{price}</p>
                            <p>Brand:{price}</p> */}
                        </div>
                        {/* <p>{details? details?.slice(0,60) : "no details"}</p> */}
                        <p>Details:{details ? details : "no details"}</p>
                    </div>
                </a>

            </div>
        </section>
    );
};

export default ProductDetails;
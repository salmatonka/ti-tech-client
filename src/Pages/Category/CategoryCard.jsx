import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';
import './CategoryCard.css';

import processorImg from '../../assets/icon/processor.png';
import monitorImg from '../../assets/icon/monitor.png';
import motherboardImg from '../../assets/icon/motherboard (1).png';
import gamingImg from '../../assets/icon/gaming-chair (1).png';
import graphicsImg from '../../assets/icon/vga-card.png';
import powerImg from '../../assets/icon/power-supply.png';
import ssdImg from '../../assets/icon/solid-state-drive.png';
import ramImg from '../../assets/icon/ram.png';
import casingImg from '../../assets/icon/pc.png';
import accessoriesImg from '../../assets/icon/mouse.png';
import routerImg from '../../assets/icon/wifi-router.png';
import upsImg from '../../assets/icon/ppp01.png';
import ProductCard from '../ProductCard/ProductCard';
import { FaHome } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';


const CategoryCard = () => {
    const products = useLoaderData()
    // console.log(categoryProducts);

    return (
        <div className='px-2 pt-10 dark:bg-[#0F172A]  dark:text-white'>
            <div className=' '>
                <h2 className="text-2xl dark:text-gray-200 font-semibold tracking-wide flex justify-center pb-4">Category Products</h2>
               
                <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-8'>
                        {/* {categoryProducts.map(categoryProduct => <SingleCard
                            key={categoryProduct}
                            categoryProduct={categoryProduct} />)} */}
                        {
                            products?.slice(0, 12).map(product => <ProductCard
                                key={product?._id} product={product} />)
                        }
                    </div>

                {/* CategoryCards.... */}
                {/* <div className="">
                    <div className='pb-10' >
                        <div className='flex flex-wrap gap-2' >

                            {products.map(product =>
                                <li className='h-[100px] w-[100px]   p-[10px]  bg-gray-200 rounded   flex justify-items-center justify-center'>
                                    <Link to={'/products/Processor'}>
                                        <img className='w-[55px]' src={product?.image} />
                                        {product?.brand}
                                    </Link>
                                </li>
                            )}

                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default CategoryCard;
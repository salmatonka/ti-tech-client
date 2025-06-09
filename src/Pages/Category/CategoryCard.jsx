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
import ProductCard from '../Product/ProductCard';


const CategoryCard = () => {
    const products = useLoaderData()
    // console.log(categoryProducts);






    return (
        <div className='px-2 py-28 '>
            <div className='cp-main-side pb-6'>
                {/* Category */}
                <div className="left-side border ">
                    <div>
                        <select
                            onChange={e => {
                                setFilter(e.target.value)
                                setCurrentPage(1)
                            }}
                            // value={filter}
                            name='category'
                            id='category'
                            className='border p-4 max-w-xs w-full rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='processor'>Processor</option>
                            <option value='monitor'>Monitor</option>
                            <option value='motherboard'>Motherboard</option>
                        </select>
                    </div>

                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>




                </div>

                {/* CategoryCards.... */}
                <div className="right-side border">

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

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                        {/* {categoryProducts.map(categoryProduct => <SingleCard
                            key={categoryProduct}
                            categoryProduct={categoryProduct} />)} */}
                        {
                            products?.slice(0, 12).map(product => <ProductCard
                                key={product?._id} product={product} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
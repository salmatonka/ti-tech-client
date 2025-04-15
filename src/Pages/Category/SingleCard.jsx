import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
const SingleCard = ({ categoryProduct }) => {
    const { name, details, image, price,_id } = categoryProduct;
    return (
        <div>

            <div className=''>
                <div className="max-w-lg p-4  shadow-lg bg-gray-200 dark:text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800 bg-gray-300 py-1 px-1">TK. {price}</a>
                        </div>
                        <Link rel="noopener noreferrer" to={`/singleProduct/${_id}`}>Details</Link>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={image} alt="" className="block  object-center w-full rounded-md h-72 dark:bg-gray-500" />

                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-600">{name}</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-600 pb-2">{details?.slice(0, 50)}...</p>
                        </div>
                    </div>

                    <button type="button" className=" w-full p-3 font-semibold tracking-wide rounded-md bg-gray-300 py-2">
                        <Link className='flex items-center justify-center ' to='/'>Add To Cart <HiOutlineShoppingCart className='ml-2' /></Link></button>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;
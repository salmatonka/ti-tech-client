import React, { useState } from 'react'
import {toast} from 'react-toastify';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaUniversalAccess } from "react-icons/fa";

const CartDrawerCard = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

    const handleDelete = id => {

        const proceed = window.confirm('Sure to delete this booking!');
        if (proceed) {
            fetch(`https://ti-server-585b.onrender.com/carts/${id}`, {
                mode: 'no-cors',
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(() => {
                    toast.success('Deleted Successfully!');
                    refetch();
                });
        };

    }
    return (
        <div>
             
            <div className='pt-4 px-4'>
                {cart.map((item, index) =>
                    <div className='flex items-center gap-4 mb-3'>
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img src={item.image} alt='item' />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-sm'>{item.name}</h4>
                        </div>
                        <div>
                            <h4 className='text-sm'>BDT:{item.price}</h4>
                        </div>
                        <div>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-primary hover:bg-secondary p-2 rounded-xl">
                                <FaTrashAlt className="text-red-600 hover:text-gray-200"></FaTrashAlt>
                            </button>
                        </div>
                    </div>
                )}
            </div>


            <div className='left-0 right-0 bottom-0 absolute'>
        
                <div className='border'>
                    <h2 className="text-lg py-2 flex items-center justify-center">Items: {cart.length}</h2>
                    <hr />
                    <h2 className="text-lg py-2 flex items-center justify-center">Total Price: {totalPrice}</h2>
                </div>

                <button className='bg-warning hover:bg-warningDark
                 text-primary border w-full block'>CheckOut</button>
            </div>
        </div>
    )
}

export default CartDrawerCard

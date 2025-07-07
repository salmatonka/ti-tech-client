import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyWishlist = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://ti-server-585b.onrender.com/wishlist`)
            .then(res=>res.json())
            .then((data) =>{
                // console.log(data)
                setProducts(data)
                
            }
        )
    }, [])
  return (
    <div className='p-4'>
            <div className="overflow-x-auto bg-white shadow-md">
                {
                    products.length === 0 ? 
                    <h3 className='text-2xl p-10'>You have no Wishlists</h3> : <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <th>
                                        <Link to={`/dashboard/payment/${product._id}`}> <button className="btn btn-primary btn-xs">Pay</button></Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default MyWishlist

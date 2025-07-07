import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ProductCard.css'
import { Rating } from "@smastrom/react-rating";
import { FaArrowRight } from "react-icons/fa6";
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../provider/AuthProvider';
import {toast} from 'react-toastify';

const ProductCard = ({ product }) => {
    const { name, details, image, price, regular_price,
        _id } = product;

         const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                serviceId: _id,
                email: user.email,
                name,
                image,
               price, regular_price,
                // rating
            }


            fetch('https://ti-server-585b.onrender.com/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // if (loading) {
                    //     return <Spinner />
                    // }
                    toast.success('Product Added Successfully!');
                    navigate('/carts');



                })
        }
    }

    return (

        <div className="card card-compact shadow-xl w-82  border cardBody">

            <figure className="imgBody shadow-sm">
                <Link to={`/product/${_id}`}>
                    <img className='h-64 w-full' src={image} alt="product" />
                </Link>
            </figure>
            <div className="card-body">
                <h6 
                style={{fontSize: '15px',fontWeight: '500'}}
                className="flex items-center gap-8">
                    {name}
                    </h6>
                <p className='text-md'>{details ? details?.slice(0,44) : 'no details'}...</p>
                <div className="flex gap-4">
                    <h6 className="text-[#1159AB] font-semibold">BDT: {price} </h6>
                    <span><s>BDT: {regular_price}</s></span>
                </div>
                <Rating
                    className="pb-2"
                    style={{ maxWidth: 80 }}
                    // value={rating}
                    readOnly
                />

                <div >
                    <button
                        onClick={handleAddToCart}
                        className='flex items-center justify-center py-2 gap-4 w-full font-semibold bg-info hover:bg-hoverInfo hover:text-white border rounded-md text-[#3749bb]'>
                       Add To Cart <FaArrowRight />
                    </button>
                </div>

                {/* <div className='flex justify-between items-center'>
                    <Link to={`/product/${_id}`}>
                        <div className="card-actions ">
                            <button title={`More details about ${name}`}
                                className="py-3 px-6 font-semibold bg-info hover:bg-hoverInfo hover:text-white border rounded-md text-[#3749bb] ">
                                More details
                            </button>
                        </div>
                    </Link>
                    <div >
                        <button
                            // onClick={handleAddToCart}
                            className='py-3 px-6 font-semibold bg-info hover:bg-hoverInfo hover:text-white border rounded-md text-[#3749bb]'>
                           <FaArrowRight />
                        </button>
                    </div>
                </div> */}

            </div>
        </div>

    )
}





export default ProductCard;
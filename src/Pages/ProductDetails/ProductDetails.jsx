import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import './ProductDetails.css';
import { FaArrowRight, FaHome } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import axios from 'axios';
import useCart from "../../hooks/useCart";
const ProductDetails = () => {
    const products = useLoaderData();
    const { _id,name, details, image, price, status, regular_price, category } = products;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleProductBooking = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const img = form.img.value;

        const order = {
            productName: name,
            buyer: username,
            email,
            phone,
            location,
            details,
            // image_url,
            img,
            price,
            // year,
            // rating

        }
        // console.log(order)
        fetch(`https://ti-server-585b.onrender.com/orders`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // toast.success('Product Added Successfully!');
                //             navigate('/dashboard/myOrders');

                // console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking Confirmed');
                    navigate('/dashboard/myOrder');

                }
                else {
                    toast.error(data.message);
                }

            })
    };

    // store wishlist data in MongoDB
    const handleWishList = (products) => {
        products.userEmail = user.email;
        axios.post("https://ti-server-585b.onrender.com/wishlist", products)
            .then(() => {
                toast.success("Product added in your Wishlist")
                navigate('/dashboard/myWishlist')
            }

            )
    }

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

        <div>

            <div>
                <div className="mt-6 mb-8">
                    <ul className="flex items-center text-lg">
                        <li><Link to="/" ><FaHome /></Link></li><span className="px-3">|</span>
                        <li><Link to={`/usedMobile/${category}`} >{category}</Link></li><span className="px-3">|</span>
                        <li><h1 className="pr-3">{name}</h1></li>
                    </ul>
                </div>
                <div className="details-container">
                    <div className="details-left border ">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="details-right ">
                        <div className="">
                            <h1 className="lg:text-2xl font-bold text-[#1159AB] sm:text-xl">{name}</h1>

                            <div className='md:flex items-center gap-2 py-4 '>
                                <div className='text-sm border bg-primary shadow-md rounded-3xl px-1 py-1 mb-2'>
                                    <h3>Resale Price: ৳ {price}</h3>
                                </div>
                                <div className='text-sm border bg-primary shadow-md rounded-3xl px-1 py-1 mb-2'>
                                    <h3><s>Current Price: ৳{regular_price}</s></h3>
                                </div>
                                {/* <div className='text-sm border bg-primary shadow-md rounded-3xl px-1 py-1 mb-2'>
                                    <h3>Resale Price: ৳ {regular_price}</h3>
                                </div> */}
                                <div className='text-md '>
                                    <h3>Status: {status}</h3>
                                </div>
                            </div>


                            <p className="text-md mt-6 mb-2">{details}</p>

                            {/* <div>
                                <marquee marquee className="" behavior="" direction="" loop="-1" scrollamount="5" width="100%">
                                    অনলাইন থেকে প্রডাক্ট অর্ডার এর পূর্বে হেল্পলাইন থেকে স্টক এবং ডেলিভারী সম্পর্কে
                                    সঠিকভাবে জেনে অর্ডার করার জন্য বিশেষভাবে অনুরোধ করা হচ্ছে * +880 1912345678
                                </marquee>
                            </div> */}
                            {/* <p>Date: {date}</p>
                            <p>Used time: {year} year</p>
                            <p>Location: <span className=''>{location}</span> </p>
                            <h2 className='py-2'>Seller Name: <span className="text-secondary">{sellerName}</span></h2> */}


                            <div>
                                <marquee marquee className="" behavior="" direction="" loop="-1" scrollamount="5" width="100%">
                                    অনলাইন থেকে প্রডাক্ট অর্ডার এর পূর্বে হেল্পলাইন থেকে স্টক এবং ডেলিভারী সম্পর্কে
                                    সঠিকভাবে জেনে অর্ডার করার জন্য বিশেষভাবে অনুরোধ করা হচ্ছে * +880 1912345678
                                </marquee>
                            </div>



                            <div>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">

                                    <label htmlFor='booking-modal'
                                        //  style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px" }}
                                        className="bg-secondary hover: rounded-sm w-52 py-3 flex
                                         justify-center items-center text-white mt-3">
                                        Buy Now <FaLongArrowAltRight className='mt-1 ml-3s' /></label>

                                    <div
                                        onClick={handleAddToCart}
                                        className="bg-secondary hover: rounded-sm w-52 flex
                                        justify-center items-center  py-3  text-white mt-3"
                                          >
                                        <button className="flex 
                                        items-center gap-4">
                                        Add To Cart <FaArrowRight /> </button>

                                    </div>
                                    <div>
                                        <Link
                                            className="bg-secondary hover: rounded-sm w-52 flex 
                                        justify-center items-center  py-3  text-white mt-3"
                                        ><button
                                            onClick={() => handleWishList(products)}
                                            className="flex 
                                        items-center gap-4">
                                                <BsCart3 />Add to Wishlish</button>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label onClick={() => setProductData(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="text-lg font-bold">{name} for </h3>
                                            <form
                                                onSubmit={handleProductBooking}
                                            >
                                                <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                                                <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                                                <input className='p-2 w-full border' defaultValue={image} type="text" name="img" id="img" readOnly />
                                                <div className='flex justify-between'>
                                                    <p>Resale Price: ৳{price}</p>
                                                    <p><s> Current Price: ৳{regular_price}</s> </p>
                                                </div>
                                                <input name='phone' type="number"
                                                    placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                                                <input name='location' type="text"
                                                    placeholder="Your Location" className="input input-bordered w-full my-3" required />
                                                {/* <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea> */}
                                                {
                                                    !user && <p>Please login</p>
                                                }
                                                <div className='flex justify-between items-center'>
                                                    <input htmlFor="booking-modal" type="submit" value='Submit' className={user ?
                                                        "btn bg-[#1159AB] w-48 "
                                                        :
                                                        "btn btn-accent w-48  btn-disabled"
                                                    } >
                                                    </input>
                                                    <div className="modal-action text-center">
                                                        <label htmlFor="confirm-modal" className="btn w-48">Cancel</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="review bg-white shadow-lg p-6 flex items-center justify-center">
                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                        <div className="flex flex-col items-center py-6 space-y-3">
                            <span className="text-center">How was your experience?</span>
                            <div className="flex space-x-3">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <textarea rows="3" placeholder="Message..."
                                className="p-4 rounded-md resize-none text-gray-800 border border-gray-50"></textarea>
                            <button type="button" className="py-4 my-8 font-semibold
             rounded-md hover:text-gray-50 bg-info hover:bg-secondary">Leave feedback</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <a rel="noopener noreferrer" href="#" className=" text-sm
         dark:text-gray-600">Maybe later</a>
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-8">
                <div className="bg-primary shadow-sm border sm:py-4">
                    <ul className="lg:flex items-center gap-6 block">
                        <li className="py-2"><Link>Specification</Link></li>
                        <li className="py-2"><Link>Description</Link></li>
                        <li className="py-2"><Link>Questions (0)</Link></li>
                        <li className="py-2"><Link>Reviews (0)</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

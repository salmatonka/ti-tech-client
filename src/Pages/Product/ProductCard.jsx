import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'


const ProductCard = ({ product }) => {
    const { name, details, image, price, _id } = product;
    return (
        // <div className="relative max-w-lg p-4 shadow-lg bg-gray-200 dark:text-gray-800">
        //     <div className="flex justify-between pb-4 border-bottom">
        //         <div className="flex items-center">
        //             <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800 bg-gray-300 py-1 px-1">TK. {price}</a>
        //         </div>
        //         <Link rel="noopener noreferrer" to={`/singleProduct/${_id}`}>Details</Link>
        //     </div>
        //     <div className="space-y-4">
        //         <div className="space-y-2 ">
        //             <img src={image} alt="" className="block  object-center w-full rounded-md h-72 dark:bg-gray-500" />

        //         </div>
        //         <div className="space-y-2">
        //             <a rel="noopener noreferrer" href="#" className="block">
        //                 <h6 className="text-md font-semibold dark:text-violet-600">
        //                     {/* {name?.slice(0,16)}... */}
        //                     {name}
        //                 </h6>
        //             </a>
        //             <p className="leading-snug dark:text-gray-600 pb-2">{details?.slice(0, 26)}...</p>
        //         </div>
        //     </div>

        //     <div >
        //         <button>
        //             <Link className='flex items-center justify-center shadow-lg bg-gray-200 w-full rounded-md ' to='/'>Add To Cart <HiOutlineShoppingCart className='ml-2' /></Link>
        //         </button>
        //     </div >
        // </div >

        <div className="card card-compact shadow-xl w-82  border cardBody">
          
            <figure className="imgBody shadow-sm">
                <img className='h-64 w-full' src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{ details? details?.slice(0, 60) : 'no details'}...</p>
                <h3 className="text-xl text-[#3749bb] font-semibold">Price: {price}<span className="font-extrabold">৳</span> </h3>
                <Link to={`/product/${_id}`}>

{/* hover:bg-[#3749bb] hover:text-white border rounded-md text-[#3749bb] bg-[#d5d8ec] w-full  */}
                   <div className="card-actions ">
                        <button title={`More details about ${name}`} 
                        className="py-3 font-semibold bg-[#DFE7F6]
                        hover:bg-[#3749bb] hover:text-white border rounded-md text-[#3749bb]  w-full 
                        ">
                            More details
                        </button>
                    </div>
                </Link>
            </div>
        </div>

    )
}





export default ProductCard;
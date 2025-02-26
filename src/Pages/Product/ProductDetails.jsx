import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { name, details, image, price } = productDetails;
    return (
        <section className="bg-gray-200 pt-24 ">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={image} alt="" className=" w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-2xl ">{name}</h3>
                        {/* <p>{details}</p> */}
                        {/* <p>{details? details?.slice(0,60) : "no details"}</p> */}
                        <p>{details? details : "no details"}</p>
                    </div>
                </a>

            </div>
        </section>
    );
};

export default ProductDetails;
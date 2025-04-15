import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch('https://ti-server-git-main-salmatonkas-projects.vercel.app/products')
    // fetch('products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        // setLoading(false)
      })
  }, [])
// console.log(data)
    return (
        <div className='px-4 pt-6'>
            {/* {products?.length} */}
            <h2 className="text-3xl font-semibold tracking-wide flex justify-center pt-4 pb-8">Products</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {
                    products?.map(product =><ProductCard key={product?._id}
                        product={product} /> )
                }
            </div>
        </div>
    );
};

export default Product;
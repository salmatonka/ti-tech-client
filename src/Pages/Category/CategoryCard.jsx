import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';
import SingleCard from './SingleCard';

const CategoryCard = () => {
    const categoryProducts = useLoaderData()
    // console.log(categoryProducts);
    return (
        <div>
            <div className=' px-4 py-28 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {categoryProducts.map(categoryProduct => <SingleCard
                    key={categoryProduct}
                    categoryProduct={categoryProduct} />)}
            </div>
        </div>
    );
};

export default CategoryCard;
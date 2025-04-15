import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';
import './CategoryCard.css'
const CategoryCard = () => {
    const categoryProducts = useLoaderData()
    // console.log(categoryProducts);
    return (
        <div className=' px-4 py-28 '>
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
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                        {categoryProducts.map(categoryProduct => <SingleCard
                            key={categoryProduct}
                            categoryProduct={categoryProduct} />)}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
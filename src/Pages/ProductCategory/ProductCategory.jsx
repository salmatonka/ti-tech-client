import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCategory.css';

const ProductCategory = () => {
    const data = [
        {
            "title": "Amd Desktop PC",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        },
        {
            "title": "Inter Desktop PC",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        },
        {
            "title": "Inter Desktop PC",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        }
    ]
    return (
        <div>
            <div className='pb-10'>
                <ul className='grid grid-cols-3 lg:grid-cols-8 md:grid-cols-4 gap-4 lg:gap-10'>

                    {
                        data.map((d, i) => (
                            <li>
                                <Link to=''>
                                    <div className="product-brand lg:w-28 w-20 bg-primary border shadow-md">
                                        <img className='w-10 lg:w-16  ml-5 mt-3' src={d?.img} alt="" />
                                        <h3 className='mb-2 ml-2 text-xs'>{d?.title?.slice(0, 9)}...</h3>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default ProductCategory

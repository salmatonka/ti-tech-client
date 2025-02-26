import React from 'react';
import HeadLine from '../HeadLine/HeadLine';
import HomeBanner from '../HomeBanner/HomeBanner';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import About from '../About/About';
import Category from '../../Category/Category';
import './Home.css';
import Product from '../../Product/Product';
const Home = () => {
    return (
        <div className='bg-gray-100 pt-1 px-4 '>
            <HeadLine />
            <div >
                <div className="home-container">
                    <div className='left-side'>
                        <HomeBanner />
                    </div>
                    <div className='right-side '>
                        <Category />
                    </div>
                </div>
            </div>

            <Product />
            <DiscountOffer />
            {/* <About /> */}
        </div>
    );
};

export default Home;
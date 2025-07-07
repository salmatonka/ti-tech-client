import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import Category from '../../Category/Category';
import HomeProducts from '../HomeProducts/HomeProducts';
import FeaturedService from '../FeaturedService/FeaturedService';
import Supports from '../../Supports/Supports';
import './Home.css';
import NewsLetter from '../../../Shares/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <div className='pt-2' >
                <div className="home-container ">
                    <div className='left-side'>
                        <HomeBanner />
                    </div>
                    <div className='right-side '>
                        <Category />
                    </div>
                </div>
            </div>

            <div>
                <Supports />
                <HomeProducts />
                <FeaturedService />
                <DiscountOffer />
                <NewsLetter />
                {/* <About /> */}
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import HeadLine from '../HeadLine/HeadLine';
import HomeBanner from '../HomeBanner/HomeBanner';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import Category from '../../Category/Category';
import './Home.css';
import Product from '../../Product/Product';
import MenuSection from '../../../Others/MenuSection/MenuSection';
import DropDownMenu from '../../../Others/DropDownMenu/DropDownMenu';
const Home = () => {
    return (
        <div className='bg-gray-100'>
            {/* <HeadLine /> */}
            <MenuSection className='' />
            {/* <DropDownMenu /> */}
            <div className='pt-1 max-w-screen-xl mx-auto' >
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
                <Product />
                <DiscountOffer />
                {/* <About /> */}
            </div>
        </div>
    );
};

export default Home;
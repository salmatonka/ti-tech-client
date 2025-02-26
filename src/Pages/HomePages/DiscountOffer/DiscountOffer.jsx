import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, FreeMode, Pagination } from 'swiper/modules';

import gamingCasingImg from '../../../assets/offer/Gaming Casing Price 2024 in Bangladesh.jpg';
import gamingKeyImg from '../../../assets/offer/Gaming Keyboard Mouse Combo Headset.jpg';
import monitorImg from '../../../assets/offer/Monitor.jpg';
import routerImg from '../../../assets/offer/Router Price 2024 in Bangladesh.jpg';

const DiscountOffer = () => {
    return (
        <div className='py-14'>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={monitorImg} className="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={gamingKeyImg} className="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={routerImg} className="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={gamingCasingImg} className="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default DiscountOffer;
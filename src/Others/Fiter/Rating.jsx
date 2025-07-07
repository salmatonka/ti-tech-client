import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const Rating = ({rating}) => {
 

   const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className='py-10'>
 <div className="flex items-center space-x-1 text-yellow-500">
      {Array(fullStars).fill().map((_, i) => (
        <span key={"full" + i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
      {Array(emptyStars).fill().map((_, i) => (
        <span key={"empty" + i}>☆</span>
      ))}
    </div>
        </div>
    )
}

export default Rating

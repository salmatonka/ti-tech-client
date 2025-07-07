import React from 'react'
import Rating from './Rating';

const Category = () => {
    const products = [
    {
      id: 1,
      title: "Product A",
      rating: {
        number: 4.2,
        count: 120
      }
    },
    {
      id: 2,
      title: "Product B",
      rating: {
        number: 3.5,
        count: 75
      }
    }
  ];
  return (
     <div className="space-y-4">
      {products.map(product => (
        <div key={product.id} className="p-4 border rounded shadow-sm">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <div className="flex items-center gap-2">
            <Rating rating={product.rating.number} />
            <span className="text-sm text-gray-600">
              ({product.rating.count})
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category

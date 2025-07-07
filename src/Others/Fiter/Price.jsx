import React, { useState } from 'react'

const Price = () => {
  const products = [
  { id: 1, name: "iPhone 13", price: 800 },
  { id: 2, name: "Samsung Galaxy S22", price: 750 },
  { id: 3, name: "Xiaomi Redmi Note 12", price: 250 },
  { id: 4, name: "Realme GT Neo", price: 450 },
  { id: 5, name: "Google Pixel 6", price: 600 },
];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
   <div>
<div className="p-5 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Filter by Price</h2>

      {/* Price Range Inputs */}
      <div className="flex items-center gap-4 mb-6">
        <label>
          Min:{" "}
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border px-2 py-1 w-20"
          />
        </label>
        <label>
          Max:{" "}
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border px-2 py-1 w-20"
          />
        </label>
      </div>

      {/* Product List */}
      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li key={product.id} className="border p-2 rounded shadow-sm">
            {product.name} - ${product.price}
          </li>
        ))}
        {filteredProducts.length === 0 && <p>No products in this range.</p>}
      </ul>
    </div>
   </div>
  )
}

export default Price

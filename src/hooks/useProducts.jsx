import React, { useEffect, useState } from 'react'

const useProducts = () => {
 const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch('https://ti-server-585b.onrender.com/products')
      .then(res => res.json())
      .then(data => {
        // const popularItems = data.filter(item => item.category === 'popular')
        setProducts(data)
        setLoading(false)
      })
  }, [])
  return [products, loading]
}

export default useProducts

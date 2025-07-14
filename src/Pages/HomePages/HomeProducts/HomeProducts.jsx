import React from 'react'
import ProductCard from '../../ProductCard/ProductCard'
import { useQuery } from '@tanstack/react-query';
import useProducts from '../../../hooks/useProducts';

const HomeProducts = () => {
  // const { data: products = [], refetch, isLoading } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://ti-server-585b.onrender.com/products`);
  //     const data = res.json()
  //     return data
  //   }
  // })
  //   console.log(products)

  const [products] = useProducts()
  const monitor = products?.filter(item => item?.category === 'Monitor')
  const processor = products?.filter(item => item?.category === 'Processor')
  const motherboard = products?.filter(item => item?.category === 'Motherboard')
  // console.log(monitor)
  return (
    <div className='py-10'>
      <div>
        <h2 className="dark:text-gray-200 text-2xl font-semibold tracking-wide flex justify-center pb-10">Monitor</h2>
        <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {
            monitor?.slice(0, 10).map((product, i) => <ProductCard
              key={product?._id} product={product} />)
          }
        </div>
      </div>
      <div className='py-16'>
        <h2 className="text-2xl dark:text-gray-200 font-semibold tracking-wide flex justify-center pb-10">Processor</h2>
        <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {
            processor?.slice(0, 10).map((product, i) => <ProductCard
              key={product?._id} product={product} />)
          }
        </div>

      </div>
      <div>
         <h2 className="text-2xl dark:text-gray-200 font-semibold tracking-wide flex justify-center pb-10">Motherboard</h2>
           <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {
            motherboard?.slice(0, 10).map((product,i) => <ProductCard
              key={product?._id} product={product} />)
          }
        </div>
      </div>





    </div>
  )
}

export default HomeProducts

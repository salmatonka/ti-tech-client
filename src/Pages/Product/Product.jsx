import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

const Product = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState([]);
  // useEffect(() => {
  //   fetch('https://ti-server-git-main-salmatonkas-projects.vercel.app/products')
  //   // fetch('products.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data)
  //       // setLoading(false)
  //     })
  // }, [])
  // console.log(data)


  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(12)
  const pages = []
  const pTitle = useLocation()
  const navigate = useNavigate()

  const { data: products = [], refetch, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`https://ti-server-git-main-salmatonkas-projects.vercel.app/products`);
      const data = res.json()
      return data
    }
  })
  // console.log(products)

  const numOfPage = Math.ceil(products?.length / 12);
  for (let i = 0; i < numOfPage; i++) {
    pages?.push({ num: i + 1 })
  }
  refetch()
  if (isLoading) {
    return <p>loading</p>
  }



  return (
    <div className='px-4 pt-24'>
      {/* {products?.length} */}
      <h2 className="text-3xl font-semibold tracking-wide flex justify-center pt-4 pb-3">Featured Products</h2>
      <p className=" font-semibold tracking-wide flex justify-center  pb-12">Check & Get Your Desired Product!</p>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {
          pTitle?.pathname === '/' ?
            <>
              {
                products?.slice(0, 12).map(product => <ProductCard
                  key={product?._id} product={product} />)
              }
            </>
            :
            <>
              {
                products?.slice(firstPage, lastPage).map(product => <ProductCard
                  key={product?._id} product={product} />)
              }
            </>
        }
      </div>
      {/* ....... pagination start ......*/}
      <div className={`${pTitle?.pathname === '/' ? 'hidden' : 'flex justify-center py-5'}`}>
        <div className='flex gap-1'>
          {
            pages?.map(({ num }) => <button
              onClick={() => {
                setFirstPage(num * 12 - 12)
                setLastPage(12 * num)
              }}
              key={num}
              className={`${firstPage / 12 + 1 === num ? 'bg-black border-white':'bg-sky-500'} rounded-md border-2 border-sky-600 text-white py-2 px-4`}
            >{num}</button>)
          }
        </div>
      </div>
      {/* .......pagination end ..... */}
      {
        pTitle?.pathname === '/' &&
         <div className='flex justify-center w-full mt-10'>
          <button onClick={() => navigate('/products')} className=' hover:bg-[#3749bb] hover:text-white border text-[#3749bb] bg-[#d5d8ec]  font-semibold md:px-20 px-10 py-2 rounded-md'>View More</button>
        </div>
      }
    </div>
  );
};

export default Product;
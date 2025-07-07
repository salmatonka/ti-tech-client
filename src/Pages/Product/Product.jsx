import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Range } from 'react-range';
// import { FadeLoader } from "react-spinners";
import { IoMdSearch } from "react-icons/io";
import './Product.css';
import ProductCategory from '../ProductCategory/ProductCategory';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';


const Product = () => {


  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)

  const [sort, setSort] = useState('')




  // ..............search start.....................
  const [products, setProducts] = useState([])
  const [filterData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch('https://ti-server-585b.onrender.com/products')
      const resData = await reqData.json()
      // console.log(resData)
      setProducts(resData)
      setFilteredData(resData)
    }
    getUserData()
  }, [])

  const handleSearch = (e) => {
    const getSearch = e.target.value
    // console.log(getSearch)
    setQuery(getSearch)
    if (getSearch.length > 0) {
      // const getSearch = e.target.value
      const searchdata = products.filter((item) =>
        item.name.toLowerCase().includes(getSearch))
      setProducts(searchdata)
    } else {
      setProducts(filterData)
    }
    setQuery(getSearch)
  }
  // ..............search end.....................

  // ..............price start............. 

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [filterMinP, setFilterMinP] = useState(0);
  const [filterMaxP, setFilterMaxP] = useState(1500);

  const handleFilter = () => {
    const filteredProducts = products.filter(
      (product) => {
        return product.price >= filterMinP && product.price <= filterMaxP
      }
    );
    setProducts(filteredProducts)
  }

  useEffect(() => {
    handleFilter()
  }, [filterMinP, filterMaxP ])
  // ..............price end.............  



  const handleReset = () => {
    setFilterMinP(0)
    setFilterMaxP(1500)
    setProducts(products)
  }

// // ....... pagination  ......
    const [firstPage, setFirstPage] = useState(0);
    const [lastPage, setLastPage] = useState(8);
    const pages = [];
    const pTitle = useLocation();
    const navigate = useNavigate();

    const numOfPage = Math.ceil(products?.length / 8);
    for (let i = 0; i < numOfPage; i++) {
        pages?.push({ num: i + 1 })
    }
    // refetch()
    // if (isLoading) {
    //     return (
    //         <div className="flex justify-center">
    //             <BeatLoader />
    //         </div>
    //     )
    // }



  return (
    <div className='pt-14'>
      <div className="main-products">
        <div className="left-side">
          {/* price range end............ */}


          {/* page: price range start */}
          <div className="border rounded-md">
            <div className="text-md font-semibold pl-3 py-3 ">
              <h5 >Price Range</h5>
            </div>
            <hr />

            <div>
              <div className='lg:mx-4 sm:mx-auto'>
                <label className='block text-sm' htmlFor="">
                  min:{filterMinP}
                </label>
                <input className='w-full' type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filterMinP}
                  onChange={(e) => setFilterMinP(Number(e.target.value))}
                />
              </div>
              <div className='lg:mx-4 sm:mx-auto'>
                <label className='block text-sm' htmlFor="">
                  max: {filterMaxP}
                </label>
                <input className='w-full' type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filterMaxP}
                  onChange={(e) => setFilterMaxP(Number(e.target.value))}
                />
              </div>

            </div>






          </div>
          {/* ...........price range end............. */}

          {/* .........search bar start............ */}
          <form >
            <div className='mt-2 flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                value={query}
                onChange={(e) => handleSearch(e)}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />
             

            </div>
          </form>

          {/* .........search bar end............ */}

          {/* .........category filter start............ */}



          {/* .........category filter start............ */}

          {/* .........sort filter start............ */}

          <div className="my-2">
            <select
              onChange={e => {
                setSort(e.target.value)
                setCurrentPage(1)
              }}
              value={sort}
              name='sort'
              id='sort'
              className='w-full border p-4 rounded-md text-gray-700'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          {/* .........sort filter end............ */}

          <button
            onClick={handleReset}
            className='btn w-full border bg-info text-[#3749bb]'>
            Reset
          </button>
        </div>
        <div className="right-side">

          <div>
            <ProductCategory />
          </div>


          {/* {products?.length} */}
          <h2 className="text-2xl font-semibold tracking-wide flex justify-center pb-2">Featured Products</h2>
          <p className=" font-semibold tracking-wide flex justify-center  pb-12">Check & Get Your Desired Product!</p>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>

            {/* {
              products?.map(product => <ProductCard
                key={product?._id} product={product} />)
            } */}


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
           <div className={`${pTitle?.pathname === '/' ? 'hidden' : 'flex justify-center pt-12 pb-10'}`}>
                                <div className="flex gap-1">
                                    {
                                        pages?.map(({ num }) =>
                                            <button
                                                onClick={() => {
                                                    setFirstPage(num * 8 - 8)
                                                    setLastPage(8 * num)
                                                }}
                                                key={num}
                                                className={`${firstPage / 8 + 1 === num ?
                                                    'bg-orange '
                                                    :
                                                    'border border-yellow-600'} rounded-md border-2
                                                     border-orange text-black py-1 px-3`}
                                            >{num}</button>
                                        )
                                    }
                                </div>
                            </div>
          {/* .......pagination end ..... */}
          {
            pTitle?.pathname === '/' &&
            <div className='flex justify-center w-full mt-10'>
              <button onClick={() => navigate('/products')}
                className=' hover:bg-[#3749bb] hover:text-white border
                    text-[#3749bb] bg-[#d5d8ec]  font-semibold md:px-20
                         px-10 py-2 rounded-md'>
                View More
              </button>
            </div>
          }
        </div>
      </div>

    </div>
  );
};

export default Product;
import React from 'react'

const Shop = () => {

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState([]);
  // useEffect(() => {
  //   fetch('https://ti-server-585b.onrender.com/products')
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
      // const pages = []
      const pTitle = useLocation()
      // const navigate = useNavigate()
    
      // const { data: products = [], refetch, isLoading } = useQuery({
      //   queryKey: ["products"],
      //   queryFn: async () => {
      //     const res = await fetch(`https://ti-server-585b.onrender.com/products`);
      //     const data = res.json()
      //     return data
      //   }
      // })
      // console.log(products)
    
    //  const numOfPage = Math.ceil(products?.length / 12);
    //   for (let i = 0; i < numOfPage; i++) {
    //     pages?.push({ num: i + 1 })
    //   }
    //   refetch()
    //   if (isLoading) {
    //     return <p>loading</p>
    //   }
  return (
    <div>
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
                 <div className="pt-5 pb-4 mx-4">
                   <Range
                     label="Select your value"
                     step={step}
                     min={min}
                     max={max}
                     values={localValues}
                     onChange={(localValues) => setLocalValue(localValues)}
                     renderTrack={({ props, children }) => (
                       <div
                         {...props}
                         style={{
                           ...props.style,
                           height: "4px",
                           width: "100%",
                           color: "orange",
                           backgroundColor: "blue",
                           borderRadius: "4px",
                         }}
                       >
                         {children}
                       </div>
                     )}
                     renderThumb={({ props }) => (
                       <div
                         {...props}
                         key={props.key}
                         style={{
                           ...props.style,
                           height: "18px",
                           width: "18px",
                           backgroundColor: "#1D4C9E",
                           border: "2px solid white",
                           borderRadius: "50%",
                           boxShadow: "0px 2px 6px orange"
                         }}
                       />
                     )}
                   />
     
                   <div className="flex justify-between pt-2">
                     <span>-{localValues[0]}</span>
                     <span>+{localValues[1]}</span>
                   </div>
     
                 </div>
               </div>
               {/* ...........price range end............. */}
     
               {/* .........search bar start............ */}
               <form
                //  onSubmit={handleSearch}
               >
                 <div className='mt-2 flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                   <input
                     className='px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                     type='text'
                     onChange={e => setSearchText(e.target.value)}
                     value={searchText}
                     name='search'
                     placeholder='Enter Job Title'
                     aria-label='Enter Job Title'
                   />
                   <p className='px-1 md:px-2 pt-4 text-md font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                     <IoMdSearch />
                   </p>
     
                 </div>
               </form>
     
               {/* .........search bar end............ */}
     
               {/* .........category filter start............ */}
     
               <div className="my-2">
                 <select
                //    onChange={e => {
                //        setFilter(e.target.value)
                //        setCurrentPage(1)
                //    }}
                //    value={filter}
                   name='category'
                   id='category'
                   className='w-full border shadow-sm p-4 rounded-lg text-gray-700'
                 >
                   <option value=''>Filter By Category</option>
                   <option value='iphone'>iphone</option>
                   <option value='sumsang'>Sumsang</option>
                   <option value='Digital Marketing'>Digital Marketing</option>
                 </select>
               </div>
     
               {/* .........category filter start............ */}
     
               {/* .........sort filter start............ */}
     
               <div className="my-2">
                 <select
                //    onChange={e => {
                //        setSort(e.target.value)
                //        setCurrentPage(1)
                //    }}
                //    value={sort}
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
                //  onClick={handleReset}
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
                 } */}
               </div>
               {/* ....... pagination start ......*/}
               {/* <div className={`${pTitle?.pathname === '/' ? 'hidden' : 'flex justify-center py-5'}`}>
                 <div className='flex gap-1'>
                   {
                     pages?.map(({ num }) => <button
                       onClick={() => {
                         setFirstPage(num * 12 - 12)
                         setLastPage(12 * num)
                       }}
                       key={num}
                       className={`${firstPage / 12 + 1 === num ? 'bg-black border-white' : 'bg-sky-500'} rounded-md border-2 border-sky-600 text-white py-2 px-4`}
                     >{num}</button>)
                   }
                 </div>
               </div> */}
               {/* .......pagination end ..... */}
               {/* {
                 pTitle?.pathname === '/' &&
                 <div className='flex justify-center w-full mt-10'>
                   <button onClick={() => navigate('/products')}
                     className=' hover:bg-[#3749bb] hover:text-white border
                         text-[#3749bb] bg-[#d5d8ec]  font-semibold md:px-20
                              px-10 py-2 rounded-md'>
                     View More
                   </button>
                 </div>
               } */}
             </div>
           </div>
     
         </div>
    </div>
  )
}

export default Shop


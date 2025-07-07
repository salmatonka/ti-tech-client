import React, { useEffect, useState } from 'react'
import Price from './Price';
import Rating from './Rating';
import Category from './Category';

const Filter = () => {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch('https://ti-server-585b.onrender.com/products')
      const resData = await reqData.json()
      console.log(resData)
      setUserData(resData)
      setFilteredData(resData)
    }
    getUserData()
  }, [])

  const handleSearch = (e) => {
    const getSearch = e.target.value
    // console.log(getSearch)
    // setQuery(getSearch)
    if (getSearch.length > 0) {
      // const getSearch = e.target.value
      const searchdata = userData.filter((item) =>
        item.name.toLowerCase().includes(getSearch))
      setUserData(searchdata)
    } else {
      setUserData(filterData)
    }
    setQuery(getSearch)
  }
 
  // ..............price............. 

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [filterMinP, setFilterMinP] = useState(0);
  const [filterMaxP, setFilterMaxP] = useState(1500);

  const handleFilter = () => {
    const filteredProducts = userData.filter(
      (product) => {
        return product.price >= filterMinP && product.price <= filterMaxP
      }
    );
    setUserData(filteredProducts)
  }

  useEffect(() => {
    handleFilter()
  }, [filterMinP, filterMaxP])

  const handleReset = () => {
    setFilterMinP(0)
    setFilterMaxP(1500)
    setUserData(userData)
  }
  return (
    <div>

      <div className="py-15">
       <Category />
        </div>

        <div className='py-10'>
          <h2>Product Filter</h2>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => handleSearch(e)}
          />

          
          <h2>Prie Filter</h2>
          <button className='btn my-6' onClick={handleReset} >Reset</button>

          <div>
            <div className='w-1/2'>
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
            <div className='w-1/2'>
              <label className='block text-sm' htmlFor="">
                max:{filterMaxP}
              </label>
              <input className='w-full' type="range"
                min={minPrice}
                max={maxPrice}
                value={filterMaxP}
                onChange={(e) => setFilterMaxP(Number(e.target.value))}
              />
            </div>

          </div>




          {
            userData.length === 0 ? (
              <div>
                <p>Not Data Found</p>
              </div>
            ) : (
              userData.map((getUser, i) => (
                <div>
                  <h1>{getUser.name}</h1>
                  <h1>{getUser.price}</h1>
                </div>
              ))
            )
          }

        </div>

        {/* price  */}














        <div>
          <Price />
        </div>
      </div>
      );
};

      export default Filter

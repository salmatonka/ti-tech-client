import React from 'react'
import ProductLeftSide from '../../Others/ProductLeftSide/ProductLeftSide'
import lapLogo from '../../assets/offerPage/laptop.png'
import tvLogo from '../../assets/offerPage/tv.png'
import acLogo from '../../assets/offerPage/ac.png'
import routerLogo from '../../assets/offerPage/router-bundle.png'
import pantumLogo from '../../assets/offerPage/pantum-printer-offer.png'
import megaLogo from '../../assets/offerPage/mega-tuesday-offe.png'
import { Link } from 'react-router-dom'
const Offers = () => {

  return (
    <div className='pt-12 pb-20'>
      <div className="comming dark:text-gray-200 flex justify-center items-center text-xl pb-3 font-serif">
        <h1 className='pb-5'>
          Comming Soon Update......
        </h1>
      </div>
      {/* <ProductLeftSide /> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <div className="dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md  card bg-gray-200 w-96 mx-auto shadow-lg">
          <figure className="p-4">
            <img
              src={tvLogo}
              alt="tv"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TV Deal</h2>
            <div className="flex">
              <p>18 Jun 2025-20 Jul 2025</p>
              <p>Outlet</p>
            </div>
            <p> Buy Smart TV & Get Exciting Discount!</p>
            <Link to='/offerDetails'>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md  card bg-gray-200 w-96 mx-auto shadow-lg">
          <figure className="p-4">
            <img
              src={lapLogo}
              alt="tv"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TV Deal</h2>
            <div className="flex">
              <p>18 Jun 2025-20 Jul 2025</p>
              <p>Outlet</p>
            </div>
            <p> Buy Smart TV & Get Exciting Discount!</p>
            <Link to='/offerDetails'>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md  card bg-gray-200 w-96 mx-auto shadow-lg">
          <figure className="p-4">
            <img
              src={acLogo}
              alt="tv"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TV Deal</h2>
            <div className="flex">
              <p>18 Jun 2025-20 Jul 2025</p>
              <p>Outlet</p>
            </div>
            <p> Buy Smart TV & Get Exciting Discount!</p>
            <Link to='/offerDetails'>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md  card bg-gray-200 w-96 mx-auto shadow-lg">
          <figure className="p-4">
            <img
              src={routerLogo}
              alt="tv"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TV Deal</h2>
            <div className="flex">
              <p>18 Jun 2025-20 Jul 2025</p>
              <p>Outlet</p>
            </div>
            <p> Buy Smart TV & Get Exciting Discount!</p>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div className="dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md  card bg-gray-200 w-96 mx-auto shadow-lg">
          <figure className="p-4">
            <img
              src={megaLogo}
              alt="tv"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TV Deal</h2>
            <div className="flex">
              <p>18 Jun 2025-20 Jul 2025</p>
              <p>Outlet</p>
            </div>
            <p> Buy Smart TV & Get Exciting Discount!</p>
            <Link to='/offerDetails'>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md  card bg-gray-200 w-96 mx-auto shadow-lg">
          <figure className="p-4">
            <img
              src={pantumLogo}
              alt="tv"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TV Deal</h2>
            <div className="flex">
              <p>18 Jun 2025-20 Jul 2025</p>
              <p>Outlet</p>
            </div>
            <p> Buy Smart TV & Get Exciting Discount!</p>
            <Link to='/offerDetails'>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Offers

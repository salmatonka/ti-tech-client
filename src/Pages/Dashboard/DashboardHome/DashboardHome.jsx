import React, { useContext } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import './DashboardHome.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import useCart from '../../../hooks/useCart';
const DashboardHome = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate();
  const [cart] = useCart()
  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);
  const handleLogout = () => {
    logout()
      .then(toast.warning('user logOut...!'))
      .catch(error => toast.error(`${error.message}`))
    navigate('/')
  };
  // console.log(user)
  return (
    <div className='bg-dashInfo shadow-md h-full p-4'>
      <div className="dashNav py-3">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">TI Tech</a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                  <span className="badge badge-sm indicator-item">{cart?.length}</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                <div className="card-body">
                  <span className="text-lg font-bold">Items: {cart?.length}</span>
                  <span className="">Subtotal: {cart?.totalPrice}</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="mr-4 btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <Link to='/dashboard/userProfile'>Profile</Link>
                </li>
                <li>
                  <Link to='/teams'>Teams</Link>
                </li>

                <li>
                  <button onClick={handleLogout} aria-label="LogOut" title="LogOut"> LogOut</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className='bg-white shadow-md  p-4 px-8'>
        <div className='flex items-center gap-4 py-8'>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div>
            <h4>{user?.displayName}</h4>
          </div>
        </div>
        <hr />

        <div className='py-5'>
          <h6 className='text-lg font-bold'>Basic Info</h6>
        </div>

        <div>
          <div className='grid-main-container '>
            <div className='left-side1'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>Email </h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-4'>Date of Bith </h6>
                  </div>

                </div>
                <div className='right-side1'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>{user?.email}</h6>
                  </div>
                  <div className='border-gray-300 '>
                    <h6 className='pl-4'>11/01/2011</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='left-side2'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>Phone</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-4'>Gender</h6>
                  </div>

                </div>
                <div className='right-side1'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>+88 01911111111</h6>
                  </div>
                  <div className='border-gray-300 '>
                    <h6 className='pl-4'>gender</h6>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* address  */}

        <div className='address-container'>
          <div className='py-5'>
            <h6 className='text-lg font-bold'>Adress</h6>
          </div>
          <div className='grid-main-container '>
            <div className='left-side1'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>Street</h6>
                  </div>
                  <div className='border-gray-300 '>
                    <h6 className='pl-4'>State</h6>
                  </div>

                </div>
                <div className='right-side1'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>Dhaka,Bangladesh</h6>
                  </div>
                  <div className='border-gray-300 '>
                    <h6 className='pl-4 py-2'>Dhaka</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='left-side2'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>City</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-4'>Country</h6>
                  </div>

                </div>
                <div className='right-side1'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-4'>Narayanganj</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-4'>Bangladesh</h6>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

{/* address  */}


      </div>
    </div>
  )
}

export default DashboardHome

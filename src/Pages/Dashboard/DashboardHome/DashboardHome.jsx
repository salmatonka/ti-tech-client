import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import './DashboardHome.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import useCart from '../../../hooks/useCart';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import DashboardNav from './DashboardNav';

const DashboardHome = () => {
   const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useContext(AuthContext)
  // const navigate = useNavigate();
  
  // const handleLogout = () => {
  //   logout()
  //     .then(toast.warning('user logOut...!'))
  //     .catch(error => toast.error(`${error.message}`))
  //   navigate('/')
  // };
  // // console.log(user)
  return (
    <div >
    


      <div className=' dark:bg-[#0F172A] dark:text-white bg-primary shadow-sm p-4 lg:m-4 lg:px-8 px-2'>
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
        {/* info  */}
        <div>
          <div className='grid-main-container '>
            <div className='left-side'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r dark:bg-[#0F172A] '>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2'>Email </h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-2'>Bithday </h6>
                  </div>

                </div>
                <div className='right-side'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2 '>{user?.email}</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-2'>11/01/2011</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='left-side'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r dark:bg-[#0F172A]'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2'>Phone</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-2'>Gender</h6>
                  </div>

                </div>
                <div className='right-side'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2'>+88 01911111111</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-2'>gender</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* address  */}

        <div className='address-container'>
          <div className='py-5'>
            <h6 className='text-lg font-bold'>Address</h6>
          </div>
          <div className='grid-main-container '>
            <div className='left-side'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r dark:bg-[#0F172A]'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2'>Street</h6>
                  </div>
                  <div className='border-gray-300 '>
                    <h6 className='pl-2'>State</h6>
                  </div>

                </div>
                <div className='right-side'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2'>Dhaka,Bangladesh</h6>
                  </div>
                  <div className='border-gray-300 '>
                    <h6 className='pl-2 py-2'>Dhaka</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='left-side'>
              <div className='grid-left border border-r'>
                <div className='bg-dashInfo border-r dark:bg-[#0F172A]'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2'>City</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-2'>Country</h6>
                  </div>

                </div>
                <div className='right-side'>
                  <div className=' border-gray-300 border-b py-2'>
                    <h6 className='pl-2'>Narayanganj</h6>
                  </div>
                  <div className='border-gray-300 py-2'>
                    <h6 className='pl-2'>Bangladesh</h6>
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

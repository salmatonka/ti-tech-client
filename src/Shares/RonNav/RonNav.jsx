import React, { useContext } from 'react'
import './RonNav.css';
import { FaHome, FaBloggerB, FaShoppingCart } from "react-icons/fa";
import { HiOutlineBars4 } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';
import CartDrawer from '../CartDrawer/CartDrawer';
import NavDrawerCart from '../../Others/NavDrawerCart/NavDrawerCart';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify'
const RonNav = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(toast.warning('user logOut...!'))
      .catch(error => toast.error(error.message))
      navigate('/')
  };
  
  const { data: currentUser = {} } = useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const res = await fetch(
        `https://ti-server-585b.onrender.com/users/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const [cart] = useCart()

  return (
    <div className='sticky top-0 z-50'>
      <div className="nav  bg-primary text-black shadow-sm">
        <Link to="/" className="logo flex justify-between items-center">
          <img src={logo} alt="img" className='h-10 w-10 ' />
          TI Tech
        </Link>
        {/* <div className="logo "></div> */}
        <label htmlFor="btn" className='icon'>
          <HiOutlineBars4 />
        </label>
        <input type="checkbox" name="" id="btn" />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/offers" aria-label="offers" title="offers">Offers</Link></li>
          <li><Link to="/teams" aria-label="teams" title="teams">Teams</Link></li>
          <li><Link to="/aboutUs" aria-label="aboutUs" title="aboutUs">AboutUs</Link></li>
          {/* <li><Link to="/contactUs" aria-label="ContactUs" title="ContactUs">ContactUs</Link></li> */}
          {/* <li><Link to="/logIn" aria-label="LogIn" title="LogIn">LogIn</Link></li> */}


          <li>
            <div className="indicator">
              <span className="indicator-item mt-5 pl-2">+{cart?.length}</span>
              <button className="mt-6"><CartDrawer /></button>
            </div>
          </li>

          {/* <li><Link >
            <div className="indicator">
              <span className="indicator-item mt-5 pl-1">+{cart?.length}</span>
              <button className=""><CartDrawer /></button>
            </div>
          </Link></li> */}


          {
            user?.uid ? (<>
              <li>
                <Link to="/dashboard" aria-label="Dashboard" title="Dashboard">Dashboard</Link>
              </li>
              <li>
                <button className='pt-6' onClick={handleLogout} aria-label="LogOut" title="LogOut"> LogOut</button>
              </li>
            </>) : (<>
              <li><Link to="/logIn" aria-label="LogIn" title="LogIn">LogIn</Link></li>
            </>)
          }

        </ul>
      </div>
    </div>
  )
}

export default RonNav

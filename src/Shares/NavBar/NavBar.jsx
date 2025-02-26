import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo2.jpg'

import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
const NavBar = () => {

    const navOptions = <>
        <li><Link to='/' ><FaHome />Home</Link></li>
        <li><Link to='/shop'><FaComputer /> Shop</Link></li>
        <li><Link to='/aboutUs'><IoMdContacts />About Us</Link></li>
        {/* <li><Link to='/'><BsPcDisplayHorizontal />Pc Builder</Link></li> */}
        <li><Link to='/cart'><HiOutlineShoppingCart />Cart</Link></li>
    </>

    return (
        <div
            style={{
                backgroundColor: '#8f8f8f38',
                backdropFilter: 'blur(10px)',
                zIndex: '100'
            }}
            className="navbar fixed z-10 lg:w-[1280px]  bg-white">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  w-52 p-2 shadow">
                        {navOptions}

                        <div className="relative ">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="input input-bordered w-32 py-2 pl-10 text-sm rounded-md  focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                </div>

                    </ul>
                </div>

                <img className='w-10 h-8' src={logo} alt="" />
                <a className="pl-3 text-2xl font-semibold"> TI Tech</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navOptions}
                    <div>
                <div className="relative ">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="input input-bordered w-32 py-2 pl-10 text-sm rounded-md sm:w-auto  focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                </div>

            </div>

                </ul>
            </div>


            

        </div>
    );
};

export default NavBar;
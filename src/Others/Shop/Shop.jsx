import React, { useState } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom';
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { GoTriangleRight } from "react-icons/go";
const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageLoad, setisPageLoad] = useState(false);
  return (
    <nav>
      <div className='text-center bg-slate-400'></div>
      <div className='mx-auto w-11/12 py-5 flex justify-between items-center relative'>
        <Link to="/" className="logo lg:hidden">
          <span className="text-xl font-bold text-stone-700">
            Leanardo 🎨 Vinci
          </span>
        </Link>

        {/* menu-lg start */}
        <ul className='hidden lg:flex items-center gap-5'>
          <li><a href="">home</a></li>
          <li><a href="">Networking +</a>
            <ul>
              <li className=''><a className='' href="">Router <GoTriangleRight /></a>
                <ul>
                  <li><a href="">TP Link</a></li>
                  <li><a href="">Netis</a></li>
                  <li><a href="">Mikrotik</a></li>
                  <li><a href="">NETGEAR</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        {/* menu-sm start */}
        <div className='lg:hidden'>
          {
            !isMenuOpen ? (
              <RiMenuAddLine
                className='text-2xl cursor-pointer'
                onClick={() => {
                  setIsMenuOpen(true),
                    setisPageLoad(true);
                }} />
            ) : (
              <CgMenuMotion
                className='text-2xl cursor-pointer'
                onClick={() => { setIsMenuOpen(false) }} />
            )
          }
          <ul
            className={`flex animate__animated bg-white flex-col lg:hidden gap-5 absolute z-50 bg-opacity-70 w-full top-14  left-0
                 ${isMenuOpen
                ? "animate__fadeInRight "
                : isPageLoad
                  ? "animate__fadeOutRight flex "
                  : "hidden"
              } `}
          >
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li><a href="">Networking +</a>
            <ul>
              <li className=''><a className='' href="">Router <GoTriangleRight /></a>
                <ul>
                  <li><a href="">TP Link</a></li>
                  <li><a href="">Netis</a></li>
                  <li><a href="">Mikrotik</a></li>
                  <li><a href="">NETGEAR</a></li>
                </ul>
              </li>
            </ul>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Shop

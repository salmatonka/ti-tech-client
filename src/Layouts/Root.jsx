import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer/Footer';
import TopBar from '../Shares/TopBar/TopBar';
import RonNav from '../Shares/RonNav/RonNav';
import MenuSection from '../Shares/MenuSection/MenuSection';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A] h-screen`}>
      <div>
        <div >
          <TopBar />
        </div>
        <RonNav setDarkMode={setDarkMode} darkMode={darkMode} />
        {/* <MenuSection /> */}
        <div className='dark:w-full dark:bg-[#0F172A]'>
          <div className='max-w-screen-xl lg:mx-auto px-4 dark:w-full dark:bg-[#0F172A]'>
            <Outlet />
          </div>
        <Footer />
        </div>
      </div>
    </div>



    //     {/* <main className="overflow-x-clip">
    //       <Outlet />
    //     </main> */}
    //     {/* <div className='max-w-screen-xl mx-auto'>
    //       <Outlet />
    //     </div> */}

  )
}

export default Root;
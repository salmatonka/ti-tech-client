import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer/Footer';
import TopBar from '../Shares/TopBar/TopBar';
import RonNav from '../Shares/RonNav/RonNav';
import MenuSection from '../Shares/MenuSection/MenuSection';

const Root = () => {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <RonNav />
      <MenuSection />
      <div className='max-w-screen-xl lg:mx-auto px-4'>
        <Outlet />
      </div>
      <Footer />
    </div>

    //   <div>
    //     {/* <TopBar /> */}
    //     {/* <TryDropDown /> */}
    //     {/* <HeaderDropDown /> */}
    //     {/* <AnimationDrop /> */}
    //     {/* <DropDownMenu /> */}
    //     {/* <NavBar /> */}
    //     {/* <Header /> */}
    //     {/* <HeaderSection /> */}
    //     {/* <MenuSection /> */}

    //     {/* <main className="overflow-x-clip">
    //       <Outlet />
    //     </main> */}
    //     {/* <div className='max-w-screen-xl mx-auto'>
    //       <Outlet />
    //     </div> */}
    //     {/* <Outlet /> */}
    //     {/* <Footer /> */}
    // </div>
  )
}

export default Root;
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shares/NavBar/NavBar';
import Footer from '../Shares/Footer/Footer';
import Header from '../Others/Header/Header';
import HeaderSection from '../Others/HeaderSection/HeaderSection';
import MenuSection from '../Others/MenuSection/MenuSection';
import DropDownMenu from '../Others/DropDownMenu/DropDownMenu';
import Shop from '../Others/Shop/Shop';
import AnimationDrop from '../Others/AnimationDrop/AnimationDrop';

const Root = () => {
  return (
    <div>
      <AnimationDrop />
      {/* <DropDownMenu /> */}
      {/* <NavBar /> */}
      {/* <Header /> */}
      {/* <Shop /> */}
      {/* <HeaderSection /> */}
      {/* <MenuSection /> */}

      {/* <main className="overflow-x-clip">
        <Outlet />
      </main> */}
      {/* <div className='max-w-screen-xl mx-auto'>
        <Outlet />
      </div> */}
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
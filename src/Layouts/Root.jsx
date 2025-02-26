import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shares/NavBar/NavBar';
import Footer from '../Shares/Footer/Footer';

const Root = () => {
    return (
        <div>
          <NavBar />
          <Outlet />
          <Footer />  
        </div>
    );
};

export default Root;
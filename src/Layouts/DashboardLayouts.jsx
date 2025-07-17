import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaBoxOpen, FaHome, FaMoneyCheckAlt, FaSearchLocation, FaUniversalAccess, FaUserEdit } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import DashboardNav from '../Pages/Dashboard/DashboardHome/DashboardNav';
const DashboardLayouts = () => {
 const [darkMode, setDarkMode] = useState(false);
    
const { user, logout } = useContext(AuthContext)
const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(toast.warning('user logOut...!'))
            .catch(error => toast.error(`${error.message}`))
        navigate("/")
    };
    // 
    const { data: currentUser = [], isLoading } = useQuery({
        queryKey: ["user", user],
        queryFn: async () => {
            const res = await fetch(
                `https://ti-server-585b.onrender.com/users/${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <p>loooooooooo</p>;
    }


    return (
        <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A]  drawer lg:drawer-open`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                  <DashboardNav setDarkMode={setDarkMode} darkMode={darkMode} />
                <div className="navbarw-full lg:hidden">
                        {/* <div className="mx-2 flex justify-end items-center px-2 lg:hidden">Dashboard</div> */}
                   {/* togggle  */}

                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div 
            className={`${darkMode ? "dark" : ""} bg-primary dark:bg-[#0F172A] dark:text-white  drawer-side`}>
        
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu border-r-2 dark:text-white shadow-lg text-base-content min-h-full w-72 p-4">
                    {/* Sidebar content here */}

                    <li>
                        <h2 className="dark:text-white text-xl border-b-2 font-semibold mb-4">TI Tech</h2>
                    </li>


                    {currentUser.role === "admin" ? (
                        <>
                         <li>
                                {" "}
                                <Link to="/dashboard/adminHome">Admin Home</Link>{" "}
                            </li>
                            <li>
                                {" "}
                                <Link to="/">Back Home</Link>{" "}
                            </li>
                           
                            <li>
                                {" "}
                                <Link to="/dashboard/allBuyers">All Buyers</Link>{" "}
                            </li>
                            <li>
                                {" "}
                                <Link to="/dashboard/allSellers">All Sellers</Link>{" "}
                            </li>
                            <li>
                                {" "}
                                <Link to="/dashboard/allUsers">All Users</Link>{" "}
                            </li>
                            <li>
                                {" "}
                                <button onClick={handleLogout} aria-label="Logout"
                                    title="Logout">Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            {currentUser.role === "seller" ? (
                                <>
                                    <li>
                                        {" "}
                                        <Link to="/">Back Home</Link>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="/dashboard/userProfile">Profile</Link>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="/dashboard/addProduct">Add Product</Link>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="/dashboard/myProduct">My Products</Link>{" "}
                                    </li>
                                    {/* <li>
                                        {" "}
                                        <Link to="/dashboard/editProduct">Edit Product</Link>{" "}
                                    </li> */}
                                    <li>
                                        {" "}
                                        <button onClick={handleLogout} aria-label="Logout"
                                            title="Logout">Logout</button>
                                    </li>
                                </>
                            ) :
                                (

                                    <>
                                        <li>
                                            {" "}
                                            <Link to="/">Back Home</Link>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to="/dashboard/userProfile">Profile</Link>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to="/dashboard/myOrder">My Orders</Link>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to="/dashboard/myWishlist">My Wishlist</Link>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <button onClick={handleLogout} aria-label="Logout"
                                                title="Logout">Logout</button>
                                        </li>
                                    </>
                                )}
                        </>

                    )}


                </ul>
            </div>
        </div >
    )
}

export default DashboardLayouts

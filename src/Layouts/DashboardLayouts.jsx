import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaBoxOpen, FaHome, FaMoneyCheckAlt, FaSearchLocation, FaUniversalAccess, FaUserEdit } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const DashboardLayouts = () => {

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(toast.warning('user logOut...!'))
            .catch(error => toast.error(`${error.message}`))
        navigate("/")
    };
    // console.log(user)

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
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>

                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu border-r-2 shadow-md text-base-content min-h-full w-72 p-4">
                    {/* Sidebar content here */}

                    <li>
                        <h2 className="text-xl border-b-2 font-semibold mb-4">TI Tech</h2>
                    </li>


                    {currentUser.role === "admin" ? (
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
                                    <li>
                                        {" "}
                                        <Link to="/dashboard/editProduct">Edit Product</Link>{" "}
                                    </li>
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

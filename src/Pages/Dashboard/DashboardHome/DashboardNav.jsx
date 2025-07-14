import React, { useContext } from 'react'
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DashboardNav = ({ setDarkMode, darkMode }) => {

    const { user, logout } = useContext(AuthContext)
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(toast.warning('user logOut...!'))
            .catch(error => toast.error(`${error.message}`))
        navigate("/")
    };
    // console.log(user)
    return (
       <div className="navbar py-2 dark:bg-[#120505] dark:text-white bg-info text-gray-600 shadow-md">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">TI Tech</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">{cart?.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className=" dark:bg-[#120505] dark:text-white card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body ">
                                <span className="text-lg font-bold">Items: {cart?.length}</span>
                                <span className="">Subtotal: {cart?.totalPrice}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="mr-4 btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL} />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="dark:bg-[#120505] dark:text-white text-gray-600 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to='/dashboard/userProfile'>Profile</Link>
                            </li>
                            <li>
                                <Link to='/teams'>Teams</Link>
                            </li>

                            <li>
                                <button onClick={handleLogout} aria-label="LogOut" title="LogOut"> LogOut</button>
                            </li>
                        </ul>
                    </div>


                    <div className="relative md:border-l flex items-center  justify-end w-full md:w-auto pl-5 ">
                        <div className=" w-[50px]">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="   flex items-center justify-center"
                            >
                                <p className=''> {darkMode ? <MdLightMode /> : <MdDarkMode />}</p>

                                {/* <img
                    className="md:w-full   w-10 object-cover"
                    src={darkMode ? lightimg : darkimg}
                    alt=""
                  /> */}
                            </button>
                        </div>
                    </div>


                    <div className="flex-none lg:hidden">
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


                </div>
            </div>
    )
}

export default DashboardNav

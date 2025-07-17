import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import CategoryCard from "../Pages/Category/CategoryCard";
import About from "../Pages/HomePages/About/About";
import Product from "../Pages/Product/Product";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import LogIn from "../Pages/Forms/LogIn";
import Register from "../Pages/Forms/Register";
import Filter from "../Others/Fiter/Filter";
import Offers from "../Pages/Offers/Offers";
import Carts from "../Pages/Carts/Carts";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import MyOrder from "../Pages/Dashboard/MyOrders/MyOrder";
import AllBuyers from "../Pages/Dashboard/Users/AllBuyers";
import AllSellers from "../Pages/Dashboard/Users/AllSellers";
import AllUser from "../Pages/Dashboard/Users/AllUser";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import Blog from "../Pages/Blog/Blog";
import Teams from "../Pages/Teams/Teams";
import EditProduct from "../Pages/Dashboard/EditProduct/EditProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/teams',
                element: <Teams />
            },
            {
                path: '/aboutUs',
                element: <About />
            },
            {
                path: '/offers',
                element: <Offers />
            },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: '/products/:category',
                loader: ({ params }) => fetch(`https://ti-server-585b.onrender.com/products/${params?.category}`),
                element: <CategoryCard />
            },
            {
                path: '/product/:id',
                loader: ({ params }) => fetch(`https://ti-server-585b.onrender.com/product/${params?.id}`),
                element: <ProductDetails />
            },
            {
                path: '/filter',
                element: <Filter />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/carts',
                element: <Carts />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayouts />
        </PrivateRoute>,
        children: [
            //normal users
            {
                path: 'userHome',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/userProfile',
                element: <UserProfile />
            },
            {
                path: '/dashboard/editProduct/:id',
                loader: async ({ params }) => await fetch(`https://ti-server-585b.onrender.com/myProduct/${params.id}`),
                element: <SellerRoute>
                    <EditProduct />
                </SellerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute>
                    <AddProduct />
                </SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute>
                    <MyProduct />
                </SellerRoute>
            },
            {
                path: "/dashboard/myOrder",
                element: <MyOrder />
            },
            {
                path: "/dashboard/myWishlist",
                element: <MyWishlist />
            },
            {
                path: "/dashboard/profile",
                element: <UserProfile />
            },
            {
                path: "/dashboard/adminHome",
                element: <UserProfile />
            },

            {
                path: '/dashboard/allSellers',
                element: <AdminRoute>
                    <AllSellers />
                </AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute>
                    <AllBuyers />
                </AdminRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute>
                    <AllUser />
                </AdminRoute>
            },
        ]
    },
])
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import CategoryCard from "../Pages/Category/CategoryCard";
import ProductDetails from "../Pages/Product/ProductDetails";
import About from "../Pages/HomePages/About/About";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/aboutUs',
                element: <About />
            },
            // {
            //     path: '/cart',
            //     element: <Car />
            // },
            {
                path: '/products/:category',
                loader: ({params}) =>fetch(`http://localhost:5000/products/${params.category}`),
                element: <CategoryCard />
            },
            {
                path: '/singleProduct/:id',
                loader: ({params}) =>fetch(`http://localhost:5000/singleProduct/${params?.id}`),
                element: <ProductDetails />
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import CategoryCard from "../Pages/Category/CategoryCard";
import ProductDetails from "../Pages/Product/ProductDetails";
import About from "../Pages/HomePages/About/About";
import ProductBrand from "../Shares/ProductBrand/ProductBrand";
import Product from "../Pages/Product/Product";
import Shop from "../Others/Shop/Shop";

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
                 loader: () =>fetch(`products.json`),
                element: <Shop/>
            },
            {
                path: '/aboutUs',
                element: <About />
            },
            // {
            //     path: '/productBrand ',
            //     element: <ProductBrand />
            // },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: '/products/:category',
                loader: ({params}) =>fetch(`https://ti-server-git-main-salmatonkas-projects.vercel.app/products/${params?.category}`),
                element: <CategoryCard />
            },
            {
                path: '/product/:id',
                loader: ({params}) =>fetch(`https://ti-server-git-main-salmatonkas-projects.vercel.app/product/${params?.id}`),
                element: <ProductDetails />
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUS/AboutUs";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Footer from "../Pages/Footer/Footer";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import CategoriesDetails from "../Pages/Products/ProductsCard/CategoriesDetails";
import ProductsCard from "../Pages/Products/ProductsCard/CategoriesDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }, 
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/footer',
                element:<Footer></Footer>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/categoriesdetails/:id',
                element:<CategoriesDetails></CategoriesDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allbuyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addproducts',
                element:<AddProducts></AddProducts>
            },
            {
                path: '/dashboard/allsellers',
                element:<AllSellers></AllSellers>
            },
            {
                path: '/dashboard/myorders',
                element:<MyOrders></MyOrders>
            }
        ]
    }

])
export default router;
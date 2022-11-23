import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUS/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Footer from "../Pages/Footer/Footer";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


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
            }
        ]
    }

])
export default router;
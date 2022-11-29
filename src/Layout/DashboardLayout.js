import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Footer from '../Pages/Footer/Footer';
import NavBar from '../Pages/NavBar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            !isAdmin && !isSeller &&<>
                            
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            
                            </>
                        }
                        { isAdmin
                             &&
                            <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li><Link to="/dashboard/addproducts">Add Products</Link></li>


                            </>
                        }
                        {
                            isSeller && 
                            <>
                            <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                            <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                         
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
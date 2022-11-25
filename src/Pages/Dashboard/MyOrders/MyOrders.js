import React from 'react';
import './MyOrders.css';

const MyOrders = () => {
    return (
        <div className="overflow-x-auto w-full">
            <h2 className='text-3xl text-color font-bold mt-3'>My Orders</h2>
            <table className="table w-full mt-5">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>i</td>
                        <td>
                            <div className="">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>Purple</td>
                        <td>
                            $30
                        </td>
                        <td>
                            <button className='btn btn-sm'>Pay</button>
                        </td>

                    </tr>
                  
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;
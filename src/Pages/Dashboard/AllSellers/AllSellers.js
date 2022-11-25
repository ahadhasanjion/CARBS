import React from 'react';
import './AllSellers.css'

const AllSellers = () => {
    return (
        <div className="overflow-x-auto w-full">
            <h2 className='text-color text-3xl font-bold mt-5'>All Sellers</h2>
            <table className="table w-full mt-4">
                <thead>
                    <tr>
                    
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete Seller</th>
                        <th>Verify Seller</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                          <p>NIALL</p>
                        </th>
                        <td>
                          <p>ajhhi@.com</p>
                        </td>
                        <td>
                          <button className='btn btn-sm'>Delete</button>
                        </td>
                        <td>
                            <button className='btn btn-sm'>Verify</button>
                        </td>
                       
                    </tr>
                </tbody>
             
            </table>
        </div>
    );
};

export default AllSellers;
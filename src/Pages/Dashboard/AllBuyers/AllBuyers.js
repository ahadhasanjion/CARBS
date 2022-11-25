import React from 'react';
import './AllBuyers.css'

const AllBuyers = () => {
    return (
        <div className="overflow-x-auto w-full">
            <h2 className='text-color text-3xl font-bold mt-5'>All Sellers</h2>
            <table className="table w-full mt-4">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete Buyer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>i</th>
                        <th>
                          <p>NIALL</p>
                        </th>
                        <td>
                          <p>ajhhi@.com</p>
                        </td>
                        <td>
                          <button className='btn btn-sm'>Delete</button>
                        </td>
                       
                       
                    </tr>
                </tbody>
             
            </table>
        </div>
    );
};

export default AllBuyers;
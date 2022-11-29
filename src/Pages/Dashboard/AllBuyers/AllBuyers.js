import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './AllBuyers.css'

const AllBuyers = () => {
    const {data: buyers = []} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch(`https://carbs-server.vercel.app/users/buyer`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className="overflow-x-auto w-full">
            <h2 className='text-color text-3xl font-bold mt-5'>All Buyers</h2>
            <table className="table w-full mt-4">
                <thead>
                    <tr>
                        <td></td>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         
                         buyers.map((buyer, i) =><tr key={buyer._id}>
                                <th>{i+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                              </tr>)
                          
                    }
                </tbody>
             
            </table>
        </div>
    );
};

export default AllBuyers;
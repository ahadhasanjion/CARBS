import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './AllSellers.css'
import toast from 'react-hot-toast';


const AllSellers = () => {
    const { data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller/seller');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/users/seller/${seller._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('deleted successfully')
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full">
            <h2 className='text-color text-3xl font-bold mt-5'>All Sellers</h2>
            <table className="table w-full mt-4">
                <thead>
                    <tr>
                        <td></td>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete Seller</th>
                        <th>Verify Seller</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        sellers.map((seller, i) => <tr key={seller._id}>
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>
                                <button onClick={() => handleDeleteSeller(seller)} className="btn btn-xs">Delete</button>
                            </td>
                            <td><button className='btn btn-xs btn-danger'>Verify</button></td>
                        </tr>)

                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllSellers;
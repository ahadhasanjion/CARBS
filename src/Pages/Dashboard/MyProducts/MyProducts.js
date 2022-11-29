import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://carbs-server.vercel.app/products/myproducts?email=${user?.email}`;
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    const handleAdvertise = id => {
        fetch(`https://carbs-server.vercel.app/products/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertised Successfully');
                    refetch();
                }
            })
    };
    const handleDeleteProduct = product => {
        fetch(`https://carbs-server.vercel.app/product/${product._id}`, {
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
    console.log(products);
    return (
        <div>
            <h2 className="text-3xl">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.resalePrice}</td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(product)} className="btn btn-xs">Delete</button>
                                </td>
                                <td><button onClick={() => handleAdvertise(product._id)} className='btn btn-xs btn-danger'>Advertise</button></td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
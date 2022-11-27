import React, { useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/products/myproducts?email=${user?.email}`;
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch (url)
            const data = await res.json();
            return data;
        }
    })
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
        <th>Advertize</th>
      </tr>
    </thead>
    <tbody>
      {
       products && products?.map((product, i) =><tr key={product._id}>
       <th>{i+1}</th>
       <td>{product.resalePrice}</td>
       <td><button className='btn btn-xs btn-primary'>Delete</button></td>
       <td><button className='btn btn-xs btn-danger'>Advertize</button></td>
     </tr>
     ) }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;
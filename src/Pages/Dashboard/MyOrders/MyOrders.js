import React, { useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/products/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch (url)
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings);
    return (
        <div>
            <h2 className="text-3xl">My Products</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Price</th>
        <th>Delete</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
      {
       bookings && bookings?.map((booking, i) =><tr key={booking._id}>
       <th>{i+1}</th>
       <td>{booking.title}</td>
       <td>{booking.price}</td>
       <td><button className='btn btn-xs btn-primary'>Delete</button></td>
       <td><button className='btn btn-xs btn-danger'>Pay</button></td>
     </tr>
     ) }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
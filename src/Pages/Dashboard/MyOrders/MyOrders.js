import React, { useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const {user} = useContext(AuthContext)

    const url = `https://carbs-server.vercel.app/products/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch (url, {
              authorization: `bearer ${localStorage.getItem('accessToken')}`

            })
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings);
    return (
        <div>
            <h2 className="text-3xl">My Orders</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
      {
       bookings && bookings?.map((booking, i) =><tr key={booking._id}>
       <th>{i+1}</th>
       <th> <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="booking.photo" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </th>
       <td>{booking.title}</td>
       <td>{booking.price}</td>
       <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
     </tr>
     ) }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
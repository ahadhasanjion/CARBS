// import React from 'react';
// import CheckOut from './CheckOut';
// import { Elements } from '@stripe/react-stripe-js';
// import { useLoaderData, useNavigation } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';

// const Payment = () => {
//     const booking = useLoaderData();
//     const { treatment, price, appointmentDate, slot } = booking;
//     return (
//         <div>
//             <h3 className="text-3xl">Payment for {treatment}</h3>
//             <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
//             <div className='w-96 my-12'>
//                 <Elements stripe={stripePromise}>
//                     <CheckOut
//                         booking={booking}
//                     />
//                 </Elements>
//             </div>
//         </div>
//     );
// };

// export default Payment;
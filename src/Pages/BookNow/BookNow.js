import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import './BookNow.css';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

const BookNow = ({book, CategoriesDetails, setBook}) => {
    const { user } = useContext(AuthContext);
    const {title, resalePrice, image} = book;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const title = form.title.value;
        const location= form.location.value;
        const photo= form.photo.value;


        const booking = {
            title,
            price,
            name,
            email,
            phone,
            location,
            photo,
        }
        console.log(booking)
        fetch('https://carbs-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    <Loading></Loading>
                    setBook(null)

                    toast.success('Booking confirmed');
                }
                else{
                    toast.error(data.message);
                }
            })
    }
    return (
        
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={()=> setBook(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 mt-10 text-black'>
                        <input type="text" name="title" defaultValue={title} disabled placeholder='Product Name'className="input w-full input-bordered " />
                        <input type="text" name="price" defaultValue={resalePrice} disabled placeholder='Price' className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled  placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="photo" type="text" defaultValue={image} placeholder="photo" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn bg w-full hover:bg-white hover:text-red-600' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default BookNow;
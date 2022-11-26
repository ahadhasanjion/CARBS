import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import './BookNow.css'
const BookNow = ({book, CategoriesDetails, setBook}) => {
    const { user } = useContext(AuthContext);
    const {title, resalePrice} = book;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const title = form.title.value;
        const location= form.location.value
        console.log(name, price, title, location, email, phone)
    }
    return (
        
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={()=> setBook(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form  className='grid grid-cols-1 gap-3 mt-10 text-black'>
                        <input type="text" name="title" defaultValue={title} disabled placeholder='Product Name'className="input w-full input-bordered " />
                        <input type="number" name="price" defaultValue={resalePrice} disabled placeholder='Price' className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled  placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
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
import React from 'react';
import './CategoriesDetails.css'


const CategoriesDetails = ({ CategoriesDetails, setBook }) => {
    const { image, sellerName, resalePrice, conditionType, YearOfPurchase, originalPrice, location, description, yearOfUse, phoneNumber, title, publishTime, verify } = CategoriesDetails;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg text-white relative p-pic mt-6">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="px-3 text-left pb-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    </div>
                    <p>
                        <span className="font-bold dark:text-white"></span>
                        {description?.slice(0, 30)}
                    </p>
                    <div className="flex items-center justify-between pt-3">
                        <h2 className="text-sm font-normal">Original Price : {originalPrice}</h2>
                        <p className="text-sm font-normal">Resale Price : {resalePrice}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <h2 className="text-sm font-normal">Condition: {conditionType}</h2>
                        <h2 className="text-sm font-normal">purchase: {YearOfPurchase}</h2>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <h2 className="text-sm font-normal flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>{location}</h2>
                        <p className="text-sm font-normal">How Many Years Used : {yearOfUse}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <h2 className="text-sm font-normal flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>{sellerName}
                            {
                                verify &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        </h2>

                        <p className="text-sm font-normal">Phone: {phoneNumber}</p>
                    </div>
                    <div className="text-right mt-4">
                        <h2 className="text-sm font-normal">Posted: {publishTime}</h2>
                    </div>

                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white w-full bg hover:bg-white hover:text-red-600"
                            onClick={() => setBook(CategoriesDetails)}
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesDetails;
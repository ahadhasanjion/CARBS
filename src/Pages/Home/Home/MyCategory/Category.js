import React, { useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import BookNow from '../../../BookNow/BookNow';
import CategoriesDetails from '../../../Products/ProductsCard/CategoriesDetails';


const Category = () => {
    const [book, setBook] = useState(null);
    const products = useLoaderData()
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products?.map(product => <CategoriesDetails key={product?._id} CategoriesDetails={product} setBook={setBook}></CategoriesDetails>)
            }
        </div>
        <div>
               {book &&
                <BookNow
                    book={book}
                    setBook={setBook}
                ></BookNow>
               }
        </div>
        </>
        
    );
};

export default Category;
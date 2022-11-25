import React from 'react';
import {Link} from "react-router-dom";

const CategoryCard = ({brand}) => {
    const {img, _id} = brand;
    return (
        <>
        <Link to={`/categoriesdetails/${_id}`}>
             <div>
                <figure>
                    <img src={img} alt="brand logo" />
                </figure>
                <div></div>
             </div>
        </Link>
        </>
    );
};

export default CategoryCard;
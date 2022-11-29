import React from "react";
import { Link } from "react-router-dom";

const AdvertiseCard = ({ product }) => {
  const { title, description, categoryId, image, resalePrice, location } = product;
  return (
   <>
   
  
    <div className="card card-side bg-base-100 shadow-xl lg:w-96 mx-auto text-white">
      <figure className="p-5 rounded">
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-sans">{title}</h2>
        <p>{description}</p>
        <p className="text-3xl">
          ResalePrice <br /> <span>$ {resalePrice}</span>
        </p>
        <p>{location}</p>
       
      </div>
    </div>
   
   
   </>
  );
};

export default AdvertiseCard;

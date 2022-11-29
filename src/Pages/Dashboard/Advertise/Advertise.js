import React, { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";
import axios from "axios";
import './Advertise.css'

const Advertise = () => {
  const [products, setProducts] =useState([])

  useEffect(() => {
    axios.get("https://carbs-server.vercel.app/advertiseproducts").then((response) => {
      const data = response.data;

      setProducts(data);
    });
  }, []);
  return (
   <>
   
    <section className="">
    <h1 className="text-4xl font-bold text-center my-24 text-color">
      Hot products
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products?.map((product) => (
        <AdvertiseCard key={product?._id} product={product}></AdvertiseCard>
      ))}
    </div>
  </section>
   
   
   </>
  );
};

export default Advertise;

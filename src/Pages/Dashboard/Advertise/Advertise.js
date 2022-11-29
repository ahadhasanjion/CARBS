import React, { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";
import { useQuery } from '@tanstack/react-query';
import Loader from "../../Loading/Loading";

const Advertise = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://carbs-server.vercel.app/advertiseproducts');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    if(isLoading){
        return <Loader></Loader>
    }
  return (
   <>
   
   {
    products.length > 0 &&  <section className="">
    <h1 className="text-4xl font-bold text-center my-24">
      Hot products
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products?.map((product) => (
        <AdvertiseCard key={product?._id} advertise={product}></AdvertiseCard>
      ))}
    </div>
  </section>
   }
   
   </>
  );
};

export default Advertise;

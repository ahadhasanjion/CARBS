import React, { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";
// import { useQuery } from '@tanstack/react-query';
import Loading from "../../Loading/Loading";
import axios from "axios";

const Advertise = () => {
  const [products, setProducts] =useState([])

  useEffect(() => {
    axios.get("https://carbs-server.vercel.app/advertiseproducts").then((response) => {
      const data = response.data;

      setProducts(data);
    });
  }, []);
    // const { data: products = [], isLoading, } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch('https://carbs-server.vercel.app/advertiseproducts');
    //             const data = await res.json();
    //             return data;
    //         }
    //         catch (error) {

    //         }
    //     }
    // });
    // if(isLoading){
    //     return <Loading></Loading>
    // }
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

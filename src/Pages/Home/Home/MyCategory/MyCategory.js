import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';
import './MyCategory.css'

const MyCategory = () => {
    const { data: Brands = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            return data;
        }
    })
    return (
        <>
            <div>
                <h2 className='text-4xl text-color font-bold mt-4 text-center'>Brand Category</h2>
                <div>
                    <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                        {
                            Brands.map(brand => <CategoryCard key={brand._id} brand={brand}></CategoryCard>)
                        }
                    </div>
                </div>
            </div>


        </>
    );
};

export default MyCategory;
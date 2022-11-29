import React from 'react';
import bg from '../../Assets/1920x800_bg1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <section className='mt-0 py-60' style={{background: `url(${bg})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                  
                    <div className='banner-text text-center'>
                        <h1 className='lg:text-8xl font-bold'>Best Place To Buy</h1>
                        <h2 className='lg:text-6xl font-bold'>& Sell Your Cars</h2>
                        <p className='lg:text-2xl font-normal'>FIND CAR. ADD TO CAR. FREE DELIVERY.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
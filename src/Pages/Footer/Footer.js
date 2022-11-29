import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-primary-content">
            <div>
                <p className="font-bold text-4xl">
                    CARBS. <br />Best Place For Car Lovers And sellers since 2010
                </p>
                <p>Location: Dhaka, Bangladesh</p>
                <p>Phone: 01825469788</p>
                <p className='text-lg'>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
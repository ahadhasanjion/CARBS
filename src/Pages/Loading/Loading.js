import React from 'react';
import './Loading.css'

const Loader = () => {
    return (
        <div className="flex items-center justify-center space-x-2 my-auto mt-96">
            <div className="w-4 h-4 rounded-full animate-pulse bg"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg"></div>
        </div>
    );
};

export default Loader;
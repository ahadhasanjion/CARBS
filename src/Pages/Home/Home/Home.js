import React from 'react';
import Banner from '../Banner';
import Stats from '../Stats';
import MyCategory from './MyCategory/MyCategory';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Stats></Stats>
           <MyCategory></MyCategory>
        </div>
    );
};

export default Home;
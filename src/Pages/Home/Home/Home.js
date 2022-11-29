import React from 'react';
import Advertise from '../../Dashboard/Advertise/Advertise';
import Banner from '../Banner';
import Stats from '../Stats';
import MyCategory from './MyCategory/MyCategory';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Stats></Stats>
           <MyCategory></MyCategory>
           <Advertise></Advertise>
        </div>
    );
};

export default Home;
import React from 'react';
import CountUp from 'react-countup';
import './Stats.css'
const Stats = () => {
    return (
        <div>

            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="grid row-gap-8 sm:grid-cols-3">
                    <div class="text-center">
                        <h6 class="text-5xl font-bold text-deep-purple-accent-400 red"><CountUp end={25000} /></h6>
                        <p class="font-bold red">CAR SOLD</p>
                    </div>
                    <div class="text-center">
                        <h6 class="text-5xl font-bold text-deep-purple-accent-400 red"><CountUp end={2500} /></h6>
                        <p class="font-bold red">BUYERS</p>
                    </div>
                    <div class="text-center">
                        <h6 class="text-5xl font-bold text-deep-purple-accent-400 red"><CountUp end={1500} /></h6>
                        <p class="font-bold red">SELLERS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
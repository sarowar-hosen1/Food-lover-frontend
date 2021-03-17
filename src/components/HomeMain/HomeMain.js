import React from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import Navbar from '../Header/Navbar';

const HomeMain = () => {
    return (
        <main id="home">
            <Navbar />
            <HomeSlider />
        </main>
    );
};

export default HomeMain;
import React from 'react';
import About from '../About/About';
import Booking from '../Booking/Booking';
import Contact from '../Contact/Contact';
import Dishes from '../Dishes/Dishes';
import Footer from '../Footer/Footer';
import HomeMain from '../HomeMain/HomeMain';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import TopScroll from '../TopScroll/TopScroll';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div className="home">
            <HomeMain />
            <Welcome />
            <Menu />
            <Dishes />
            <Services />
            <Booking />
            <Team />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
            <TopScroll />
        </div>
    );
};

export default Home;
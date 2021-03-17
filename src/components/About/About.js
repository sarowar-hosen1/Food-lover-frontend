import React, { useEffect } from 'react';
import about from '../../images/about.png';
import bg from '../../images/bg-gray-in.jpg';
import aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
    //aos init
    useEffect(() => {
        aos.init({duration: 2000})
    },[])

    return (
        <section className="about">
            <div className="section-head" data-aos="fade-right">
                <h1 className="section-title">About us</h1>
                <p className="section-desc">We Create History</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 mb-4 pr-5" data-aos="zoom-in">
                        <img src={about} alt="" className="about-img img-fluid" />
                    </div>
                    <div className="col-md-7 col-sm-12" data-aos="fade-left">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ullamcorper mauris. In pulvinar turpis a justo facilisis ultrices. Suspendisse et arcu odio. In ut ex vel nisi facilisis eleifend ut nec nunc. Aliquam erat volutpat. Aenean faucibus sem vel vehicula suscipit. Morbi et sapien a magna vulputate eleifend. Quisque at augue justo. Mauris scelerisque id velit ut congue. Donec ut semper ipsum. Suspendisse potenti. Sed ipsum urna, varius eu nulla ut, suscipit vestibulum nulla. In sit amet fermentum</p>
                        <p>Nam id ullamcorper mauris. In pulvinar turpis a justo facilisis ultrices. Suspendisse et arcu odio. In ut ex vel nisi facilisis eleifend ut nec nunc. Aliquam erat volutpat. Aenean faucibus sem vel vehicula suscipit. Morbi et sapien a magna vulputate eleifend. Quisque at augue justo. Mauris scelerisque id velit ut congue. Donec ut semper ipsum. Suspendisse potenti.</p>
                        <p>Nam id ullamcorper mauris. In pulvinar turpis a justo facilisis ultrices. Suspendisse et arcu odio. In ut ex vel nisi facilisis eleifend ut nec nunc. Aliquam erat volutpat. Aenean faucibus sem vel vehicula suscipit. Morbi et sapien a magna vulputate eleifend. Quisque at augue justo. Mauris scelerisque id velit ut congue. Donec ut semper ipsum. Suspendisse potenti.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
import React, { useEffect } from 'react';
import carousel1 from '../../images/slider_1.jpg';
import carousel2 from '../../images/slider_3.jpg';
import carousel3 from '../../images/slider_5.jpg';
import { Link } from 'react-scroll';
import aos from 'aos';
import 'aos/dist/aos.css';
import './HomeSlider.css';

const HomeSlider = () => {

    useEffect(() => {
        aos.init({
            duration:3000,
        });
        
    },[])

    return (
        <div className="flexslider">
            <div id="carouselExampleCaptions" className="carousel slide flex-viewport" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide "></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide "></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100 img-fluid" alt="Carousel -1" />
                        <div className="carousel-caption" data-aos="zoom-in">
                            <h1>Book your tables now!</h1>
                            <p>Easy seat reservations</p>
                            <Link
                                style={{cursor:'pointer'}}
                                to="booking"
                                smooth={true}
                                duration={200}
                                className="btn-brand px-5">
                                Book
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100 img-fluid" alt="Corousel-2" />
                        <div className="carousel-caption" data-aos="zoom-in">
                            <h1>Best food in city</h1>
                            <p>We are serving at best</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100 img-fluid" alt="Corousel-3" />
                        <div className="carousel-caption" data-aos="zoom-in">
                            <h1>Are you hungry?</h1>
                            <p>Good we are here to serve you</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HomeSlider;
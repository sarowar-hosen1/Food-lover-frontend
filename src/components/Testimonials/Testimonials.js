import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch("https://foodlover005.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setTestimonials(data))
        aos.init({ duration: 2000 })
    }, []);

    return (
        <section className="testimonials" id="testimonials">
            <div className="section-head-2" data-aos="fade-left">
                <h1 className="section-title-2">Testimonials</h1>
                <p className="section-desc-2 mb-5">What our customers said</p>
            </div>
            <div className="container">
                {
                    testimonials.length ?
                        <div className="row">
                            {
                                testimonials.map(testimonial => (
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div className="testimonial">
                                            <img src={testimonial.image} alt="" />
                                            <div>
                                                <h5>{testimonial.name} <span className='color'><small>{testimonial.title}</small></span></h5>
                                                <p><small>{testimonial.about}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className="d-flex justify-content-center align-items-center">
                            <PropagateLoader color={'#f1ba47'}></PropagateLoader>
                        </div>
                }
            </div>
        </section>
    );
};

export default Testimonials;
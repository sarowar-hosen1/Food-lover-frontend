import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://foodlover005.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServices(data))
        aos.init({ duration: 2000 });
    }, [])

    return (
        <section className="services" id="service">
            <div className="section-head" data-aos="fade-left">
                <h1 className="section-title">Our Services</h1>
                <p className="section-desc">Service We Provided</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        services.map(service => (
                            <div className="col-md-4" data-aos="zoom-in">
                                <div className="service-card text-center">
                                    <div className="service-logo">
                                        <GiCoffeeCup />
                                    </div>
                                    <div>
                                        <h4 className="service-name">{service.name}</h4>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                            </div>))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
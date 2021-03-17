import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './Welcome.css';

const Welcome = () => {
    const [welcome, setWelcome] = useState([]);

    useEffect(() => {
        fetch('https://foodlover005.herokuapp.com/welcome')
            .then(res => res.json())
            .then(data => setWelcome(data))
        aos.init({
            duration: 3000
        })
    },
        [])

    return (
        <section className='welcome'>
            <div className="section-head" data-aos="fade-right">
                <h1 className="section-title">Welcome to Our Restaurant</h1>
                <p className="section-desc">Let's have a dinner together</p>
            </div>
            <div className="welcome-cards">
                <div className="container">
                    {
                        welcome.length ?
                            <div className="row">
                                {
                                    welcome.map(wlc =>
                                        <div className="col-md-4">
                                            <div className="welcome-card" data-aos="zoom-in">
                                                <div className='card-image'>
                                                    <img src={wlc.image} alt="" className="card-img-top img-fluid" />
                                                </div>
                                                <h4 className="card-price">$ {wlc.price}</h4>
                                                <div className="welcome-card-content">
                                                    <h4>{wlc.name}</h4>
                                                    <p>{(wlc.description).slice(0, 150)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            :

                            <div className="d-flex justify-content-center align-items-center">
                                <PropagateLoader color={'#f1ba47'}></PropagateLoader>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Welcome;
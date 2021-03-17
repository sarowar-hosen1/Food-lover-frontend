import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './Team.css';

const Team = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch("https://foodlover005.herokuapp.com/team")
            .then(res => res.json())
            .then(data => setChef(data))
        aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='team' id="team">
            <div className="section-head" data-aos="fade-right">
                <h1 className="section-title">Our Team</h1>
                <p className="section-desc">We Love our chef</p>
            </div>
            <div className="container">
                {
                    chef.length ?
                        <div className="row">
                            {
                                chef.map(chf => (
                                    <div className="col-md-3 col-sm-6">
                                        <div className="team-card text-center mb-4" data-aos="flip-left">
                                            <div className="team-img">
                                                <img src={chf.image} alt="Chef" />
                                                <h6>{chf.title}</h6>
                                            </div>
                                            <div className="team-content">
                                                <h4>{chf.name}</h4>
                                                <p><small>{chf.about}</small></p>
                                                <div className="d-flex justify-content-center">
                                                    <i><FaFacebook /></i>
                                                    <i><FaTwitter /></i>
                                                    <i><FaLinkedin /></i>
                                                    <i><FaInstagram /></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>))
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

export default Team;
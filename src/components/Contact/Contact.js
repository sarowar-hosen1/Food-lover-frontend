import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {FaPhoneAlt, FaHome, FaEnvelope} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi';
import aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    //aos initialize
    useEffect(() => {
        aos.init({duration: 2000})
    },[])

    return (
        <section className="contact" id="contact">
            <div className="section-head-2" data-aos="fade-left">
                <h1 className="section-title-2">Countact Us</h1>
                <p className="section-desc-2">You cant send us messages</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-info pr-5" data-aos="fade-right">
                            <h4 className="color">Contact Details</h4>
                            <p>Dont be shy do contact us about everything and anything, we will be glad to answer your questions about kataleya.</p>
                            <ul className='list-unstyled'>
                                <li><FaHome/>4 secton, Banani-Dhaka, Bangladesh</li>
                                <li><FaPhoneAlt/>phone: +8801777924138</li>
                                <li><FaEnvelope/><a href="https://gmail.com" target="_blank">Email: sarowar.hosen02@gmail.com</a></li>
                                <li><FiMonitor/><a href="Website:https://sarowar-hosen.web.app" target="_blank">Personal Website</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" name="name" className='form-control' ref={register({ required: true })} placeholder="Name" />
                                {errors.name && <span>Name is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className='form-control' ref={register({ required: true })} placeholder="Name" />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea name="message" cols="30" rows="5" className="form-control" ref={register({ required: true })} placeholder="Message"></textarea>
                            </div>
                            <input type="submit" value="Submit" className='btn-brand' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
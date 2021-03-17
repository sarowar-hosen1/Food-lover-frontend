import React from 'react';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className='text-white'><small>Copyright &copy;{new Date().getFullYear()} Food Lover | All rights reserved</small></p>
                    </div>
                    <div className="social-icon">
                        <i><FaFacebookSquare /></i>
                        <i><FaTwitter /></i>
                        <i><FaLinkedin /></i>
                        <i><FaInstagram /></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
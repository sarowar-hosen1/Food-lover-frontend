import React, { useEffect, useState } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../images/logo.png';
import { Auth } from '../Login/Auth';
import './Navbar.css';

const Navbar = () => {
    const [bar, setBar] = useState(true);
    const [admin, setAdmin] = useState(null);
    const history = useHistory();
    const auth = Auth();
    const user = JSON.parse(auth.user)

    useEffect(() => {
        fetch("https://foodlover005.herokuapp.com/admin")
            .then(res => res.json())
            .then(data => setAdmin(data[0].email))
    }, [])

    console.log(admin);
    return (
        // Navbar start 
        <nav className="navbar navbar-expand-lg  fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <button onClick={() => setBar(!bar)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {
                        bar ?
                            <i><FaBars /></i>
                            :
                            <i><FaWindowClose /></i>
                    }
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="menu" smooth={true} duration={200}>Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="dishes" smooth={true} duration={200}>Dishes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="service" smooth={true} duration={200}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: '#c59d5f' }} className="nav-link" to="booking" smooth={true} duration={200}>Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="team" smooth={true} duration={200}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true} duration={200}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="testimonials" smooth={true} duration={200}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={200}>Contact</Link>
                        </li>
                        {
                            user &&
                            admin == user.email &&
                            <li className="nav-item">
                                <Link onClick={() => history.push('/dashboard')} className="nav-link">Dashboard</Link>
                            </li>
                        }
                        <li className="nav-item">
                            <Link className="nav-link color" smooth={true} duration={200}>{user && user.name}</Link>
                        </li>
                        {
                            user ?
                                <li className="nav-item">
                                    <button onClick={() => auth.signOut()} className="nav-link btn">Signout</button>
                                </li>
                                :
                                <li className="nav-item">
                                    <button onClick={() => history.push('/login')} className="nav-link btn">Login</button>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
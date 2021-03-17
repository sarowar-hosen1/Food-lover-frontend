import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './Menu.css';

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("https://foodlover005.herokuapp.com/menu")
            .then(res => res.json())
            .then(data => setMenu(data))
        aos.init({ duration: 1500 })
    }, [])
    return (
        <section className="menu" id="menu">
            <div className="section-head-2" data-aos="fade-left">
                <h1 className="section-title-2">Food Menu</h1>
                <p className="section-desc-2">Explore The Food</p>
            </div>
            <div className="menu-list">
                <div className="container">
                    {
                        menu.length ?
                            <div className="row">
                                {
                                    menu.map((mn) =>
                                        <div className='col-md-6 my-2'>
                                            <div style={{ background: 'black' }} className="d-flex justify-conten-center align-items-center text-white p-3 m-2" data-aos="zoom-in-up">
                                                <img className="menu-img" src={mn.image} alt="" />
                                                <div className="menu-content">
                                                    <h5>{mn.name}</h5>
                                                    <p>{(mn.description).slice(0, 70)}</p>
                                                    <h6 className='color font-weight-bold'>$ {mn.price}</h6>
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

export default Menu;
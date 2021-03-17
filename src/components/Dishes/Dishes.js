//aos
import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
//import swiper core and required module
import SwiperCore, { A11y, Autoplay, Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
//imort swiper styles
import 'swiper/swiper.scss';
import './Dishes.css';




// install Swiper modules
SwiperCore.use([Navigation, A11y, Autoplay]);

const Dishes = () => {
    const [dishes, setDishes] = useState([]);
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        fetch('https://foodlover005.herokuapp.com/dishes')
            .then(res => res.json())
            .then(data => setDishes(data))
        aos.init({ duration: 2000 })
    }, [])



    return (
        <section className="dishes" id="dishes">
            <div className="section-head" data-aos="fade-right">
                <h1 className="section-title">Our Deshes</h1>
                <p className="section-desc">Come and eat everything</p>
            </div>
            {
                dishes.length ?
                    <div className="container">
                        <Swiper
                            observer={true}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => setSlider("Slide change")}
                            loop={true}
                            autoplay={{
                                delay: 2000
                            }}
                            breakpoints={{
                                // when window width is >= 640px
                                320: {
                                    width: 320,
                                    slidesPerView: 2,
                                },
                                // when window width is >= 768px
                                640: {
                                    width: 640,
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {
                                dishes.map(dish => (
                                    <SwiperSlide>
                                        <div className="dish-img">
                                            <img src={dish.image} alt="" className="img fluid" />
                                            <h6 className="dish-price">{dish.price}</h6>
                                        </div>
                                        <h4 className="dish-name">{dish.name}</h4>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    :

                    <div className="d-flex justify-content-center align-items-center">
                        <PropagateLoader color={'#f1ba47'}></PropagateLoader>
                    </div>
            }
        </section>
    );
};

export default Dishes;
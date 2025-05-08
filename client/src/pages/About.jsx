import styles from "../css/About.module.css"
import React from "react";
import { FaLocationDot, FaHandshakeAngle } from "react-icons/fa6";
import { RiTimelineView } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { getData } from "../api/PropertyApi";
import { useState, useEffect } from "react";
import commentdata from "../api/CommentApi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { NavLink } from "react-router-dom";



export const About = () => {

    const [set, setApt] = useState([])
    const getApiData = async () => {

        const data = await getData()
        setApt(data)
    }
    useEffect(() => {
        getApiData()
    }, [])


    return (

        <div className={styles.container}>
            <div className={styles.topSection}>

                <img src="https://ik.imagekit.io/0llvylbdm/imges/svgviewer-png-output.png?updatedAt=1744624647830"
                    alt="Modern House"
                    data-aos="fade-up-right"
                    data-aos-duration="800"
                    className={styles.houseImage} />
                <div className={styles.textContent} data-aos="fade-up-left" data-aos-duration="800" >
                    <h1>We Help You To Find Your Dream Home</h1>
                    <p>
                        From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey,
                        ensuring your dream home becomes a reality
                    </p>
                    <div className={styles.stats}>
                        <div>
                            <h2>100+</h2>
                            <p>Houses Available</p>
                        </div>
                        <div>
                            <h2>50+</h2>
                            <p>Houses Sold</p>
                        </div>
                        <div>
                            <h2>25+</h2>
                            <p>Trusted Agents</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.whyChooseUs} data-aos="fade-up" data-aos-anchor-placement="top-bottom"  >
                <h2>Why Choose Us</h2>
                <p>
                    Elevating Your Home Buying Experience with Expertise, Integrity,
                    <br /> and Unmatched Personalized Service
                </p>
                <div className={styles.features}>
                    <div className={styles.featureBox}>
                        <div className={styles.icon}><FaLocationDot /></div>
                        <h3>Expert Guidance</h3>
                        <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
                    </div>
                    <div className={styles.featureBox}>
                        <div className={styles.icon}><IoPerson />
                        </div>
                        <h3>Personalized Service</h3>
                        <p>Our services adapt to your unique needs, making your journey stress-free</p>
                    </div>
                    <div className={styles.featureBox}>
                        <div className={styles.icon}><RiTimelineView /></div>
                        <h3>Transparent Process</h3>
                        <p>Stay informed with our clear and honest approach to buying your home</p>
                    </div>
                    <div className={styles.featureBox}>
                        <div className={styles.icon}><FaHandshakeAngle /></div>
                        <h3>Exceptional Support</h3>
                        <p>Providing peace of mind with our responsive and attentive customer service</p>
                    </div>
                </div>
            </div>
            <section className={styles.container} data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                <h2 className={styles.title}>Our Popular Residences</h2>
                <div className={styles.cardGrid}>
                    {set.map((ele) => (
                        <div className={styles.card1} key={ele._id}>
                            <img src={ele.main_img} className={styles.image} />
                            <div className={styles.infoBox}>
                                <h3 className={styles.city}><i className="fa fa-map-marker"></i> {ele.location}</h3>
                                <div className={styles.details}>
                                    <p> {ele.bhk} Rooms</p>
                                    <p> {ele.space}</p>
                                </div>
                                <div className={styles.bottomRow}>
                                    <NavLink to={`/about/${ele._id}`}>
                                        <button className={styles.button}>Details</button>
                                    </NavLink>
                                    <span className={styles.price}>{ele.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={styles.title}>What People Say About BrokerNest</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                {commentdata.map((ele) => (
                    <SwiperSlide key={ele.id}>
                        <div className={styles.card} data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                            <img src={ele.image} alt="Room" className={styles.cardImage} />
                            <div className={styles.overlay}>
                                <div className={styles.userInfo}>
                                    <img src={ele.person} alt={ele.name} className={styles.avatar} />
                                    <div>
                                        <h4>{ele.name}</h4>
                                        <p>{ele.location}</p>
                                    </div>
                                    <div className={styles.rating}>⭐ {ele.rating}</div>
                                </div>
                                <p className={styles.text}>{ele.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};



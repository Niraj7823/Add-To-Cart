import { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { byDetails } from "../api/PropertyApi";
import styles from "../css/Details.module.css"
import { IoIosContact } from "react-icons/io";
import { ThemeContext } from "../Component/ContaxtApi";
// swipper js 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Details = () => {
    const data = useParams();

    const [set, setApt] = useState([])
    const [loading, setLoading] = useState(true)

    const getApiData = async () => {

        const details = await byDetails(data.PropertyId)
        setApt(details)
        setLoading(false)
    }

    useEffect(() => {
        getApiData()
    }, [])

    if (loading) {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="loader"></div>
                </div>
            </>

        )
    }

    const { islogIn } = useContext(ThemeContext);

    return (
        <>
            {
                set.map((ele) => {

                    return (
                        <>
                            <div className={styles.main} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className={styles.details}>
                                    <div>{ele.name}</div>
                                    <div>{ele.location}</div>
                                    <div>
                                        <div className={styles.details_flex}>
                                            <div>price:</div>
                                            <div>{ele.price}</div>
                                        </div>
                                        <div className={styles.details_flex}>
                                            <div>space:</div>
                                            <div>{ele.space}</div>
                                        </div>
                                        <div className={styles.details_flex}>
                                            <div>bhk:</div>
                                            <div>{ele.bhk}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.images}>
                                    <img src={ele.main_img} />
                                </div>
                            </div>
                            <div className={styles.status} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div>Construction Status</div>
                                <div>{ele.status}</div>
                            </div>
                            <div className={styles.information} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div>
                                    <div className={styles.hover_part}>
                                        <div>more information</div>
                                        <div>{ele.about}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.hover_part}>
                                        <IoIosContact />
                                        <div>
                                            {
                                                islogIn ? (
                                                    <>
                                                        <div className={styles.details_flex} >
                                                            <div>broker-name:</div>
                                                            <div>{ele.broker}</div>
                                                        </div>
                                                        <div className={styles.details_flex}>
                                                            <div>phone no:</div>
                                                            <div>{ele.contact}</div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>

                                                        <NavLink to="/sign-up"><button className="button">sign-up</button></NavLink>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className={styles.mySwiper}
                            >
                                {
                                    ele.backimages.map((ele) => {
                                        return (
                                            <>
                                                <SwiperSlide className={styles.image_container} ><img src={ele} /></SwiperSlide>
                                            </>
                                        )
                                    })
                                }
                            </Swiper>

                        </>
                    )
                })
            }
        </>
    )
}

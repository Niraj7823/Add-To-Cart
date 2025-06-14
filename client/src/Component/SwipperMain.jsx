import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/autoplay"; // Import autoplay module
import "../css/SwipperMain.css"
// Import required modules
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";


export default function SwipperMain({ data }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    

    return (
        <>
            {/* Main Swiper */}
            <div className="main_part">
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    autoplay={{ delay: 4000, disableOnInteraction: false }} // Auto-slide every 4 seconds
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs, Autoplay]}
                    className="mySwiper2"
                >

                    {data.map((item) => (
                        <SwiperSlide key={item._id} >
                            <img src={item.second_img} />
                            <div className="details">
                                <div className="details_flex">
                                    <div>{item.location}</div>
                                    <div>{item.bhk}</div>
                                    <div><NavLink to={`/${item._id}`}><button>watch details</button></NavLink></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>


                {/* Thumbnail Swiper */}
                <div className="second_part">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper"
                    >


                        {data.map((item) => (
                            <SwiperSlide key={item._id}>
                                <img src={item.main_img} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    );
}

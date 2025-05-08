import { useContext, useEffect, useState } from "react";
import { getLikeData } from "../api/PropertyApi";
import { LikedContext } from "../layout/LikedContext";
import { NavLink } from "react-router-dom";
import styles from '../css/About.module.css';
import { WhyWorkWithUs, Sponser } from "../layout/BecomeAgent"
export const Like = () => {
    const { likedItems, toggleLike } = useContext(LikedContext);
    const [likedProperties, setLikedProperties] = useState([]);

    useEffect(() => {
        if (likedItems.length === 0) return;

        const fetchLiked = async () => {
            try {
                const res = await getLikeData(likedItems);
                setLikedProperties(res);
            } catch (err) {
                console.error("Error fetching liked properties", err);
            }
        };

        fetchLiked();
    }, [likedItems]);


    return (
        <>
            <section className={styles.container} data-aos="fade-up"  data-aos-anchor-placement="top-bottom" >
                <h2 className={styles.title}>Our Like Residences</h2>

                {likedProperties.length === 0 ? (
                    <div className={styles.title}>No liked properties yet.</div>
                ) : (
                    <div className={styles.cardGrid}>
                        {likedProperties.map((ele) => (
                            <div className={styles.card1} key={ele._id}>
                                <img src={ele.main_img} className={styles.image} alt={ele.name} />
                                <div className={styles.infoBox}>
                                    <h3 className={styles.city}>
                                        <i className="fa fa-map-marker"></i> {ele.location}
                                    </h3>

                                    <div className={styles.details}>
                                        <p>
                                            {ele.bhk} Rooms
                                        </p>
                                        <p>
                                            {ele.space}</p>
                                    </div>

                                    <div className={styles.bottomRow}>
                                        <NavLink to={`/about/${ele._id}`}>
                                            <button className={styles.button}>Details</button>
                                        </NavLink>

                                        <span className={styles.price}>{ele.price}</span>
                                    </div>

                                    <button className="button" onClick={() => toggleLike(ele._id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <Sponser />
            <WhyWorkWithUs />
        </>
    );
};

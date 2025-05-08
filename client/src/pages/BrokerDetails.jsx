import { useParams, useLocation } from 'react-router-dom';
import { byBrokerDetails } from "../api/PropertyApi";
import { NavLink } from "react-router-dom";
import styles from "../css/BrokerDetails.module.css"
import { useEffect, useState } from 'react';
export const BrokerDetails = () => {
    const { BrokerName } = useParams();
    const location = useLocation();
    const { contact } = location.state || {};



    const [set, setApt] = useState([])
    const [loading, setLoading] = useState(true)

    const getApiData = async () => {

        const data = await byBrokerDetails(contact, BrokerName)
        setApt(data)
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
    const filtereProperty = set.filter((ele) => ele.broker === BrokerName && ele.contact === contact);


    return (
        <section className={styles.newsSection}>
            <h2 className={styles.title}>Recent Articles & News</h2>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.cardsContainer}>
                {filtereProperty.map((item) => (
                    <div className={styles.card} key={item._id}>
                        <img src={item.main_img} className={styles.image} />
                        <div className={styles.content}>
                            <span className={styles.meta}>
                                {item.category} • {item.status}
                            </span>
                            <h3 className={styles.cardTitle}>{item.name}</h3>
                            <NavLink to={`/broker/:BrokerName/${item._id}`} className={styles.readMore}>
                                Read More <span>&rarr;</span>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


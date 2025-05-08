import styles from "../css/Property.module.css";
import { FaLocationDot, FaHouse } from "react-icons/fa6";
import { RiHeartAddLine } from "react-icons/ri";
import { ThemeContext } from "../Component/ContaxtApi";
import { useContext, useState, useRef } from "react";
import { getSearchData } from "../api/PropertyApi";
import { NavLink } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { LikedContext } from "../layout/LikedContext";
import { Sponser, HowItWorks } from "../layout/BecomeAgent"
export const Properties = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const targetRef = useRef(null);
    const [values, setValues] = useState({
        city: "",
        type: ""
    });

    const { city, type } = values;
    const { likedItems, toggleLike } = useContext(LikedContext);
    const { data = [] } = useQuery({
        queryKey: ["properties", city, type, pageNumber],
        queryFn: async () => {
            return await getSearchData(city, type, pageNumber);
        },
        placeholderData: keepPreviousData
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues({ city: "", type: "" });
        setPageNumber(1);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => {
            if (prev[name] !== value) {
                setPageNumber(1);
            }
            return { ...prev, [name]: value };
        });
    };

    console.log(likedItems)

    const { islogIn } = useContext(ThemeContext);



    return (
        <>
            <div className={styles.grid}>
                <div>
                    <div>Find your dream home</div>
                    <div>Believe in finding it</div>
                    <div>
                        Explore our curated selection of exquisite properties
                        meticulously tailored to your unique dream home vision
                    </div>
                    <div>
                        {islogIn ? (
                            <button
                                className="button"
                                onClick={() =>
                                    targetRef.current?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                }
                            >
                                Search
                            </button>
                        ) : (
                            <NavLink to="/sign-up">
                                <button className="button">Sign up</button>
                            </NavLink>
                        )}
                    </div>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="800" >
                    <img src="/assets/house.png" alt="House" />
                </div>

                <div ref={targetRef}>
                    <form
                        className={styles.form_flex}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.inputicons}>
                            <input
                                type="text"
                                placeholder="City"
                                name="city"
                                list="city"
                                onChange={handleChange}
                                value={values.city}
                            />
                            <datalist id="city">
                                <option value="surat" />
                                <option value="vadodara" />
                                <option value="ahmedabad" />
                            </datalist>
                            <FaLocationDot className={styles.icons} />
                        </div>

                        <div className={styles.inputicons}>
                            <input
                                type="text"
                                placeholder="Type"
                                list="type"
                                name="type"
                                onChange={handleChange}
                                value={values.type}
                            />
                            <datalist id="type">
                                <option value="villas" />
                                <option value="apartment" />
                                <option value="ploats" />
                            </datalist>
                            <FaHouse className={styles.icons} />
                        </div>

                        {islogIn ? (
                            <button className="button">Clear</button>
                        ) : (
                            <NavLink to="/sign-up">
                                <button className="button">Sign up</button>
                            </NavLink>
                        )}
                    </form>
                </div>
            </div>

            <div className={styles.grid1} data-aos="fade-up"  data-aos-anchor-placement="top-bottom" >
                {data.length === 0 ? (
                    <div>No properties found</div>
                ) : (
                    data.map((ele) => (
                        <div className={styles.flex_container} key={ele._id}>
                            <div>
                                <NavLink to={`/properties/${ele._id}`}>
                                    <img src={ele.main_img} alt={ele.name} />
                                </NavLink>
                            </div>
                            <div>{ele.name}</div>
                            <div>
                                <FaLocationDot />
                                <div>{ele.location}</div>
                            </div>
                            <div />
                            <div>
                                <div>{ele.price}</div>
                                <div>
                                    <RiHeartAddLine
                                        onClick={() => toggleLike(ele._id)}
                                        className={likedItems.includes(ele._id) ? styles.like : styles.unlike}
                                    />

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className={styles.pageination} data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
                <button
                    className="button"
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber((prev) => prev - 1)}
                >
                    Pre
                </button>
                <div>{pageNumber}</div>
                <button
                    className="button"
                    disabled={data.length < 3}
                    onClick={() => setPageNumber((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
            <Sponser  />
            <HowItWorks />
        </>
    );
};

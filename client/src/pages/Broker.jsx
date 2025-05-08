import { getSearch } from "../api/PropertyApi";
import styles from "../css/Broker.module.css";
import { FaLocationDot, FaHouse } from "react-icons/fa6";
import { ThemeContext } from "../Component/ContaxtApi"
import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BecomeAgent, Sponser } from "../layout/BecomeAgent"
export const Broker = () => {


    const [values, setValues] = useState({
        city: "",
        type: ""
    });

    const { city, type } = values;

    const { data = [] } = useQuery({
        queryKey: ["properties", city, type],
        queryFn: async () => {
            return await getSearch(city, type);
        },
        placeholderData: keepPreviousData
    });



    // add pagination front end side without invoke api 
    const [pageNumber, setPageNumber] = useState(1);
    const itemsPerPage = 3;
    // Calculate which brokers to show on current page
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);


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

    const { islogIn } = useContext(ThemeContext)



    return (

        <>


            <BecomeAgent />
            <Sponser />
            <div>
                <form
                    className={styles.form_flex}
                    onSubmit={handleSubmit}
                    data-aos="fade-up"  data-aos-anchor-placement="top-bottom"
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


            <div className={styles.container} data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
                <h1 className={styles.heading}>Available Brokers</h1>
                <div className={styles.grid}>
                    {paginatedData.map((ele) => (
                        <div key={ele._id} className={styles.card}>
                            <NavLink
                                to={`/broker/${ele.broker}`}
                                state={{ contact: ele.contact }}
                            >
                                <IoPerson className={styles.image} />
                            </NavLink>
                            <div className={styles.details}>
                                <h2 className={styles.name}>{ele.broker}</h2>
                                <p className={styles.phone}> <FaPhoneAlt />
                                    {islogIn ? (
                                        <>
                                            {ele.contact}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </p>
                                <p className={styles.city}><FaLocationDot />{ele.city}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className={styles.pageination} data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
                <button
                    className="button"
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber(prev => prev - 1)}
                >
                    Prev
                </button>
                <div>{pageNumber} / {totalPages}</div>
                <button
                    className="button"
                    disabled={pageNumber === totalPages}
                    onClick={() => setPageNumber(prev => prev + 1)}
                >
                    Next
                </button>
            </div>

        </>
    );
};
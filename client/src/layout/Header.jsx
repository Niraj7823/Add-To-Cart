import { useState } from "react";
import styles from "../css/Header.module.css"
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";


export const Header = () => {

    const [bar, setBar] = useState(false)
    const { islogIn } = useContext(ThemeContext)
    function handelClick() {
        if (bar) {
            setBar(false)
            document.body.style.overflow = "auto"

        }
        else {
            setBar(true)
            document.body.style.overflow = "hidden"
        }

    }

    function handelClicks() {
        bar(false)
    }
    return (
        <>
            <div className={styles.nav_container}>
                <div className={styles.img_container}>
                    <img src="/assets/logo.png" />
                </div>
                <div className={`${styles.nav_pages} ${bar ? styles.show : styles.none}`}>
                    <ul>
                        <li><NavLink to="/" onClick={handelClicks} >home</NavLink></li>
                        <li><NavLink to="/properties" onClick={handelClicks}>properties</NavLink></li>
                        <li> <NavLink to="/broker" onClick={handelClicks}>broker</NavLink></li>
                        <li> <NavLink to="/like" onClick={handelClicks}>like</NavLink></li>
                        <li> <NavLink to="/about" onClick={handelClicks}>about</NavLink></li>
                        <li> <NavLink to="/contact" onClick={handelClicks}>contact</NavLink></li>
                     
                    </ul>
                </div>
                <div className={styles.authen}>
                    <ul>
                        {
                            islogIn ? (
                                <li><NavLink to="/logout">logout</NavLink></li>
                            ) : (
                                <>
                                    <li> <NavLink to="/login">login</NavLink></li>
                                    <li> <NavLink to="/sign-up">sign up</NavLink></li>
                                </>)
                        }
                    </ul>
                </div>
                <FaBars onClick={handelClick} className={styles.bar} />
            </div>
        </>
    )
}

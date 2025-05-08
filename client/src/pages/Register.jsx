import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "../css/Slc.module.css"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
import { toast } from 'react-toastify';
export const Register = () => {
    const API =import.meta.env.VITE_URL_BACKEND;
    const [signupData, setSignupData] = useState({
        userName: "",
        email: "",
        password: "",
        phone: ""

    })

    const navigate = useNavigate();
    const { setToken } = useContext(ThemeContext);
    const handelSubmit = async (event) => {
        event.preventDefault()

        try {

            const response = await fetch(`${API}/registor`, {

                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(signupData)
            })

            const serverToken = await response.json()
            console.log(serverToken)
            if (response.ok) {

                setToken(serverToken.token)
                setSignupData(
                    {
                        userName: "",
                        email: "",
                        password: "",
                        phone: ""

                    }
                )
                toast.success("Registration Successful")
                navigate("/")
            }
            else {
                toast.error(serverToken.extradetails ? serverToken.extradetails : serverToken.message)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    function handelChange(event) {
        const { name, value } = event.target

        setSignupData((pre) => ({ ...pre, [name]: value }))
    }

    return (
        <>
            <div className={styles.form_grid}>
                <div className={styles.form_img}  data-aos="zoom-in">

                    <img src="https://ik.imagekit.io/0llvylbdm/imges/registor?updatedAt=1746597768319" />
                </div>
                <form className={styles.form_flex} onSubmit={handelSubmit}>

                    <div className={styles.form_group}>
                        <label htmlFor="userName">username:</label>
                        <input type="text" name="userName" placeholder="Enter your UserName" value={signupData.userName} onChange={handelChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="email">email:</label>
                        <input type="email" name="email" placeholder="Enter your Email" value={signupData.email} onChange={handelChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password">password:</label>
                        <input type="password" name="password" placeholder="Enter your Password" value={signupData.password} onChange={handelChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="phone">phone:</label>
                        <input type="tel" name="phone" placeholder="Enter your phone number" value={signupData.phone} onChange={handelChange} />
                    </div>
                    <div className={styles.btn}>
                        <button >register now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

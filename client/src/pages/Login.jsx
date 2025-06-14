import { useState } from "react"
import styles from "../css/Slc.module.css"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
import { toast } from 'react-toastify';
export const Login = () => {
    const API =import.meta.env.VITE_URL_BACKEND;
    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    )
    const { setToken } = useContext(ThemeContext);

    function handelChange(event) {

        const { name, value } = event.target
        setLoginData((pre) => ({ ...pre, [name]: value }))
    }

    const navigate = useNavigate();

    const handelSubmit = async (event) => {
        event.preventDefault()

        try {

            const response = await fetch(`${API}/login`, {

                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            const serverToken = await response.json()
            console.log(serverToken)
            if (response.ok) {

                setToken(serverToken.token)
                setLoginData(
                    {
                        email: "",
                        password: ""
                    }
                )
                toast.success("Login Successful")

                navigate("/")

            }
            else {
                toast.error(serverToken.extradetails ? serverToken.extradetails : serverToken.message)
            }

            console.log(response)
        }
        catch (error) {
            alert("Login Fails")
            console.log(error)
        }
    }

    return (
        <>
            <div className={styles.form_grid}>
                <div className={styles.form_img} data-aos="zoom-in">

                    <img src="https://ik.imagekit.io/0llvylbdm/imges/login?updatedAt=1746597455201" />
                </div>
                <form className={styles.form_flex} onSubmit={handelSubmit}>


                    <div className={styles.form_group}>
                        <label htmlFor="email">email:</label>
                        <input type="email" name="email" placeholder="Enter your Email" value={loginData.email} onChange={handelChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password">password:</label>
                        <input type="password" name="password" placeholder="Enter your Password" value={loginData.password} onChange={handelChange} />
                    </div>

                    <div className={styles.btn}>
                        <button> login now</button>
                    </div>
                </form>
            </div>
        </>
    )
}
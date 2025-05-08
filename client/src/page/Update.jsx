import { useEffect, useState } from "react"
import styles from "../css/Slc.module.css"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
import { toast } from 'react-toastify';
export const Update = () => {
    const API =import.meta.env.VITE_URL_BACKEND;
    const [values, setValues] = useState({
        "userName": "",
        "email": "",
        "phone": ""
    })


    const { authorizationToken } = useContext(ThemeContext)
    const data = useParams()
    console.log(data)


    function handelChange(event) {

        const { value, name } = event.target

        setValues((pre) => ({ ...pre, [name]: value }))

    }
    const getUserData = async () => {

        try {
            const response = await fetch(`${API}/admin/user/${data.userId}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })
            const responsedata = await response.json()

            if (responsedata) {
                setValues({
                    email: responsedata.email,
                    userName: responsedata.userName,
                    phone: responsedata.phone
                })
            }

            console.log(responsedata)
        }
        catch (error) {
            console.log(error)
        }

    }

    const handelSubmit = async (event) => {

        event.preventDefault()
        try {

            const response = await fetch(`${API}/admin/user/update/${data.userId}`, {

                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(values)
            })

            if (response.ok) {

                toast.success("update successfully")
                setValues(
                    {
                        email: "",
                        phone: "",
                        userName: ""
                    }
                )
            }
            else {
                toast.error("dosen't update")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])
    return (
        <>
            <div className={styles.form_grid}>
                <div className={styles.form_img}>

                    <img src="/assets/img/sign.png" />
                </div>
                <form className={styles.form_flex} onSubmit={handelSubmit}>

                    <div className={styles.form_group}>
                        <label htmlFor="userName">username:</label>
                        <input type="text" name="userName" onChange={handelChange} value={values.userName} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="email">email:</label>
                        <input type="email" name="email" onChange={handelChange} value={values.email} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="phone">phone:</label>
                        <input type="tel" name="phone" onChange={handelChange} value={values.phone} />
                    </div>
                    <div className={styles.btn}>
                        <button >submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
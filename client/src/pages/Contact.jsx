import { useState } from "react"
import styles from "../css/Slc.module.css"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
import { toast } from 'react-toastify';
export const Contact = () => {
    const API =import.meta.env.VITE_URL_BACKEND;
    const [contactData, setContactData] = useState(
        {
            email: "",
            message: ""
        }
    )
    const { user } = useContext(ThemeContext)
    const [userData, setUser] = useState(true)
    if (userData && user) {
        setContactData({
            email: user.email,
            message: ""
        })
        setUser(false)
    }
    function handelChange(event) {

        const { value, name } = event.target

        setContactData((pre) => ({ ...pre, [name]: value }))

    }

    const handelSubmit = async (event) => {
        event.preventDefault()

        try {

            const response = await fetch(`${API}/about`, {

                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(contactData)
            })

            if (response.ok) {
                const serverResponse = await response.json()
                console.log(serverResponse)
                toast.success("message send successfully")
                setContactData(
                    {
                        email: "",
                        message: ""
                    }
                )
            }
            else {
                toast.error("please login")
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <>

            <div className={styles.form_grid}>
                <div className={styles.form_img} data-aos="zoom-in">

                    <img src="https://ik.imagekit.io/0llvylbdm/imges/contact?updatedAt=1746597204220" />
                </div>
                <form className={styles.form_flex} onSubmit={handelSubmit}>
                    <div className={styles.form_group}>
                        <label htmlFor="email">email:</label>
                        <input type="email" name="email" placeholder="Enter your Email" value={contactData.email} onChange={handelChange} />
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="massage">message:</label>
                        <textarea rows={6} type="text" placeholder="message" name="message" value={contactData.message} onChange={handelChange} />
                    </div>
                    <div className={styles.btn}>
                        <button>submit</button>
                    </div>
                </form>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.298415960153!2d72.88497602759466!3d21.20455075394347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f9d642cf701%3A0x77fb74557b01733c!2sPramukh%20Park%20Society%2C%20277%2C%20Punagam%2C%20Varachha%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1741627656711!5m2!1sen!2sin" width="100%" height="450"></iframe>
        </>
    )
}
import { useState } from "react"

import styles from "../css/Slc.module.css"

export const BrokerReg = () => {
       const [signupData, setSignupData] = useState({
        userName: "",
        email: "",
        city: "",
        phone: ""

    })

    const handelSubmit = async (event) => {
        event.preventDefault()
    }

    function handelChange(event) {
        const { name, value } = event.target

        setSignupData((pre) => ({ ...pre, [name]: value }))
    }

    return (
        <>
            <div className={styles.form_grid}>
                <div className={styles.form_img} data-aos="zoom-in">

                    <img src="https://ik.imagekit.io/0llvylbdm/imges/registor?updatedAt=1746597768319" />
                </div>
                <form className={styles.form_flex} onSubmit={handelSubmit}>

                    <div className={styles.form_group}>
                        <label htmlFor="userName">BrokerName:</label>
                        <input type="text" name="userName" placeholder="Enter your UserName" value={signupData.userName} onChange={handelChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="email">email:</label>
                        <input type="email" name="email" placeholder="Enter your Email" value={signupData.email} onChange={handelChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password">City:</label>
                        <input type="password" name="password" placeholder="Enter your City " value={signupData.city} onChange={handelChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="phone">phone:</label>
                        <input type="tel" name="phone" placeholder="Enter your phone number" value={signupData.phone} onChange={handelChange} />
                    </div>
                    <div className={styles.btn}>
                        <button >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

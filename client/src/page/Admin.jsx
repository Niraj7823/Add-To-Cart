import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
import styles from "../css/Admin.module.css"
export const Admin = () => {
    const { user } = useContext(ThemeContext)
    return (
        <>
            <div className={styles.main_admin}>
                <h4>Hello <span>{user.userName}</span>, welcome to the admin panel</h4>
                <div>
                    <img src="/assets/admin.png" width="340px" height="400px" />
                </div>
            </div>
        </>
    );
}
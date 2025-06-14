import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUser, FaMessage } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import styles from "../css/Admin.module.css"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
export const AdminLayout = () => {
const{loading,user}=useContext(ThemeContext)
if(loading)
{
    return <h1>Loading...</h1>
}
if(!user.isAdmin)
{
    return <Navigate to="/"/>;
}
{

}
return (
        <>
            <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.img_container}>
                    <img src="/assets/logo.png" />
                </div>

                <div className={styles.nav_child}>
                    <FaUser />
                    <NavLink to="/admin/user">user</NavLink>
                </div>
                <div className={styles.nav_child}>
                    <FaMessage />
                    <NavLink to="/admin/contact">contact</NavLink>
                </div>
                <div className={styles.nav_child}>
                    <IoHome />
                    <NavLink to="/">Home</NavLink>
                </div>
            </div>
            <Outlet />
            </div> 
        </>
    )
}



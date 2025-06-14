import { useEffect, useState } from "react"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
import styles from "../css/Admin.module.css"
import { Link } from "react-router-dom";
export const User = () => {
   const API =import.meta.env.VITE_URL_BACKEND;
   const [users, setUsers] = useState([]);
   const { authorizationToken } = useContext(ThemeContext)
   const getAllUsersData = async () => {
      try {
         const response = await fetch(`${API}/admin/user`, {
            method: "GET",
            headers: {
               Authorization: authorizationToken,
            },
         });
         const data = await response.json();
         setUsers(data)
         console.log(data);

      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getAllUsersData();
   }, []);

   const handelClick = async (id) => {

      try {
         const response = await fetch(`${API}/admin/user/delete/${id}`, {
            method: "DELETE",
            headers: {
               Authorization: authorizationToken,
            },
         });

         if (response.ok) {
            getAllUsersData();
         }
         const data = await response.json();
         console.log(data);

      } catch (error) {
         console.log(error);
      }
   }

   return (
      <>
         <section className={styles.admin_users_section}>
            <div className={styles.main}>
               <h1>Admin Users Data </h1>
            </div>
            <div className={styles.admin_users}>
               <table>
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((curUser, index) => {
                        return (
                           <tr key={index}>
                              <td>{curUser.userName}</td>
                              <td>{curUser.email}</td>
                              <td>{curUser.phone}</td>
                              <td ><Link  className={styles.updateLink}  to={`/admin/user/update/${curUser._id}`}>Edit</Link></td>
                              <td><button onClick={() => handelClick(curUser._id)}>Delete</button> </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </section>
      </>
   );
}
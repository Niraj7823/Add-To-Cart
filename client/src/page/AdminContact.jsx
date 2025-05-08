import { ThemeContext } from "../Component/ContaxtApi"
import { useContext, useEffect, useState } from "react";
import styles from "../css/Admin.module.css"

export const AdminContact = () => {
   const API =import.meta.env.VITE_URL_BACKEND;
   const [users, setUsers] = useState([]);
   const { authorizationToken } = useContext(ThemeContext)

   const getAllContactData = async () => {

      try {

         const response = await fetch(`${API}/admin/contact`,
            {
               method: "GET",
               headers: {
                  Authorization: authorizationToken,
               }

            }
         )
         const data = await response.json();
         setUsers(data)


      }
      catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getAllContactData();
   }, []);


   const handelClick = async (id) => {

      try {
         const response = await fetch(`${API}/admin/user/deletecontact/${id}`, {
            method: "DELETE",
            headers: {
               Authorization: authorizationToken,
            },
         });

         if (response.ok) {
            getAllContactData();
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
               <h1>Admin Contact Data </h1>
            </div>
            <div className={styles.admin_users}>
               <table>
                  <thead>
                     <tr>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((curUser, index) => {
                        return (
                           <tr key={index}>

                              <td>{curUser.email}</td>
                              <td>{curUser.message}</td>

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

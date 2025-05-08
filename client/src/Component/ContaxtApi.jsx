import { createContext, use, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const API =import.meta.env.VITE_URL_BACKEND;
  const [logout, setLogout] = useState(localStorage.getItem("token"))
  const [user, userData] = useState("")
  const [loading,setLoading]=useState(true)

  const islogIn = !!logout
 
  const authorizationToken = `Bearer ${logout}`

  const userAutentication = async () => {

    try {

      const response = await fetch(`${API}/userres`, {

        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })

      if (response.ok) {
        const serverData = await response.json()
        userData(serverData.userData)
         setLoading(false)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    userAutentication()
  }, [])
  const logOutUser = () => {
    setLogout("")
    return localStorage.removeItem("token")
  }

  const setToken = (serverToken) => {
    setLogout(serverToken)
    return localStorage.setItem("token", serverToken)

  };

  return (
    <ThemeContext.Provider value={{ setToken, islogIn, logOutUser, user,authorizationToken,loading }}>
      {children}
    </ThemeContext.Provider>
  );
};

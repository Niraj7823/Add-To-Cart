import { useEffect } from "react"
import { ThemeContext } from "../Component/ContaxtApi"
import { useContext } from "react";
import { Navigate } from "react-router-dom";
 export const Logout = () => {
    
    const {logOutUser}=useContext(ThemeContext)
    useEffect(()=>{

    logOutUser()

    },[logOutUser])

    return<Navigate to="/login"/>
}
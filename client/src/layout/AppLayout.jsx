import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Fotter } from "./Fotter"
export const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Fotter />
        </>
    )
}
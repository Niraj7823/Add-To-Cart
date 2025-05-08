import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./layout/AppLayout"
import { Properties } from "./pages/Properties"
import { Register } from "./pages/Register"
import { BrokerReg } from "./pages/BrokerReg"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Contact } from "./pages/Contact"
import { Broker } from "./pages/Broker"
import { About } from "./pages/About"
import { Like } from "./pages/Like"
import { Logout } from "./pages/Logout"
import { Details } from "./pages/Details"
import { AdminLayout } from "./layout/AdminLayout"
import { User } from "./page/User"
import { AdminContact } from "./page/AdminContact"
import { Update } from "./page/Update"
import { Admin } from "./page/Admin"
import { BrokerDetails } from "./pages/BrokerDetails"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LikedProvider } from "./layout/LikedContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },

                {
                    path: "/:PropertyId",
                    element: <Details />
                },
                {
                    path: "/:PropertyId",
                    element: <Details />
                },
                {
                    path: "/broker",
                    element: <Broker />,
                },
                {
                    path: "/like",
                    element: <Like />,
                },
                {
                    path: "/contact",  // Regular contact route for users
                    element: <Contact />,
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/properties",
                    element: <Properties />,
                },
                {
                    path: "/properties/:PropertyId",
                    element: <Details />
                },
                {
                    path: "/broker/:BrokerName",
                    element: <BrokerDetails />
                },
                {
                    path: "/broker/:BrokerName/:PropertyId",
                    element: <Details />
                },
                {
                    path: "/sign-up",  // Fixed path to use hyphen instead of space
                    element: <Register />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/about/:PropertyId",
                    element: <Details />
                },
                {
                    path: "/logout",
                    element: <Logout />
                },
                {
                    path: "/brokerregistor",
                    element: <BrokerReg />
                },
            ]
        },
        {
            path: "/admin",
            element: <AdminLayout />,
            children: [
                {
                    path: "/admin",
                    element: <Admin />
                },
                {
                    path: "user",
                    element: <User />
                },
                {
                    path: "contact",
                    element: <AdminContact />
                },
                {
                    path: "/admin/user/update/:userId",
                    element: <Update />
                }
            ]
        }
    ]
)

export const App = () => {
    const queryClient = new QueryClient()

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false,
            mirror: true,

        });
    }, []);

    return (
        <LikedProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </LikedProvider>
    )
}

import { createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout"
import LandingPage from "../Page/LandingPage"

export const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
                index : true,
                element : <LandingPage/>
            }
        ]
    }
])
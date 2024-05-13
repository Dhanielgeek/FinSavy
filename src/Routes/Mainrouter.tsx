import { createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout"
import LandingPage from "../Page/LandingPage"
import SignUp from "../Auth/SignUp"

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
    },
    {
        path : 'signup',
        element: <SignUp/>
    }
])
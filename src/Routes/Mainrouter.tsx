import { createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout"
import LandingPage from "../Page/LandingPage"
import SignUp from "../Auth/SignUp"
import Login from "../Auth/Login"
import ForgetPassword from "../Auth/ForgetPassword"
import Dashboard from "../Client/Dashboard"

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
    },
    {
        path : 'login',
        element : <Login/>
    },
    {
        path: 'forget',
        element : <ForgetPassword/>
    },
    {
        path : 'user',
        element : <Dashboard/>,
    }
])
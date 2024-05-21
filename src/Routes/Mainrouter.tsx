import { createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout"
import LandingPage from "../Page/LandingPage"
import SignUp from "../Auth/SignUp"
import Login from "../Auth/Login"
import ForgetPassword from "../Auth/ForgetPassword"
import Dashboard from "../Client/Dashboard"
import Overview from "../Client/Overview"
import Withdraw from "../Client/Withdraw"
import Deposit from "../Client/Deposit"
import MyPlans from "../Client/MyPlans"
import History from "../Client/History"

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
        children : [
            {
                index : true,
                path : '/user/over',
                element : <Overview/>
            },
            {
              path: '/user/withdraw',
              element : <Withdraw/>  
            },
            {
                path : '/user/deposit',
                element : <Deposit/>
            },
            {
                path : '/user/plans',
                element : <MyPlans/>
            },
            {
                path : '/user/history',
                element :<History/>
            }
        ]
    }
])
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Auth/Login"
import SignUp from "./Auth/SignUp"
import ForgetPassword from "./Auth/ForgetPassword"
import ResetPassword from "./Auth/ResetPassword"
import Layout from "./Components/Layout"
import Home from "./Page/Home"


const Router = createBrowserRouter([
  {
    path : 'login',
    element : <Login/>
  },
  {
    path: 'signup',
    element : <SignUp/>
  },
  {
    path : 'forgetpass',
    element : <ForgetPassword/>
  },
  {
    path : 'reset',
    element : <ResetPassword/>
  },
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      }
    ]

  }
  
])






const App = () => {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App
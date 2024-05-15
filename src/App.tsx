import { RouterProvider } from "react-router-dom"
import { Mainrouter } from "./Routes/Mainrouter"
import { Provider } from "react-redux"
import Store from "./Function/Store"
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
    <Toaster/>
    <Provider store={Store}>
      <RouterProvider router={Mainrouter}/>
    </Provider>
    </>
  )
}

export default App
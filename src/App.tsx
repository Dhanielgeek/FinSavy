import { RouterProvider } from "react-router-dom"
import { Mainrouter } from "./Routes/Mainrouter"
import { Provider } from "react-redux"
import Store from "./Function/Store"

const App = () => {
  return (
    <>
    <Provider store={Store}>
      <RouterProvider router={Mainrouter}/>
    </Provider>
    </>
  )
}

export default App
import { RouterProvider } from "react-router-dom"
import { Mainrouter } from "./Routes/Mainrouter"

const App = () => {
  return (
    <RouterProvider router={Mainrouter}/>
  )
}

export default App
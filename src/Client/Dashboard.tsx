import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import DashHeader from "./DashHeader"


const Dashboard = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-green-400 flex ">
      <div className="w-[20%] min-h-[100vh] bg-white">
        <Menu/>
      </div>
      <div className="min-w-[85%] bg-black  h-[5rem]">
       <DashHeader/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Dashboard
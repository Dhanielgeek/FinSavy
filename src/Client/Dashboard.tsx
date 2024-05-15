// Dashboard.jsx
import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import DashHeader from "./DashHeader"

const Dashboard = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-green-400 flex relative">
      <div className=" min-w-[5%] bg-white absolute left-0 top-0">
        <Menu />
      </div>
      <div className="h-full min-w-[95%] bg-black">
        <DashHeader />
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard;

// Dashboard.jsx
import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import {useSelector } from "react-redux"
import DashHeader from "./DashHeader"


const Dashboard = () => {

  const Togglebar = useSelector((state:any)=> state.MenuBar)

  



  return (
    <div className="h-screen w-[100%] flex">
      <div className={`${Togglebar} ?  "w-[200px]" : "w-[100px]" `}>
        <Menu/>
      </div>
      <div className="w-screen h-screen flex flex-col">
      <DashHeader/>
      <Outlet />
      </div>
     
    </div>
  )
}

export default Dashboard;

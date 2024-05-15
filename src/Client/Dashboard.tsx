// Dashboard.jsx
import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import {useSelector } from "react-redux"


const Dashboard = () => {

  const Togglebar = useSelector((state:any)=> state.MenuBar)

  



  return (
    <div className="flex justify-between">
      <div className={`${Togglebar} ?  "w-[200px]" : "w-[100px]"  bg-green-500 `}>
        <Menu/>
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard;

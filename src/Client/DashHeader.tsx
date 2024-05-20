import { FaRegBell,FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
// import { ChangeBar } from "../Function/Slice";
// import Logo from '../assets/1-removebg-preview.png'
import { PiGearSix } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import DashMobile from "./DashMobile";
// import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
// import { RxDashboard } from "react-icons/rx";
// import { GoPlus } from "react-icons/go";
// import { LuWallet } from "react-icons/lu";
// import { PiSwap,PiSignOut } from "react-icons/pi";
// import { BiMoneyWithdraw } from "react-icons/bi";

const DashHeader = () => {

const [ShowMenu, setShowMenu] = useState(false)
const [ToggleMenu, setToggleMenu] = useState(false)

const ToggleSidebar = useSelector((state:any)=> state.MenuBar)
console.log(ToggleSidebar);

// const dispatch = useDispatch()

const HandleShow = ()=>{
  setShowMenu(!ShowMenu)
}

const HandleHeaderMenu = ()=>{
  setToggleMenu(!ToggleMenu)
}










  return (
    <div className="w-[100%] h-[13%] flex justify-between items-center shadow-sm">
      <div className="mobileHeader relative">
        {
          ToggleMenu ?  <MdOutlineClear className="text-2xl cursor-pointer" onClick={HandleHeaderMenu}/> :    <AiOutlineMenu className="text-2xl cursor-pointer" onClick={HandleHeaderMenu}/>
        }
        {
          ToggleMenu ? <DashMobile /> : null
        }
      
      </div>
      <div className="w-[25%] h-[100%]  flex justify-center items-center flex-col">
        <p className="text-lg font-medium text-[#CCCC]">Good Morning🌞 </p>
        <h2 className=" text-3xl font-semibold">Daniel Ben</h2>
      </div>
      <div className="w-[40%] h-[100%] flex justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-full bg-[#cccc] justify-center flex items-center ">
          <FaRegBell className="text-2xl"/>
        </div>
        <div className="w-[30%] h-[100%]  justify-center gap-2 items-center flex ">
          <div className="w-[55px] h-[55px] bg-[#cccc] rounded-full flex justify-center items-center">
            <p className="text-2xl">DB</p>
          </div>
          <div className="w-[10%] h-[40%] flex relative justify-center items-center">
            <FaCaretDown className="text-2xl cursor-pointer" onClick={HandleShow}/>
            {
              ShowMenu ? (<div className="w-[15rem] h-[13rem] flex justify-around items-start px-2 flex-col bg-white shadow-md absolute top-12 right-[-37px]">
                <div className="w-[70%] h-[20%]  gap-3 flex justify-start items-center">
                  <AiOutlineUser className="text-2xl"/>
                  <p className="text-xl">My Profile</p>
                </div>
                <div className="w-[70%] h-[20%] bg-red justify-start gap-2 flex items-center">
                  <PiGearSix className=" text-2xl"/>
                  <p className="text-xl">Account Settings</p>
                </div>
                
                <div className="w-[70%] h-[20%] justify-start gap-2 flex items-center">
                  <AiOutlineUser className="text-2xl"/>
                  <p className="text-xl">Log Out</p>
                </div>
              </div>) : null
            }
          </div>
        </div>
      </div>
    
      
    </div>
  )
}

export default DashHeader
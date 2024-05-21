import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import Logo from '../assets/1-removebg-preview.png'
import { ChangeBar } from "../Function/Slice";
import { RxDashboard } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { PiSwap,PiSignOut } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";



const Menu = () => {

const ToggleSidebar = useSelector((state:any)=> state.MenuBar)
console.log(ToggleSidebar);

const dispatch = useDispatch()




  return (
    <>
      <div className={`${ToggleSidebar ? "w-[200px] phone:hidden" : "w-[100px]" } h-screen phone:hidden`}>
        <div className={`${ToggleSidebar ? "w-[200px]" : "w-[100px]"} h-screen fixed flex-col items-center`}>
          <div className="w-[100%] h-[15%] flex  justify-center items-center">
            <img src={Logo} alt="" className="w-[70%] h-[80%] object-contain" />
            <div className=" my-6 w-full justify-end flex absolute -mr-3  text-[#023E8A] hover:cursor-pointer">
              {
                ToggleSidebar? (
                  <GoTriangleLeft
                    className="w-[20px] h-[20px] text-red cursor-pointer"
                    onClick={() => dispatch(ChangeBar())}
                  />
                ) : (
                  <GoTriangleRight
                    className="w-[20px] h-[20px] text-red cursor-pointer"
                    onClick={() => dispatch(ChangeBar())}
                  />
                )
              }
            </div>
          </div>
          <div className="w-[100%] h-[90%] bg-white flex justify-around flex-col items-center ">
            <div className="w-[100%] h-[70%]  flex flex-col justify-around items-center">
            <div className="w-[100%] h-[14%]  flex justify-center gap-1 items-center">
               <div className={`${ToggleSidebar ?  "flex justify-start gap-2  items-center  w-[70%]" : "flex justify-start items-center"}`}>
               <RxDashboard className="text-2xl text-[#b6b4b4]"/>
               {ToggleSidebar && (<div className="text-xl">Dashboard</div>)}
               </div>
           </div>
           <div className="w-[100%] h-[15%]  flex justify-center gap-1 items-center">
            <div className={`${ToggleSidebar ? "flex justify-start gap-2  items-center  w-[70%]" : "flex justify-around items-center"}`}>
            <GoPlus className="text-2xl  text-[#CCCCCC]"/>
            {ToggleSidebar &&( <div className="text-xl">Deposit</div>)}
            </div>
           </div>
           <div className="w-[100%] h-[15%]  flex justify-center gap-1 items-center">
            <div className={`${ToggleSidebar? "flex justify-start  gap-2 items-center  w-[70%]" : "flex justify-around items-center"}`}>
            <LuWallet className="text-2xl text-[#CCCCCC]"/>
            {ToggleSidebar && (<div className="text-xl">My Plans</div>)}
            </div>
           </div>
           <div className="w-[100%] h-[15%]  flex justify-center gap-1 items-center ">
            <div className={`${ToggleSidebar? "flex justify-start gap-2  items-center  w-[70%]" : "flex justify-around items-center"}`}>
            <BiMoneyWithdraw className="text-2xl text-[#CCCCCC]"/>
            {ToggleSidebar && (<div className="text-xl">Withdraw</div>)}
            </div>
           </div>
           <div className="w-[100%] h-[15%] flex justify-center gap-1 items-center">
            <div className={`${ToggleSidebar? "flex justify-start  gap-2  items-center  w-[70%]" : "flex justify-around items-center"}`}>
            <PiSwap className="text-2xl text-[#CCCCCC]"/>
            {ToggleSidebar && (<div className="text-xl">Transaction</div>)}
            </div>
           </div>
            </div>
            <div className="w-[100%] h-[20%]">
              <div className="w-[100%] h-[100%] flex justify-center items-center">
                <div className={`${ToggleSidebar ? " flex justify-start gap-2 items-center w-[70]" : "flex justify-center items-center"}`}>
                <PiSignOut className="text-2xl text-[#CCCCCC]"/>
                {ToggleSidebar && (<div className=" text-xl">Logout</div>)}
                </div>

  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

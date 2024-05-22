import TradingViewWidgettwo from "./TradingViewOne"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import History from "./History";
import RenderLineChart from "../Components/Graph";
const Overview = () => {

const [ShowAmount, setShowAmount] = useState(false)

const HandleShow = ()=>{
  setShowAmount(!ShowAmount)
}







  return (
    <div className="w-[100%] h-[100%] bg-[#ddd5d9]">
      <div className="w-[100%] h-[14%] bg-[#ddd5d9] flex justify-between  items-center">
        <div className="w-[23%] h-[100%] justify-center flex items-center smallPhone:w-[100%] phone:w-[50%]">
        <p className="text-3xl font-semibold phone:text-2xl">My Dashboard</p>
        </div>
        <div className="w-[70%] h-[100%] smallPhone:hidden  justify-center items-center flex">
          <TradingViewWidgettwo/>
        </div>
      </div>
      <div className="w-[100%] h-[40%] flex justify-around  items-center">
        <div className="w-[40%] h-[80%] bg-white rounded-md flex flex-col justify-around items-start phone:w-[90%] phone:h-[80%]">
          <div className="w-[50%] h-[20%] flex justify-start px-5 items-center">
            <p className="text-2xl smallPhone:text-lg">Wallet Balance</p>
          </div>
          <div className="w-[50%] h-[30%]  flex justify-start px-5 gap-4 items-center">
            <p className="text-3xl">
              {
                ShowAmount ? "*****" : "$0.00"
              }
            </p>
            <div className="w-[30px] h-[30px] bg-[#cccc] rounded-full flex justify-center items-center">
              {
                ShowAmount ?   <IoEyeOffOutline className=" text-[#979dac] cursor-pointer" onClick={HandleShow} /> :  <MdOutlineRemoveRedEye className="cursor-pointer text-[#979dac]" onClick={HandleShow} />
              }
            </div>
          </div>
          <div className="w-[100%] h-[40%] flex justify-around items-center  phone:h-[50%]">
            <button className="w-[30%] h-[60%] bg-blue-500 rounded-md gap-1 text-white text-xl font-semibold flex justify-center items-center phone:h-[45%] phone:text-lg phone:w-[30%] smallPhone:h-[52%] smallPhone:text-sm"> <GoPlus/> Fund Wallet</button>
            <button className="w-[30%] h-[60%] bg-green-500 rounded-md gap-1 text-white text-xl font-semibold flex justify-center items-center phone:h-[45%] phone:text-lg phone:w-[30%] smallPhone:h-[52%] smallPhone:text-sm"> <BiMoneyWithdraw/> Withdrawal</button>
            <button className="w-[30%] h-[60%] border-solid border-2 text-sky-500 font-semibold rounded-md gap-1 bg-[#edf2fb] text-xl border-sky-500 flex justify-center items-center phone:text-lg phone:w-[30%] phone:h-[45%] smallPhone:h-[52%] smallPhone:text-sm"> <LuWallet/> My Plans</button>
          </div>
        </div>
        <div className="w-[40%] h-[80%]  phone:hidden smallPhone:hidden">
          <RenderLineChart/>
        </div>
      </div>
      <div className="w-[100%] h-[50%] bg-red-500">
        <History/>
      </div>
    </div>
  )
}

export default Overview
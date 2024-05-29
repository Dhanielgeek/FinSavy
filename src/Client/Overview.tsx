import TradingViewWidgettwo from "../Components/TradingViewOne"
import TradingViewWidget from "../Components/TradingViewTwo"
import { FaRegEye ,FaRegEyeSlash,FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { PiHandDepositFill } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { useState } from "react";


const Overview = () => {


  const [ShowBalance, setShowBalance] = useState<boolean>(false)
  const [ShowDeposit, setShowDeposit] = useState(false)
  const [ShowTotalEarning, setShowTotalEarning] = useState(false)
  const [Withdraw, setWithdraw] = useState(false)
  const [IntrestEarn, setIntrestEarn] = useState(false)
  const [ActiveDeposit, setActiveDeposit] = useState(false)



  const HandleBalance = ()=>{
    setShowBalance(!ShowBalance)
  }
  const HandleDeposit = ()=>{
    setShowDeposit(!ShowDeposit)
  }
  const HandleTotalEarning = ()=>{
    setShowTotalEarning(!ShowTotalEarning)
  }
  const HandleWithdraw = ()=>{
    setWithdraw(!Withdraw)
  }
  const HandleIntrestEarn = ()=>{
    setIntrestEarn(!IntrestEarn)
  }
  const HandleActiveDeposit = ()=>{
    setActiveDeposit(!ActiveDeposit)
  }




  return (
    <div className="w-[100%]  h-[88vh] scroll bg-gray-200  scrollbar-thin scrollbar-track-transparent overflow-y-scroll phone:scrollbar-none">
      <div className="w-[25%] h-[10%] hidden  justify-start gap-3 items-center px-5  phone:w-[80%] phone:h-[10%] smallPhone:w-[40%] phone:flex">
        <p className="text-xl font-medium text-[#CCCC]">Welcome Back 👋</p>
        <h2 className=" text-3xl font-semibold phone:text-2xl">Daniel Ben</h2>
      </div>
      <div className="w-[100%] h-[10%] flex justify-center items-center phone:hidden smallPhone:hidden">
        <TradingViewWidgettwo/>
      </div>
      <div className="w-[100%] h-[40%] flex-wrap flex justify-around items-center">
        <div className="w-[27%] h-[45%] bg-[#Fdfdf7] shadow-md rounded-md flex flex-col justify-around items-end">
          <div className="w-[100%] h-[40%]  px-4 flex justify-between gap-8 items-center">
            <p className="font-medium text-lg text-gray-300">Total Balance</p>
            <div className="w-[30px] h-[30px] rounded-full bg-purple-200 flex justify-center items-center">
            <RiMoneyDollarCircleLine className="text-purple-600 text-lg"/>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex justify-start  gap-3 px-4 items-center">
            {
              ShowBalance ? <p className="text-xl font-semibold">$20,00.00</p>  :  <p>*******</p> 
            }
            
            {
              ShowBalance ?  <FaRegEyeSlash className=" cursor-pointer" onClick={HandleBalance}/> :  <FaRegEye className=" cursor-pointer" onClick={HandleBalance}/>
            }

          </div>
        </div>
         <div className="w-[27%] h-[45%] bg-[#Fdfdf7] shadow-md rounded-md flex flex-col justify-around items-end">
          <div className="w-[100%] h-[40%]  px-4 flex justify-between gap-8 items-center">
            <p className="font-medium text-lg text-gray-300">Total Deposit</p>
            <div className="w-[30px] h-[30px] rounded-full bg-yellow-200 flex justify-center items-center">
            <PiHandDepositFill className="text-[#ffc300] text-lg"/>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex justify-start  gap-3 px-4 items-center">
          {
              ShowDeposit ? <p className="text-xl font-semibold">$10,00.00</p>  :  <p>*******</p> 
            }
            
            {
              ShowDeposit ?  <FaRegEyeSlash className=" cursor-pointer" onClick={HandleDeposit}/> :  <FaRegEye className=" cursor-pointer" onClick={HandleDeposit}/>
            }
          </div>
        </div>
         <div className="w-[27%] h-[45%] bg-[#Fdfdf7] shadow-md rounded-md flex flex-col justify-around items-end">
          <div className="w-[100%] h-[40%]  px-4 flex justify-between gap-8 items-center">
            <p className="font-medium text-lg text-gray-300">Total Earnings</p>
            <div className="w-[30px] h-[30px] rounded-full bg-green-200 flex justify-center items-center">
            <RiMoneyDollarCircleLine className="text-green-600 text-lg"/>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex justify-start  gap-3 px-4 items-center">
          {
              ShowTotalEarning ? <p className="text-xl font-semibold">$50,00.00</p>  :  <p>*******</p> 
            }
            
            {
              ShowTotalEarning ?  <FaRegEyeSlash className=" cursor-pointer" onClick={HandleTotalEarning}/> :  <FaRegEye className=" cursor-pointer" onClick={HandleTotalEarning}/>
            }
          </div>
        </div>
         <div className="w-[27%] h-[45%] bg-[#Fdfdf7] shadow-md rounded-md flex flex-col justify-around items-end">
          <div className="w-[100%] h-[40%]  px-4 flex justify-between gap-8 items-center">
            <p className="font-medium text-lg text-gray-300">Total Withdrawn</p>
            <div className="w-[30px] h-[30px] rounded-full bg-red-200 flex justify-center items-center">
            <BiMoneyWithdraw className="text-red-600 text-lg"/>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex justify-start  gap-3 px-4 items-center">
          {
              Withdraw ? <p className="text-xl font-semibold">$2,00.00</p>  :  <p>*******</p> 
            }
            
            {
              Withdraw ?  <FaRegEyeSlash className=" cursor-pointer" onClick={HandleWithdraw}/> :  <FaRegEye className=" cursor-pointer" onClick={HandleWithdraw}/>
            }
          </div>
        </div>
         <div className="w-[27%] h-[45%] bg-[#Fdfdf7] shadow-md rounded-md flex flex-col justify-around items-end">
          <div className="w-[100%] h-[40%]  px-4 flex justify-between gap-8 items-center">
            <p className="font-medium text-lg text-gray-300">Total Interest Earn</p>
            <div className="w-[30px] h-[30px] rounded-full bg-emerald-200 flex justify-center items-center">
            <FaMoneyBillTrendUp className="text-emerald-600 text-lg"/>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex justify-start  gap-3 px-4 items-center">
          {
              IntrestEarn ? <p className="text-xl font-semibold">$60,00.00</p>  :  <p>*******</p> 
            }
            
            {
              IntrestEarn ?  <FaRegEyeSlash className=" cursor-pointer" onClick={HandleIntrestEarn}/> :  <FaRegEye className=" cursor-pointer" onClick={HandleIntrestEarn}/>
            }
          </div>
        </div>
         <div className="w-[27%] h-[45%] bg-[#Fdfdf7] shadow-md rounded-md flex flex-col justify-around items-end">
          <div className="w-[100%] h-[40%]  px-4 flex justify-between gap-8 items-center">
            <p className="font-medium text-lg text-gray-300">Active Deposit</p>
            <div className="w-[30px] h-[30px] rounded-full bg-blue-200 flex justify-center items-center">
            <GiMoneyStack className="text-blue-600 text-lg"/>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex justify-start  gap-3 px-4 items-center">
          {
              ActiveDeposit ? <p className="text-xl font-semibold">$5,00.00</p>  :  <p>*******</p> 
            }
            
            {
              ActiveDeposit ?  <FaRegEyeSlash className=" cursor-pointer" onClick={HandleActiveDeposit}/> :  <FaRegEye className=" cursor-pointer" onClick={HandleActiveDeposit}/>
            }
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] py-11 px-5 flex justify-center items-center">
        <TradingViewWidget/>
      </div>
    </div>
  )
}

export default Overview
import Logo from '../assets/1-removebg-preview.png'
import { RxDashboard } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { PiSwap,PiSignOut } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";



const DashMobile = () => {
  return (
    <div className="w-[100%] h-[100%] ">
    <div className="w-[100%] h-[15%] flex justify-start items-center">
        <img src={Logo} alt="" className=' w-[40%] h-[100%] object-contain' />
        <p className='text-xl font-medium text-blue-400'>Finsavy Trading</p>
    </div>
    <div className='w-[100%] h-[70%]  flex flex-col justify-around items-center'>
     <div className='w-[100%] h-[14%] flex justify-start px-9 gap-2 items-center'>
         <RxDashboard className='text-3xl' />
         <p className='text-2xl'>Dashboard</p>
     </div>
     <div className='w-[100%] h-[14%] flex justify-start px-9 gap-2 items-center'>
         <GoPlus className='text-3xl' />
         <p className='text-2xl'>Deposit</p>
     </div>
     <div className='w-[100%] h-[14%] flex justify-start px-9 gap-2 items-center'>
         <LuWallet className='text-3xl' />
         <p className='text-2xl'>My Plans</p>
     </div>
     <div className='w-[100%] h-[14%] flex justify-start px-9 gap-2 items-center'>
         <BiMoneyWithdraw className='text-3xl' />
         <p className='text-2xl'>Withdrawal</p>
     </div>
     <div className='w-[100%] h-[14%] flex justify-start px-9 gap-2 items-center'>
         <PiSwap className='text-3xl' />
         <p className='text-2xl'>Transaction</p>
     </div>
    </div>
    <div className='w-[100%] h-[15%] bg-blu flex justify-start items-center'>
        <div className='w-[100%] h-[100%] flex justify-start px-11 gap-2 items-center'>
            <PiSignOut className='text-3xl ' />
            <p className='text-2xl'>Logout</p>
            </div>
    </div>
    </div>
  )
}

export default DashMobile
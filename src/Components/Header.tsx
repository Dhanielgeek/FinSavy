import { NavLink } from "react-router-dom"
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";

const Header = () => {

const [toggle, setToggle] = useState<boolean>(false)


const HandleTogle = ()=>{
  setToggle(!toggle)
}




  return (
    // Web View//
    <div className="w-[100%] h-[10vh]  bg-white shadow-sm flex justify-around  items-center">
      <div className="w-[20%] h-[100%] flex justify-center items-center">
        <h2 className=" font-extrabold text-2xl logo-name text-blue-500 phone:text-3xl smallPhone:text-3xl">FinSavy</h2>
      </div>
      <div className=" w-[45%] h-[100%] flex justify-around items-center phone:hidden smallPhone:hidden">
        <NavLink to='' className='text-[#6c757d] font-medium text-lg'>Features</NavLink>
        <NavLink to='' className='text-[#6c757d] font-medium text-lg'>Products</NavLink>
        <NavLink to='' className='text-[#6c757d] font-medium text-lg'>Blog</NavLink>
        <NavLink to='' className='text-[#6c757d] font-medium text-lg'>About</NavLink>
      </div>
      <div className=" w-[25%] h-[100%] flex justify-around items-center phone:hidden smallPhone:hidden">
        <button className=" w-[30%] h-[70%]  border-blue-500  border-solid border-2 text-blue-500 font-semibold rounded-lg">Login</button>
        <button className=" w-[45%] h-[70%] bg-blue-500 text-lg font-semibold text-white rounded-lg">Create Account</button>
      </div>
      {/* Mobile View */}
      <div className="Mobile relative ">      
        {
        
        toggle ?   <MdOutlineClear className="text-4xl" onClick={HandleTogle}/> :  <RiMenu4Fill className="text-4xl" onClick={HandleTogle} />

        }

       {
         toggle ? (<div className="w-[28rem] h-[35rem] bg-white absolute top-[100%] right-[-100px]  flex flex-col justify-around  items-start px-7 smallPhone:w-[25rem]">
        <div className=" w-[100%] h-[100%] flex justify-around items-start px-4 flex-col">
        <NavLink to='' className='text-[#6c757d] font-medium text-2xl'>Features</NavLink>
        <NavLink to='' className='text-[#6c757d] font-medium text-2xl'>Products</NavLink>
        <NavLink to='' className='text-[#6c757d] font-medium text-2xl'>Blog</NavLink>
        <NavLink to='' className='text-[#6c757d] font-medium text-2xl'>About</NavLink>
      </div>
      <div className=" w-[100%] h-[45%] flex justify-center gap-4 items-start px-4 flex-col">
        <button className=" w-[70%] h-[30%]  border-blue-500  border-solid border-2 text-blue-500 font-semibold rounded-lg">Login</button>
        <button className=" w-[70%] h-[30%] bg-blue-500 text-lg font-semibold text-white rounded-lg">Create Account</button>
      </div>
         </div>) : null
       }
     
      
      </div>                                                                                                                                                                                                                                                                            
    </div>
  )
}

export default Header
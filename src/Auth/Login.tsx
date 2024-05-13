import Logo from '../assets/1-removebg-preview.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-[100%] h-[45rem] bg-[#4B3BC6] flex justify-center items-center">
      <div className="w-[35%] h-[80%] bg-slate-50 rounded-lg flex flex-col justify-center gap-2 items-center phone:w-[90%]">
        <div className="w-[30%] h-[20%] flex justify-center items-center">
          <img src={Logo} alt="" />
        </div>
        <div className='w-[100%] h-[14%] flex justify-center items-center flex-col'>
          <h2 className=' font-medium text-4xl'>👋 Welcome Back !</h2>
          <p className='text-lg phone:text-center text-gray-400 smallPhone:text-[16px]'>Login to continue with FinsTrading.com user Panel</p>
        </div>
        <div className='w-[85%] h-[14%]'>
          <label htmlFor="" className='text-xl font-medium text-[#454d4e]'>Email or UserName</label>
          <input type="text" placeholder='Your Email or UserName' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[60%] rounded-md' />
        </div>
        <div className='w-[85%] h-[14%]'>
          <label htmlFor="" className='text-xl font-medium text-[#454d4e]'>Password</label>
          <input type="password" placeholder='Your Password' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[60%] rounded-md' />
        </div>
        <div className='w-[85%] h-[10%] flex justify-between items-center'>
          <div className='w-[50%] h-[100%]  flex justify-start gap-2 items-center'>
            <input type="checkbox" className=' w-[18px] h-[18px]' />
            <p className=' text-xl font-medium text-gray-400 smallPhone:text-[16px]'>Remember me</p>
          </div>
          <p className=' text-xl smallPhone:text-[16px]'>
            <Link to='/forget'>Forget Password</Link>
          </p>
        </div>
        <div className='w-[80%] h-[18%]  flex justify-around items-center flex-col'>
          <button className='w-[100%] h-[47%] bg-[#5270FC] rounded-full text-lg text-white'>Account Login</button>
          <p className='text-xl smallPhone:text-[16px]'>Don't have an account ? <Link to='/signup' className='text-red-500'>Signup for free</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
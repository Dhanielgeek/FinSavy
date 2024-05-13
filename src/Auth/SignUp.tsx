import Logo from '../assets/1-removebg-preview.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="w-[100%] h-[55rem]  flex justify-center bg-[#4B3BC6] items-center">
      <div className="w-[60%] h-[80%] bg-slate-50 rounded-lg flex justify-center gap-5 items-start flex-col">
        <div className="w-[20%] h-[10%] flex px-2  justify-start items-center">
          <img src={Logo} alt="" className='w-[100%] h-[100%] object-contain' />
        </div>
        <div className="w-[50%]  h-[12%]  flex justify-center items-start px-8 flex-col">
          <h2 className="font-semibold text-4xl">
            💪 Create Account
          </h2>
          <p className="text-lg text-gray-400">Register to continue with FinsTrading.com</p>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center'>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>First Name <span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Your First Name' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' />
          </div>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col '>
          <label htmlFor="" className='font-medium text-xl text-[#547177]'>Last Name<span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Your Last Name' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' />
          </div>
        </div>
        <div className='w-[100%] h-[10%]  flex justify-center items-center'>
        <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>Email<span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Enter Your Email Address' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' />
          </div>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>User Name<span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Enter Your User Name' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' />
          </div>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center'>
        <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>Password<span className='text-[red]'>*</span> </label>
            <input type="password" placeholder='Enter Your Password'  className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' />
          </div>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>Confirm Password<span className='text-[red]'>*</span> </label>
            <input type="password" placeholder='Confirm Your Password' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' />
          </div>
        </div>
        <div className='w-[100%] h-[28%]'>
          <div className='w-[100%] h-[28%] flex justify-start px-7 gap-2 items-center'>
            <input type="checkbox"/>
            <p className='text-xl text-[#547177] '>I agree with <span className='text-red-500'>Privacy & Policy</span> and <span className='text-red-500'>Terms & Conditions</span> </p>
          </div>
          <div className='w-[100%] h-[40%] flex justify-center items-center'>
            <button className='w-[90%] h-[60%] bg-[#5270FC] rounded-full text-lg text-white'>Create Account</button>
          </div>
          <div className='w-[100%] h-[23%]  flex justify-center items-center'>
            <p className='text-xl text-[#547177]'>Aleady have an account? <Link to='/' className='text-red-500'>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
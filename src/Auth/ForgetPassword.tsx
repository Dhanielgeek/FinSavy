import { Link } from "react-router-dom"

const ForgetPassword = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[#4B3BC6] flex justify-center items-center">
      <div className="w-[40%] h-[70%] bg-slate-50 rounded-lg flex justify-center gap-4 items-center flex-col phone:w-[90%]">
        <div className="w-[100%] h-[10%] flex justify-center items-center">
          <h2 className="font-semibold text-4xl">
            Forget Password
          </h2>
        </div>
        <div className="w-[100%] h-[10%]   flex justify-center items-center smallPhone:w-[80%]">
          <p className="text-lg phone:text-center text-gray-400">Enter your email address to reset your password</p>
        </div>
        <div className="w-[65%] h-[20%]  flex justify-center items-center phone:w-[90%]">
          <input type="email" placeholder='Enter Your Email' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' />
      </div>
      <div className="w-[100%] h-[15%]  flex justify-center items-center">
        <button className="w-[60%] h-[80%] rounded-full bg-[#5270FC] phone:w-[80%] text-lg text-white">EMAIL PASSWORD RESET LINK</button>
      </div>
      <div className="w-[90%] h-[10%]  flex justify-center items-center">
        <p className="text-xl text-[#454d4e] phone:text-center">Already have an account? <Link className="text-red-500" to='/login'>Login</Link></p>
      </div>
      </div>
    </div>
  )
}

export default ForgetPassword
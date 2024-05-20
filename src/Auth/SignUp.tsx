import Logo from '../assets/1-removebg-preview.png'
import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const SignUp = () => {


const [firstName, setfirstName] = useState<string>('')
const [lastName, setlastName] = useState<string>('')
const [userName, setuserName] = useState<string>('')
const [email, setemail] = useState<string>('')
const [password, setpassword] = useState<string>('')
const [confirmPassword, setconfirmPassword] = useState<string>('')
const [loading, setloading] = useState<boolean>(false)



const url = 'https://fin-savy-application.onrender.com/api/v1/users/signup'
const data = {firstName,lastName,userName,email,password,confirmPassword}

const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
const isValidPassword = passwordRegex.test(password);

const HandleSignup = async (e:FormEvent)=>{

  e.preventDefault()

  const Toastloading = toast.loading('Please wait')


  if(!firstName || !userName || !lastName || !email || !password || !confirmPassword ){
    toast.error('Please input all fields')
  }else if(confirmPassword  !== password){
    toast.error('password not correct')
  } else if (!isValidPassword) {
    toast.error('Password must contain at least one special character');
  } else{
    setloading(true)
    try{
      const response = await axios.post(url,data)
      toast.success(response.data.message);
      setconfirmPassword('')
      setfirstName('')
      setpassword('')
      setfirstName('')
      setuserName('')
      setconfirmPassword('')
      setemail('')
    }
    catch(error){
      console.log(error);
    }
    finally{
      setloading(false)
      toast.dismiss(Toastloading)
    }
  }

  
}





  return (
    <div className="w-[100%] h-[55rem]  flex justify-center bg-[#4B3BC6] items-center phone:h-[82rem]">
      <div className="w-[60%] h-[80%] bg-slate-50 rounded-lg flex justify-center gap-5 items-start flex-col phone:w-[90%]">
        <div className="w-[20%] h-[20%] flex justify-center items-center phone:w-[40%] ">
          <img src={Logo} alt="" className='' />
        </div>
        <div className="w-[50%]  h-[12%] phone:w-[100%]  flex justify-center items-start px-8 flex-col">
          <h2 className="font-semibold text-4xl smallPhone:text-2xl">
            💪 Create Account
          </h2>
          <p className="text-lg phone:text-center text-gray-400 ">Register to continue with FinsTrading.com</p>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center phone:flex-col gap-2 phone:h-[20.5%]'>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col phone:w-[100%]'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>First Name <span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Your First Name' className='w-[100%]  bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' onChange={(e)=> setfirstName(e.target.value)} />
          </div>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col phone:w-[100%]'>
          <label htmlFor="" className='font-medium text-xl text-[#547177]'>Last Name<span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Your Last Name' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' onChange={(e)=>setlastName(e.target.value)} />
          </div>
        </div>
        <div className='w-[100%] h-[10%]  flex justify-center items-center  phone:flex-col gap-2 phone:h-[20.5%] '>
        <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col phone:w-[100%]'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>Email<span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Enter Your Email Address' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' onChange={(e)=> setemail(e.target.value)} />
          </div>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col phone:w-[100%]'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>User Name<span className='text-[red]'>*</span> </label>
            <input type="text" placeholder='Enter Your User Name' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' onChange={(e)=>setuserName(e.target.value)} />
          </div>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center phone:flex-col gap-2 phone:h-[20.5%]'>
        <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col phone:w-[100%]'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>Password<span className='text-[red]'>*</span> </label>
            <input type="password" placeholder='Enter Your Password'  className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' onChange={(e)=>setpassword(e.target.value)} />
          </div>
          <div className='w-[50%] h-[100%] px-5 flex justify-center items-start flex-col phone:w-[100%]'>
            <label htmlFor="" className='font-medium text-xl text-[#547177]'>Confirm Password<span className='text-[red]'>*</span> </label>
            <input type="password" placeholder='Confirm Your Password' className='w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md' onChange={(e)=>setconfirmPassword(e.target.value)} />
          </div>
        </div>
        <div className='w-[100%] h-[28%]'>
          <div className='w-[100%] h-[28%] flex justify-start px-7 gap-2 items-center'>
            <input type="checkbox"/>
            <p className='text-xl text-[#547177] smallPhone:text-sm '>I agree with <span className='text-red-500'>Privacy & Policy</span> and <span className='text-red-500'>Terms & Conditions</span> </p>
          </div>
          <div className='w-[100%] h-[40%] flex justify-center items-center'>
            <button className='w-[90%] h-[60%] bg-[#5270FC] rounded-full text-lg text-white' onClick={HandleSignup}>
            {loading ? "LOADING" : "CREATE ACCOUNT"}
            </button>
          </div>
          <div className='w-[100%] h-[23%]  flex justify-center items-center'>
            <p className='text-xl text-[#547177]'>Aleady have an account? <Link to='/login' className='text-red-500'>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
import HeroImage from '../../assets/intro.png'


const Hero = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-blue-100 flex justify-around items-center phone:flex-col smallPhone:h-[49rem]">
        <div className=" w-[30%] h-[82%]  flex justify-around flex-col phone:w-[90%] smallPhone:w-[90%]">
            <div className="w-[100%] h-[35%]  flex justify-center items-center px-3 smallPhone:">
                <h2 className=" font-extrabold text-[3.4rem] text-[#082552] smallPhone:text-[2.2rem]">Finance with Finesse.</h2>
            </div>
            <div className="w-[100%]  h-[20%] flex justify-center  items-center px-3 smallPhone:h-[60%]">
                <p className=" font-medium text-[#6c757d] text-lg smallPhone:text-[13px]">Get savvy with your finances! FinSavy combines expert knowledge with user-friendly tools to help you save, invest, and learn. Start your journey towards financial fluency and freedom with us. Your wallet will thank you.</p>
            </div>
            <div className=" w-[100%] h-[15%]  flex justify-start items-center px-3 smallPhone:h-[20%]">
                <button className=" w-[40%] h-[60%] bg-blue-500 rounded-md text-white font-bold">Get Started</button>
            </div>
        </div>
        <div className="w-[45%] h-[90%]  flex justify-center items-center phone:w-[80%] smallPhone:w-[90%]">
            <img src={HeroImage} alt="" className=' w-[100%] h-[100%] object-contain' />  
        </div>
    </div>
  )
}

export default Hero
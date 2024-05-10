

const Welcome = () => {
  return (
    <div className="w-[100%] h-[80vh]  flex justify-center items-center smallPhone:h-[100vh]">
        <div className="w-[60%] h-[80%] flex flex-col justify-around items-center  phone:w-[90%]">
            <div className="w-[100%] h-[10%] flex justify-center items-center">
                <p className=" font-semibold text-3xl text-blue-500">Welcome to FinSavy</p>
            </div>
            <div className=" w-[100%] h-[20%]  flex justify-center items-center">
                <h2 className=" font-semibold text-5xl phone:text-center smallPhone:text-3xl">Tired of struggling financially?</h2>
            </div>
            <div className="w-[100%] h-[15%] flex justify-center items-center">
                <p className="text-lg text-center text-[#6c757d] ">Trust is our currency. We are committed to the security of your money and the protection of your account.</p>
            </div>
            <div className="w-[100%] h-[25%] flex justify-center items-center gap-3">
                <button className=" w-[20%] h-[50%] bg-blue-500 text-white font-medium rounded-md phone:w-[40%] phone:h-[30%] smallPhone:h-[40%]">Get Started</button>
                <button className=" w-[20%] h-[50%] border border-gray-500 text-gray-500 font-semibold rounded-md phone:w-[40%] smallPhone:h-[40%] phone:h-[30%]">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Welcome